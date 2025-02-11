
import {useEffect, useState } from 'react';
import SearchBar from './components/searchBar/searchBar';
import WeatherDisplay from './components/weatherDisplay/WeatherDisplay';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = 'f550001c4b42ed7332882ee5f95edb64'; 

  useEffect(() => {
    if (city) {
      const fetchData = async () => {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        const data = await response.json();
        setWeatherData(data);
      };

      fetchData();
    }
  }, [city]);

  const handleSearch = (cityName) => {
    setCity(cityName);
  };

  return (
    <div>
      <h1>Orų Prognozė</h1>
      <SearchBar onSearch={handleSearch} />
      {weatherData && <WeatherDisplay weather={weatherData} />}
    </div>
  );
};

export default App;

