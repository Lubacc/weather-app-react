import React from 'react';
import useFetch from './useFetch';
import DisplayData from './DisplayData';

const InputOperations = ({ city, toFetch, setStep, setError }) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperal&appid=233595a30770d5e15c54753dd927ae1f`;
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
