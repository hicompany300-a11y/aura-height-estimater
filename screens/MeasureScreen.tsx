
import React, { useState, useEffect, useRef } from 'react';
// Correct: Import GoogleGenAI from @google/genai
import { GoogleGenAI } from '@google/genai';
import CameraFeed from '../components/CameraFeed';
import ResultModal from '../components/ResultModal';
import useLocalStorage from '../hooks/useLocalStorage';
import { HeightRecord, Unit } from '../types';
import { CameraIcon } from '../components/Icons';

// Correct: Initialize the Google GenAI client with the API key from environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export default function MeasureScreen() {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isMeasuring, setIsMeasuring] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [, setHistory] = useLocalStorage<HeightRecord[]>('heightHistory', []);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let mediaStream: MediaStream | null = null;
    
    const getCameraStream = async () => {
      try {
        mediaStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user' },
          audio: false,
        });
        setStream(mediaStream);
      } catch (err) {
        console.error("Error accessing camera:", err);
        setError('Could not access camera. Please check permissions and try again.');
      }
    };

    getCameraStream();

    return () => {
      if (mediaStream) {
        mediaStream.getTracks().forEach(track => track.stop());
      }
    };
  }, []); // Run only once on mount and unmount

  const captureFrameAsBase64 = (): string => {
    const video = videoRef.current;
    if (!video) return '';
    
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) return '';
    
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Return as JPEG base64 string, remove data URL prefix
    return canvas.toDataURL('image/jpeg').split(',')[1];
  };

  const handleMeasure = async () => {
    if (isMeasuring) return;
    setIsMeasuring(true);
    setError(null);
    try {
      const base64Image = captureFrameAsBase64();
      if (!base64Image) {
        throw new Error("Could not capture frame from video.");
      }

      // Correct: Prepare image part for multi-modal request.
      const imagePart = {
        inlineData: {
          mimeType: 'image/jpeg',
          data: base64Image,
        },
      };

      // Correct: Prepare text part with a clear prompt.
      const textPart = {
        text: "You are an expert height estimation AI. Analyze the image, which includes 'HEAD' and 'FEET' marker lines. Estimate the person's height based on these markers. Provide the result ONLY as a string in feet and inches, like `5' 11\"`. Do not add any other text, explanation, or labels.",
      };
      
      // Correct: Call generateContent with the correct model and multi-part content.
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: { parts: [imagePart, textPart] },
      });

      // Correct: Extract text from the response object.
      const heightResult = response.text.trim();
      setResult(heightResult);

    } catch (err) {
      console.error("Error during measurement:", err);
      setError('Failed to estimate height. Please try again.');
    } finally {
      setIsMeasuring(false);
    }
  };

  const handleSave = (name: string, height: string) => {
    const newRecord: HeightRecord = {
      id: new Date().toISOString(),
      name,
      height,
      date: new Date().toLocaleDateString(),
      unit: Unit.Imperial, // Assuming imperial based on prompt
    };
    setHistory(prevHistory => [newRecord, ...prevHistory]);
    setResult(null);
  };

  const handleReset = () => {
    setResult(null);
  };

  const renderContent = () => {
    if (error) {
      return (
        <div className="flex flex-col items-center justify-center h-full text-center p-4">
          <CameraIcon className="w-16 h-16 text-red-400 mb-4" />
          <h2 className="text-xl font-semibold text-slate-700 mb-2">Camera Error</h2>
          <p className="text-slate-500">{error}</p>
        </div>
      );
    }
    
    if (stream) {
      return <CameraFeed stream={stream} onMeasure={handleMeasure} isMeasuring={isMeasuring} videoRef={videoRef} />;
    }

    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-slate-500">Initializing camera...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      {renderContent()}
      <ResultModal result={result} onReset={handleReset} onSave={handleSave} />
    </div>
  );
}
