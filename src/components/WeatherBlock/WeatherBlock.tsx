import React from 'react';

import { WeatherBlockProps } from './interfaces';

import './index.css';

export const WeatherBlock: React.FC<WeatherBlockProps> = ({ data }) => {
  if (!data.getCityByName) {
    return null;
  }
  const { name, weather } = data?.getCityByName;
  return (
    <div className="weatherWrapper">
      <h2 className="weatherCityTitle">Город: {name}</h2>
      <p>
        Температура: {weather.temperature.actual}°С, ощущается, как
        {weather.temperature.feelsLike}°С
      </p>
      <p>
        Облачность: {weather.clouds.all} ({weather.summary.description})
      </p>
      <p>Скорость ветра: {weather.wind.speed} м/с</p>
    </div>
  );
};
