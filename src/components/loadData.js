import React from 'react';
import useFetch from './useFetch';
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const InputOperations = ({ city, toFetch, setStep, setError }) => {
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperal&appid=233595a30770d5e15c54753dd927ae1f`;
  const { data } = useFetch(url, toFetch);
  console.log(data);

  const onClick = () => {
    setStep(1);
    setError(false);
  };

  return (
    <>
      <Box
        display="flex"
        margin="auto"
        alignItems="center"
        justifyContent="center"
      >
        <Button variant="contained" color="primary" onClick={onClick}>
          Back
        </Button>
      </Box>
    </>
  );
};

export default InputOperations;
