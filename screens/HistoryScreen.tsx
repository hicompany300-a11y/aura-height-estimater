import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { HeightRecord } from '../types';
import { ChartBarIcon } from '../components/Icons';

export default function HistoryScreen() {
  const [history] = useLocalStorage<HeightRecord[]>('heightHistory', []);

  return (
    <div className="p-4 pt-6 pb-24">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Measurement History</h1>
      {history.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center text-slate-500 mt-20">
          <ChartBarIcon className="w-16 h-16 mb-4" />
          <h2 className="text-xl font-semibold">No History Yet</h2>
          <p>Your saved measurements will appear here.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {history.map((record) => (
            <div key={record.id} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-slate-700">{record.name}</p>
                <p className="text-sm text-slate-500">{record.date}</p>
              </div>
              <p className="text-2xl font-bold text-indigo-500">{record.height}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
