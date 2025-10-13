import React, { useState } from 'react';
import BottomNav from './components/BottomNav';
import MeasureScreen from './screens/MeasureScreen';
import HistoryScreen from './screens/HistoryScreen';
import ExercisesScreen from './screens/ExercisesScreen';
import ProfileScreen from './screens/ProfileScreen';
import useLocalStorage from './hooks/useLocalStorage';
import { User } from './types';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('measure');
  const [user, setUser] = useLocalStorage<User | null>('user', null);

  const renderScreen = () => {
    switch (activeScreen) {
      case 'measure':
        return <MeasureScreen />;
      case 'history':
        return <HistoryScreen />;
      case 'exercises':
        return <ExercisesScreen />;
      case 'profile':
        return <ProfileScreen user={user} setUser={setUser} />;
      default:
        return <MeasureScreen />;
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-slate-50 text-slate-800 flex flex-col font-sans antialiased">
      <main className="flex-grow overflow-y-auto">
        {renderScreen()}
      </main>
      <BottomNav activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
    </div>
  );
}