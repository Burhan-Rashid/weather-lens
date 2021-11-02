import React from 'react'
import "./Card.css"
import searchLogo from "../assets/images/search.svg"

function Card({ search, weather }) {

    const [city, setCity] = React.useState("");

    return (
        <div className="Card">
            <div className="searchBar">
                <input type="text"
                    placeholder="Search"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <img src={searchLogo} alt="..." onClick={() => search(city)} />
            </div>
            <div className="description">
                <h3>Weather in {weather.name}</h3>
                <h2>{weather.temp} &deg;C</h2>
                <div className="flex">
                    <img src={`https://openweathermap.org/img/wn/${weather.icon}.png`} alt="..." />
                    <p>{weather.description}</p>
                </div>
                <p>Humidity: {weather.humidity}%</p>
                <p>Wind Speed: {weather.windSpeed} km/h</p>
            </div>
        </div>
    )
}

export default Card
