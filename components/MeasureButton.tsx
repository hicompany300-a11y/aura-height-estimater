import React from 'react';
import { RulerIcon, SpinnerIcon } from './Icons';

interface MeasureButtonProps {
  onClick: () => void;
  isMeasuring: boolean;
}

const MeasureButton: React.FC<MeasureButtonProps> = ({ onClick, isMeasuring }) => {
  return (
    <button
      onClick={onClick}
      disabled={isMeasuring}
      className="relative w-20 h-20 rounded-full bg-indigo-500 text-white flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 disabled:opacity-70 disabled:scale-100 shadow-2xl shadow-indigo-500/30"
    >
      <span className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-0" style={{ animationPlayState: isMeasuring ? 'running' : 'paused' }}></span>
      {isMeasuring ? (
        <SpinnerIcon className="w-8 h-8 animate-spin" />
      ) : (
        <RulerIcon className="w-8 h-8" />
      )}
    </button>
  );
};

export default MeasureButton;