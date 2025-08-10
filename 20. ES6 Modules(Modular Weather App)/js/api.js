// api.js
const API_KEY = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

export async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('City not found');
  }
  return await response.json();
}
