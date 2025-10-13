import React from 'react';

interface MeasurementLineProps {
  y: number;
  onDragStart: () => void;
  label: string;
}

const MeasurementLine: React.FC<MeasurementLineProps> = ({ y, onDragStart, label }) => {
  return (
    <div
      className="absolute w-full h-12 flex items-center justify-center cursor-ns-resize z-10"
      style={{ top: `${y}%`, transform: 'translateY(-50%)' }}
      onMouseDown={onDragStart}
      onTouchStart={onDragStart}
    >
      <div className="relative w-full flex items-center justify-center">
        <div className="w-full h-0.5 bg-indigo-400/50"></div>
        <div className="absolute w-1/3 h-1 bg-indigo-400 shadow-lg" style={{boxShadow: '0 0 15px rgba(99, 102, 241, 0.7)'}}></div>
        <span className="absolute left-4 bg-black/50 backdrop-blur-sm text-indigo-200 text-xs font-bold px-2 py-1 rounded">
          {label}
        </span>
      </div>
    </div>
  );
};

export default MeasurementLine;