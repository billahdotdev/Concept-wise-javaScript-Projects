// main.js
import { getWeather } from './api.js';
import { showWeather, showError } from './dom.js';

document.getElementById('getWeatherBtn').addEventListener('click', async () => {
  const city = document.getElementById('cityInput').value.trim();
  if (!city) {
    showError('Please enter a city name');
    return;
  }

  try {
    const data = await getWeather(city);
    showWeather(data);
  } catch (err) {
    showError(err.message);
  }
});
