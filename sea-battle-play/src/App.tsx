import * as React from 'react';
import './App.css';
import { Battlefield } from './components/Battlefield/Battlefield';
import { HeaderWithCounter } from './components/HeaderWithCounter/HeaderWithCounter';
import { ResetButton } from './components/ResetButton/ResetButton';
import { useGameState } from './state/useGameState';
import AppFooter from './components/Footer/Footer';

import './style.css';

export default function App() {
  const { turn, reset, matrix, fire, won } = useGameState();

  React.useEffect(() => {
    if (won) {
      setTimeout(() => alert('MOSCOW DOWN!'), 0);
    }
  }, [won]);

  console.log('App component called');
  return (
    <div className="app">
      <HeaderWithCounter turn={turn} />
      <Battlefield disabled={won} matrix={matrix} onFire={fire} />
      <ResetButton reset={reset} />
      <AppFooter />
    </div>
  );
}
