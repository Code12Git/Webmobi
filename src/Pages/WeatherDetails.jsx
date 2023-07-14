import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Form from "../Components/Form";
import axios from "axios";

const WeatherDetails = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { city } = useParams();

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://yahoo-weather5.p.rapidapi.com/weather`,
          {
            params: {
              location: city,
              format: "json",
              u: "f",
            },
            headers: {
              "X-RapidAPI-Key":
                "e8903a4eb2mshfb9a42f6badf559p1f6579jsn80d161e3ee8b",
              "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
            },
          }
        );

        setWeatherData(response.data.forecasts);
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, [city]);

  if (isLoading) {
    return <img src="/assets/spinner.gif" alt="loading" />;
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-3xl font-serif bg-gradient-to-r from-orange-400 via-yellow-500 to-red-600 bg-clip-text text-transparent text-center">
          Weather Details for {city}
        </h2>

        <NavLink to="/">
          <button className="p-2 bg-red-400 rounded-md hover:bg-red-600">
            Home
          </button>
        </NavLink>
      </div>
      {weatherData?.map((item, index) => {
        return <Form key={index} weatherData={item} city={city} />;
      })}
    </div>
  );
};

export default WeatherDetails;
