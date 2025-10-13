import React, { useState, useRef, useEffect, useCallback } from 'react';
import MeasurementLine from './MeasurementLine';
import MeasureButton from './MeasureButton';

interface CameraFeedProps {
  stream: MediaStream;
  onMeasure: () => void;
  isMeasuring: boolean;
  videoRef: React.RefObject<HTMLVideoElement>;
}

const CameraFeed: React.FC<CameraFeedProps> = ({ stream, onMeasure, isMeasuring, videoRef }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [topY, setTopY] = useState(20);
  const [bottomY, setBottomY] = useState(80);
  const [draggingLine, setDraggingLine] = useState<'top' | 'bottom' | null>(null);

  useEffect(() => {
    if (videoRef.current && !videoRef.current.srcObject) {
      videoRef.current.srcObject = stream;
    }
  }, [stream, videoRef]);

  const handleDragStart = (line: 'top' | 'bottom') => {
    setDraggingLine(line);
  };
  
  const handleDragMove = useCallback((clientY: number) => {
    if (!draggingLine || !containerRef.current) return;
    
    const { top, height } = containerRef.current.getBoundingClientRect();
    const newY = ((clientY - top) / height) * 100;
    
    if (draggingLine === 'top') {
      setTopY(Math.max(0, Math.min(newY, bottomY - 5)));
    } else {
      setBottomY(Math.min(100, Math.max(newY, topY + 5)));
    }
  }, [draggingLine, topY, bottomY]);

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientY);
  };

  const handleDragEnd = useCallback(() => {
    setDraggingLine(null);
  }, []);

  useEffect(() => {
    window.addEventListener('mouseup', handleDragEnd);
    window.addEventListener('touchend', handleDragEnd);
    
    return () => {
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchend', handleDragEnd);
    };
  }, [handleDragEnd]);


  return (
    <div 
        ref={containerRef}
        className="w-full h-full relative overflow-hidden select-none"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
    >
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="absolute top-8 inset-x-0 flex flex-col justify-center items-center text-white text-center p-8 z-10 pointer-events-none">
          <p className="font-semibold bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full">Align lines with head and feet</p>
      </div>

      <MeasurementLine y={topY} onDragStart={() => handleDragStart('top')} label="HEAD" />
      <MeasurementLine y={bottomY} onDragStart={() => handleDragStart('bottom')} label="FEET" />

      <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex justify-center">
        <MeasureButton onClick={onMeasure} isMeasuring={isMeasuring} />
      </div>
    </div>
  );
};

export default CameraFeed;