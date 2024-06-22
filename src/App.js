
import React, { useState } from 'react';
import Number from './Component/Number';
import axios from 'axios';
import Result from './Component/Result';
import './App.css';

function App() {
  const [state, setState] = useState(null);

  const fetchNumbers = async (number) => {
    try {
      const response = await axios.get(`http://localhost:9876/numbers/${number}`);
      setState(response.data);
    } catch (error) {
      console.error('Error fetching numbers:', error);
      setState(null);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator</h1>
        <Number onSubmit={fetchNumbers} />
        <Result result={state} />
      </header>
    </div>
  );
}

export default App;
