import React, { useState } from 'react';
import { XIcon } from './Icons';
import { User } from '../types';

interface AuthModalProps {
  onClose: () => void;
  onAuth: (user: User) => void;
}

export default function AuthModal({ onClose, onAuth }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && (isLogin || name)) {
      onAuth({ name: isLogin ? 'Demo User' : name, email });
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-800/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
          <XIcon className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold text-center text-slate-800 mb-6">{isLogin ? 'Log In' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-100 border border-slate-300 text-slate-700 py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-slate-100 border border-slate-300 text-slate-700 py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-slate-100 border border-slate-300 text-slate-700 py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <button type="submit" className="w-full bg-indigo-500 text-white font-bold py-3 px-6 rounded-full hover:bg-indigo-600">
            {isLogin ? 'Log In' : 'Create Account'}
          </button>
        </form>
        <p className="text-center text-sm text-slate-500 mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button onClick={() => setIsLogin(!isLogin)} className="font-semibold text-indigo-500 hover:underline">
            {isLogin ? 'Sign Up' : 'Log In'}
          </button>
        </p>
      </div>
    </div>
  );
}
