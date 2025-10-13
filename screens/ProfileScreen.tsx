import React, { useState, useEffect } from 'react';
import { User } from '../types';
import AuthModal from '../components/AuthModal';
import { BellIcon, UserCircleIcon } from '../components/Icons';
import { quotes } from '../data/content';

interface ProfileScreenProps {
  user: User | null;
  setUser: (user: User | null) => void;
}

const dailyQuote = quotes[Math.floor(Math.random() * quotes.length)];

export default function ProfileScreen({ user, setUser }: ProfileScreenProps) {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [alarmTime, setAlarmTime] = useState('');
  const [alarmMessage, setAlarmMessage] = useState('');
  
  useEffect(() => {
    let timeoutId: number;
    if (alarmTime) {
      const now = new Date();
      const [hours, minutes] = alarmTime.split(':').map(Number);
      const alarmDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
      
      if (alarmDate > now) {
        const timeToAlarm = alarmDate.getTime() - now.getTime();
        timeoutId = window.setTimeout(() => {
          alert("Time to wake up!");
          setAlarmMessage('Alarm finished!');
        }, timeToAlarm);
        setAlarmMessage(`Alarm set for ${alarmTime}`);
      } else {
        setAlarmMessage('Please set a future time.');
      }
    }
    return () => clearTimeout(timeoutId);
  }, [alarmTime]);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="p-4 pt-6 pb-24">
      <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-slate-800">Profile</h1>
          {user && <button onClick={handleLogout} className="text-sm font-semibold text-indigo-500">Log Out</button>}
      </div>
      
      {user ? (
        <div className="text-center">
            <UserCircleIcon className="w-24 h-24 mx-auto text-slate-300 mb-2"/>
            <h2 className="text-xl font-bold">Welcome, {user.name}!</h2>
            <p className="text-slate-500">{user.email}</p>
        </div>
      ) : (
        <div className="text-center p-6 bg-white rounded-lg border border-slate-200">
          <p className="mb-4 text-slate-600">Log in to save your history across devices.</p>
          <button onClick={() => setShowAuthModal(true)} className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-full">
            Log In or Sign Up
          </button>
        </div>
      )}

      <div className="mt-8 p-6 bg-white rounded-lg border border-slate-200">
        <h3 className="font-bold text-slate-700 mb-2">Daily Quote</h3>
        <p className="text-slate-600 italic">"{dailyQuote.text}"</p>
        <p className="text-right text-slate-500 text-sm mt-2">- {dailyQuote.author}</p>
      </div>

      <div className="mt-4 p-6 bg-white rounded-lg border border-slate-200">
        <h3 className="font-bold text-slate-700 mb-4 flex items-center gap-2"><BellIcon className="w-5 h-5"/> Wake-up Alarm</h3>
        <div className="flex items-center gap-2">
            <input 
                type="time" 
                value={alarmTime}
                onChange={(e) => setAlarmTime(e.target.value)}
                className="w-full bg-slate-100 border border-slate-300 text-slate-700 py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
        </div>
        {alarmMessage && <p className="text-sm text-indigo-600 mt-2">{alarmMessage}</p>}
      </div>

      {showAuthModal && (
        <AuthModal 
          onClose={() => setShowAuthModal(false)} 
          onAuth={(authedUser) => {
            setUser(authedUser);
            setShowAuthModal(false);
          }} 
        />
      )}
    </div>
  );
}
