import cv from './cv.png'
import './App.css';
import React, { useState, useEffect } from 'react';


function App() {

  const [message, setMessage] = useState('');

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch('https://x6q0jgqi5k.execute-api.ap-south-1.amazonaws.com/crh-be');
        const data = await response.json();
        if (isMounted) {
          setMessage(data.Message);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (!message) {
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, [message]);

  return (
    <div className="App">
      <header className="App-header">
        <p>You are visitor number {message}.</p>      
        <img src={cv} alt="cv" className="full-width-image" />
      </header>
    </div>
  );
}

export default App;
