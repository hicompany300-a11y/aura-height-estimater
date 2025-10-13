import React, { useState } from 'react';
import { XIcon, CheckIcon } from './Icons';

interface ResultModalProps {
  result: string | null;
  onReset: () => void;
  onSave: (name: string, height: string) => void;
}

const ResultModal: React.FC<ResultModalProps> = ({ result, onReset, onSave }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [name, setName] = useState('');

  if (!result) return null;

  const handleSaveClick = () => {
    if (isSaving && name.trim()) {
      onSave(name.trim(), result);
      setIsSaving(false);
      setName('');
    } else {
      setIsSaving(true);
    }
  };

  const handleResetClick = () => {
    setIsSaving(false);
    setName('');
    onReset();
  }

  return (
    <div className="absolute inset-0 bg-slate-800/40 backdrop-blur-md flex items-center justify-center z-50 p-4 transition-opacity duration-300 animate-fade-in">
      <div className="relative bg-white border border-slate-200 rounded-2xl p-8 text-center max-w-sm w-full shadow-2xl animate-slide-up">
        <button onClick={handleResetClick} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors">
          <XIcon className="w-6 h-6" />
        </button>
        <h2 className="text-lg font-medium text-indigo-500 mb-2">Estimated Height</h2>
        <p className="text-6xl font-bold text-slate-800 mb-6">{result}</p>
        
        {isSaving && (
          <div className="mb-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name to save"
              className="w-full bg-slate-100 border border-slate-300 text-slate-700 py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <button 
            onClick={handleResetClick}
            className="w-full bg-slate-200 text-slate-700 font-bold py-3 px-6 rounded-full hover:bg-slate-300 transition-colors transform hover:scale-105"
          >
            Measure Again
          </button>
          <button 
            onClick={handleSaveClick}
            className="w-full bg-indigo-500 text-white font-bold py-3 px-6 rounded-full hover:bg-indigo-600 transition-colors transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <CheckIcon className="w-5 h-5"/>
            <span>{isSaving ? 'Confirm' : 'Save'}</span>
          </button>
        </div>
      </div>
       <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ResultModal;