import React, { useState, useEffect } from 'react';
import { exercises } from '../data/content';
import { ChevronRightIcon, ClockIcon } from '../components/Icons';
import { Exercise } from '../types';

function Timer({ duration, onFinish }: { duration: number, onFinish: () => void }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      onFinish();
      return;
    }
    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft, onFinish]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="text-6xl font-bold text-indigo-500">
      {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
    </div>
  );
}


export default function ExercisesScreen() {
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    // Reset timer when exercise changes
    setIsTimerRunning(false);
  }, [selectedExercise]);

  if (selectedExercise) {
    return (
      <div className="p-4 pt-6 pb-24">
        <button onClick={() => setSelectedExercise(null)} className="flex items-center text-indigo-500 font-semibold mb-4 transition-transform hover:-translate-x-1">
            <ChevronRightIcon className="w-5 h-5 mr-1 transform rotate-180" />
            Back to Exercises
        </button>
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <img src={selectedExercise.image} alt={selectedExercise.title} className="w-full h-48 object-cover"/>
            <div className="p-6">
                <h1 className="text-2xl font-bold text-slate-800 mb-2">{selectedExercise.title}</h1>
                <p className="text-slate-600 mb-6">{selectedExercise.description}</p>
                
                <h2 className="text-lg font-semibold text-slate-700 mb-3">How to Perform:</h2>
                <ol className="list-decimal list-inside space-y-2 text-slate-600 mb-6">
                    {selectedExercise.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>

                <div className="bg-slate-50 p-4 rounded-lg text-center">
                     {isTimerRunning ? (
                        <Timer duration={selectedExercise.duration} onFinish={() => setIsTimerRunning(false)} />
                    ) : (
                        <div className="flex items-center justify-center text-4xl text-slate-400 font-bold">
                            <ClockIcon className="w-8 h-8 mr-2" />
                            <span>{Math.floor(selectedExercise.duration / 60)} min</span>
                        </div>
                    )}

                    <button
                        onClick={() => setIsTimerRunning(!isTimerRunning)}
                        className="mt-4 w-full bg-indigo-500 text-white font-bold py-3 px-6 rounded-full hover:bg-indigo-600 transition-colors transform active:scale-95"
                    >
                        {isTimerRunning ? 'Pause Timer' : 'Start Timer'}
                    </button>
                </div>
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 pt-6 pb-24">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Height Exercises</h1>
      <div className="space-y-3">
        {exercises.map((exercise, index) => (
          <button
            key={index}
            onClick={() => setSelectedExercise(exercise)}
            className="w-full bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between text-left hover:border-indigo-400 hover:shadow-md transition-all duration-200 transform hover:scale-[1.02]"
          >
            <div>
              <p className="text-lg font-semibold text-slate-700">{exercise.title}</p>
              <p className="text-sm text-slate-500">{Math.floor(exercise.duration / 60)} min</p>
            </div>
            <ChevronRightIcon className="w-6 h-6 text-slate-400" />
          </button>
        ))}
      </div>
    </div>
  );
}
