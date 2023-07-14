import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      navigate(`/weather/${city}`);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-200">
      <h1 className="text-red-400 font-serif text-2xl mb-6">Weather App</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-6"
      >
        <label className="mb-2">City</label>
        <input
          className="outline-none border border-gray-300 rounded px-2 py-1 mb-4"
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          type="submit"
        >
          Get Weather
        </button>
      </form>
    </div>
  );
};

export default Home;
