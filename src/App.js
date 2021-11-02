import React from 'react';
import './App.css';
import Card from './components/Card';
import { getWeather } from "./api/Api";

function App() {
  const [weather, setWeather] = React.useState({});

  const handleSearch = async (city) => {
    const data = await getWeather(city);
    console.log(data);
    if (data) {
      const weatherData = {
        temp: data.main.temp,
        humidity: data.main.humidity,
        name: data.name,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        windSpeed: data.wind.speed
      };
      setWeather(weatherData);
    } else {
      return alert("Please enter a Valid city name!")
    }
  }

  return (
    <div className="App">
      <Card search={(city) => handleSearch(city)} weather={weather} />
    </div>
  );
}

export default App;
