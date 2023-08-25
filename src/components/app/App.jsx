import React, { useState } from "react";
import AppContext from "../../context/AppContext";
import Calculator from '../calculator/Calculator';
import './app.css';

export default function App() {
  const [value, setValue] = useState('');

  return (
    <AppContext.Provider value={{ value, setValue }}>
      <div className='App'>
        <Calculator />
      </div>
    </AppContext.Provider>
  );
};