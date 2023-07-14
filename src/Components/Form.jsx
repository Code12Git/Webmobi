import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureLow } from "@fortawesome/free-solid-svg-icons";

const Form = ({ weatherData }) => {
  return (
    <div className="container mx-auto py-8 ml-52">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="mb-4 flex items-center">
            <FontAwesomeIcon icon={faTemperatureLow} className="mr-2" />
            <span className="font-bold">Day:</span> {weatherData.day}
          </p>
          <p className="mb-4 flex items-center">
            <FontAwesomeIcon icon={faTemperatureLow} className="mr-2" />
            <span className="font-bold">Weather:</span> {weatherData.text}
          </p>
        </div>
        <div>
          <p className="mb-4 flex items-center">
            <FontAwesomeIcon icon={faTemperatureLow} className="mr-2" />
            <span className="font-bold">Max Temperature:</span>{" "}
            {weatherData.high}
            <sup>o</sup>f
          </p>
          <p className="mb-4 flex items-center">
            <FontAwesomeIcon icon={faTemperatureLow} className="mr-2" />
            <span className="font-bold">Min Temperature:</span>
            {weatherData.low} <sup>o</sup>f
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
