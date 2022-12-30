/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */

import { weather } from './modules/weather-search';

const searchBox = document.querySelector('input');
const searchButton = document.querySelector('button');

searchButton.addEventListener('click', async () => {
  const weatherData = await weather.fetchWeatherData(searchBox.value);
  console.log(weatherData);
});
