import React from 'react';
import { Box } from '@material-ui/core';
import BackBtn from './BackBtn';
import {
  WiDaySunny,
  WiDaySunnyOvercast,
  WiCloud,
  WiCloudy,
  WiShowers,
  WiRain,
  WiStormShowers,
  WiSnowflakeCold,
  WiWindy,
} from 'weather-icons-react';

const DisplayData = ({ weather, setStep, setError }) => {
  switch (weather) {
    case 'clear sky':
      return (
        <>
          <Box
            height="100vh"
            display="flex"
            flexDirection="column"
            margin="auto"
            alignItems="center"
            justifyContent="center"
            padding="0 20px"
          >
            <WiDaySunny size={50} color="#cc00cc" />
            {<br></br>}
            Lucky day! Enjoy the sun!
            <BackBtn setStep={setStep} setError={setError} />
          </Box>
        </>
      );

    case 'few clouds':
      return (
        <>
          <Box
            height="100vh"
            display="flex"
            flexDirection="column"
            margin="auto"
            alignItems="center"
            justifyContent="center"
            padding="0 20px"
          >
            <WiDaySunnyOvercast size={50} color="#cc00cc" />
            {<br></br>}
            Nothing serious but be aware!
            <BackBtn setStep={setStep} setError={setError} />
          </Box>
        </>
      );

    case 'scattered clouds':
      return (
        <>
          <Box
            height="100vh"
            display="flex"
            flexDirection="column"
            margin="auto"
            alignItems="center"
            justifyContent="center"
            padding="0 20px"
          >
            <WiCloud size={50} color="#cc00cc" />
            {<br></br>}
            Hmm... Still nothing to worry about.
            <BackBtn setStep={setStep} setError={setError} />
          </Box>
        </>
      );

    case 'broken clouds':
      return (
        <>
          <Box
            height="100vh"
            display="flex"
            flexDirection="column"
            margin="auto"
            alignItems="center"
            justifyContent="center"
            padding="0 20px"
          >
            <WiCloudy size={50} color="#cc00cc" />
            {<br></br>}
            Right on the edge! Bring one just in case!
            <BackBtn setStep={setStep} setError={setError} />
          </Box>
        </>
      );

    case 'shower rain':
      return (
        <>
          <Box
            height="100vh"
            display="flex"
            flexDirection="column"
            margin="auto"
            alignItems="center"
            justifyContent="center"
            padding="0 20px"
          >
            <WiShowers size={50} color="#cc00cc" />
            {<br></br>}
            You need an umbrella or a waterproof jacked!
            <BackBtn setStep={setStep} setError={setError} />
          </Box>
        </>
      );

    case 'rain':
      return (
        <>
          <Box
            height="100vh"
            display="flex"
            flexDirection="column"
            margin="auto"
            alignItems="center"
            justifyContent="center"
            padding="0 20px"
          >
            <WiRain size={50} color="#cc00cc" />
            {<br></br>}
            Definitely bring an umbrella!
            <BackBtn setStep={setStep} setError={setError} />
          </Box>
        </>
      );

    case 'thunderstorm':
      return (
        <>
          <Box
            height="100vh"
            display="flex"
            flexDirection="column"
            margin="auto"
            alignItems="center"
            justifyContent="center"
            padding="0 20px"
          >
            <WiStormShowers size={50} color="#cc00cc" />
            {<br></br>}
            Better stay home today!
            <BackBtn setStep={setStep} setError={setError} />
          </Box>
        </>
      );

    case 'snow':
      return (
        <>
          <Box
            height="100vh"
            display="flex"
            flexDirection="column"
            margin="auto"
            alignItems="center"
            justifyContent="center"
            padding="0 20px"
          >
            <WiSnowflakeCold size={50} color="#cc00cc" />
            Depends on the type of snow. Your call!
            <BackBtn setStep={setStep} setError={setError} />
          </Box>
        </>
      );

    case 'mist':
      return (
        <>
          <Box
            height="100vh"
            display="flex"
            flexDirection="column"
            margin="auto"
            alignItems="center"
            justifyContent="center"
            padding="0 20px"
          >
            <WiWindy size={50} color="#cc00cc" />
            {<br></br>}
            Shitty weather!
            <BackBtn setStep={setStep} setError={setError} />
          </Box>
        </>
      );

    default:
      return <BackBtn setStep={setStep} setError={setError} />;
  }
};

export default DisplayData;
