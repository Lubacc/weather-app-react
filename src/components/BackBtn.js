import React from 'react';
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';

function BackBtn({ setStep, setError }) {
  const onClick = () => {
    setStep(1);
    setError(false);
  };

  return (
    <>
      <Box marginTop="20px">
        <Button variant="contained" color="primary" onClick={onClick}>
          Back
        </Button>
      </Box>
    </>
  );
}

export default BackBtn;
