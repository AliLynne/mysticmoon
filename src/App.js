import React from 'react';
import Advice from './Advice';
import Disclaimer from './Disclaimer';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <Welcome />
      <Advice />
      <Disclaimer />
    </div>
  );
}

export default App;
