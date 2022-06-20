import * as React from 'react';
import { Battlefield } from './Battlefield';
import { HeaderWithCounter } from './HeaderWithCounter';
import { ResetButton } from './ResetButton';
import { useGameState } from './state/useGameState';
import AppFooter from './Footer';

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
