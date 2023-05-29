import React from 'react';

import './App.css';
import { useGenerateNumbers } from './hooks/useGenerateNumbers';
import { Game } from './components/Game';

function App() {
  const grid = useGenerateNumbers();
  console.log(grid);
  return (
    <Game />
  );
}

export default App;
