import React from 'react';

import './App.css';
import DisplayRandomSacredPathWithButtonWithSeed from './components/molecule/DisplayRandomSacredPathWithButtonWithSeed';

function App() {
  const initialSeed = Math.round(1e6 * Math.random());
  return (
    <div className="App">
      <header className="App-header">
        <DisplayRandomSacredPathWithButtonWithSeed initialSeed={initialSeed} />
      </header>
    </div>
  );
}

export default App;
