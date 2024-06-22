import React, { useState } from 'react';
//import './App.css';

function Number({ onSubmit }) {
  const [number, setNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(number);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className='ip'
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter NumberId(p,e,f,r)"
      />
      <button className='btn' type="submit">Fetch Numbers</button>
    </form>
  );
}

export default Number
