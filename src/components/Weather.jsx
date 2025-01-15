import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather",
          {
            params: {
              q: "London", // Replace with your city
              units: "metric", // For Celsius
              appid: "40ec8af73b83eb583749b82c91ced535", // Replace with your API key
            },
          }
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <>
      <div
        className={`weather-container ${
          weather ? getWeatherClass(weather) : ""
        }`}
      ></div>
    </>
  );
};

const getWeatherClass = (weather) => {
  const temp = weather.main.temp;
  const condition = weather.weather[0].main.toLowerCase();

  if (condition.includes("rain")) return "rainy";
  if (temp < 10) return "winter";
  if (temp > 25) return "summer";
  return "clear";
};

export default Weather;

// rainy winter summer clear
