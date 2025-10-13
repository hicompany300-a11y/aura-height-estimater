import React from 'react';
import { RulerIcon, ChartBarIcon, SparklesIcon, UserCircleIcon } from './Icons';

interface BottomNavProps {
  activeScreen: string;
  setActiveScreen: (screen: string) => void;
}

const navItems = [
  { id: 'measure', label: 'Measure', icon: RulerIcon },
  { id: 'history', label: 'History', icon: ChartBarIcon },
  { id: 'exercises', label: 'Exercises', icon: SparklesIcon },
  { id: 'profile', label: 'Profile', icon: UserCircleIcon },
];

const BottomNav: React.FC<BottomNavProps> = ({ activeScreen, setActiveScreen }) => {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-lg border-t border-slate-200 shadow-t-xl">
      <div className="flex justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = activeScreen === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveScreen(item.id)}
              className={`flex flex-col items-center justify-center w-full pt-3 pb-2 transition-colors duration-200 ${
                isActive ? 'text-indigo-500' : 'text-slate-500 hover:text-indigo-500'
              }`}
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="text-xs font-semibold">{item.label}</span>
              {isActive && (
                <div className="w-1/2 h-0.5 bg-indigo-500 rounded-full mt-1"></div>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
