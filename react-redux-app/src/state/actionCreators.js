import axios from 'axios';
import * as actions from './actions';

const API_KEY='bdd5dff4ba17ef47ce62c637349d7532';

export const getWeatherData = (location) => dispatch => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}&units=metric`;

  dispatch({type: actions.FETCH_WEATHER_START })

  axios
    .get(url)
    .then(response => response.data)
    .then(data => {
      dispatch({type: actions.FETCH_WEATHER_SUCCESS, payload: parseData(data)})
    })
    .catch(error => {
       dispatch({type: actions.FETCH_WEATHER_FAIL, payload: error})
    })
};
    
const parseData = (data) => {
  let main = data.weather[0].main.toLowerCase();
  let match = main.endsWith('s')? main.slice(0, -1): main;
  match = match === 'mist'? 'fog': match;
  return {
    description: data.weather[0].description,
    main: match,
    pressure: data.main.pressure,
    humidity: data.main.humidity,
    temperature: data.main.temp,
    wind: data.wind.speed,
    clouds: data.clouds.all,
    location: data.name
  };
}


export const updateLocation = (location) => {
  return {type: actions.ON_SUBMIT, payload: location }
}
