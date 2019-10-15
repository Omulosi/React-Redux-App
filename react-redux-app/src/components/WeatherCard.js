import React from 'react';
import { connect } from 'react-redux';

const WeatherCard = (props) => {
  const { data, loading, error } = props.state;
  const humidity = data.humidity? data.humidity: '';
  const wind = data.wind? data.wind: '';
  const loader = loading? "loader": "";

  return (
    <div className="main">
      <div className={loader}></div>
      <div style={{color: 'red'}}>{error? error: ''}</div>
      <div className="data-weather-card">
        <h2>{data.location}</h2>
        <div className="weather-info">
          <div className="pull-left">
            <i className={data.temperature? `wi wi-${data.main} pull-left`: ""}></i>
            <span className="pull-right">
              <p id="description">{data.description}</p>
              <p id="temperature">
                <span>{data.temperature}</span>
                <span>&deg;C</span>
              </p>
            </span>
          </div>

          <div className="pull-right">
            <p id="Humidity">Humidity: {humidity + '%'}</p>
            <p id="wind">Wind: {wind + 'kph'}</p>
          </div>
        </div>

      </div>
    </div>
  );
}


export default connect(
  state => state
)(WeatherCard);

