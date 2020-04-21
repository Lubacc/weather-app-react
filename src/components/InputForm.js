import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import InputOperations from './loadData';
import data from '../json data/city.list.json';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();
  const [city, setCity] = useState('');
  const [step, setStep] = useState(1);
  const [error, setError] = useState(false);
  const [toFetch, setToFetch] = useState(false);

  const onChange = (e) => {
    setCity(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 8) {
      setToFetch(false);
      setStep(1);
    }
  };

  const onClick = () => {
    data.forEach((item) => {
      if (item.name.toLowerCase() === city.toLowerCase()) {
        setToFetch(true);
        setError(false);
        setStep(2);
      } else {
        setError(true);
      }
    });
  };

  if (step === 2 && toFetch) {
    return (
      <InputOperations
        city={city}
        step={step}
        toFetch={toFetch}
        setStep={setStep}
        setError={setError}
      />
    );
  } else {
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Box
              display="flex"
              margin="auto"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="h6" color="inherit">
                Find out if you'll need an umbrella today!
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
        <Box
          height="100vh"
          display="flex"
          flexDirection="column"
          margin="auto"
          alignItems="center"
          justifyContent="center"
          padding="0 20px"
        >
          <TextField
            error={error}
            label="Enter Your City"
            onChange={onChange}
            value={city.name}
            onKeyDown={onKeyDown}
          />
          {<br></br>}
          <Button variant="contained" color="primary" onClick={onClick}>
            Check
          </Button>
        </Box>
      </div>
    );
  }
}
