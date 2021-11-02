import React from 'react';
import './App.css';
import Card from './components/Card';
import { getWeather } from "./api/Api";

function App() {
  const [weather, setWeather] = React.useState({});

  const handleSearch = async (city) => {
    //call search api
    console.log(city)
    const data = await getWeather(city);
    console.log(data);
    const weatherData = {
      temp: data.main.temp,
      humidity: data.main.humidity,
      name: data.name,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      windSpeed: data.wind.speed
    };
    setWeather(weatherData);
    console.log(weatherData);
  }

  return (
    <div className="App">
      <Card search={(city) => handleSearch(city)} weather={weather} />
    </div>
  );
}

export default App;
