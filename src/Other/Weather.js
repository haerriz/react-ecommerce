import React, { useState, useEffect } from 'react';

const Weather = () => {
    const [weather, setWeather] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            fetchWeather(position.coords.latitude, position.coords.longitude).then(r => "Hi");
        }, err => {
            setError('Failed to fetch location');
            setIsLoading(false);
        });
    }, []);

    const fetchWeather = async (latitude, longitude) => {
        const url = `https://yahoo-weather5.p.rapidapi.com/weather?lat=${latitude}&long=${longitude}&format=json&u=f`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': "12c209a131mshf10c9dfdf085871p15b4c0jsn1276f9cfd33f",
                'x-rapidapi-host': "yahoo-weather5.p.rapidapi.com"
            }
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setWeather(data);
        } catch (error) {
            setError('Failed to fetch weather data');
        }
        setIsLoading(false);
    };

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {weather && (
                <div>
                    <h1>Weather in {weather.location.city}</h1>
                    <p>Current Temperature: {weather.current_observation.condition.temperature}°F</p>
                    <p>Current Temperature: {(5/9*(weather.current_observation.condition.temperature-32)).toFixed(2)}°C</p>
                    <p>Condition: {weather.current_observation.condition.text}</p>
                </div>
            )}
        </div>
    );
};

export default Weather;
