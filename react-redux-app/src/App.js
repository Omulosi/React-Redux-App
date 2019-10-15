import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import WeatherCard from './components/WeatherCard';
import * as actionCreators from './state/actionCreators';


const App = (props) => {

  useEffect(() => {
    props.getWeatherData(props.location);
  }, [props.location]);

  return (
    <div>
      <Header />
      <SearchForm />
      <WeatherCard />
    </div>
  )
}

export default connect(
  state => state,
  actionCreators
)(App);
