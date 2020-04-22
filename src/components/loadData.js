import React from 'react';
import useFetch from './useFetch';
import DisplayData from './DisplayData';
require('dotenv').config();

const InputOperations = ({ city, toFetch, setStep, setError }) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperal&appid=${API_KEY}`;
  const { data } = useFetch(url, toFetch);

  if (data && data.length !== 0) {
    const weather = data.weather[0].description;
    console.log(weather);
    return (
      <DisplayData weather={weather} setStep={setStep} setError={setError} />
    );
  }

  return <></>;
};

export default InputOperations;
