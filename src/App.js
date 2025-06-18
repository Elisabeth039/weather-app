import React, { useState } from 'react';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null); 
  const [error, setError] = useState(null);     
  
  const getWeather = async () => {
    try {
      
      const response = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=London&appid=baa477efc19ae61265429bc7dec0999e&units=metric'
      );

      
      if (!response.ok) {
        throw new Error('Failed to receive the data');
      }

      
      const data = await response.json();

      setWeather(data.main.temp);
      setError(null); 
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  return (
    <div className="app">
      <h1>Weather</h1>
      <button onClick={getWeather}>Tap to see the temperature</button>
      {error ? (
        <p className="visible-p">{error}</p> 
      ) : weather ? (
        <h2 className="visible">Temperature in London: {weather}°C</h2>
      ) : (
        <p className='visible-p'>Tap to see the temperature</p>
      )}
    </div>
  );
}

export default App;