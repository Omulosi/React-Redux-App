import React from 'react';
import './App.css';

import Header from './components/Header';
import SearchForm from './components/SearchForm';
import WeatherCard from './components/WeatherCard';


const App = (props) => {

  const { data, error, loading } = props.state;
  return (
    <div>
      <Header />
      <SearchForm getForecast={props.getForecast}/>
      <WeatherCard data={data} error={error} loading={loading}/>
    </div>
  )
}

export default App;
