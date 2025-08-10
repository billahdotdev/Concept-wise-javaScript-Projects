// dom.js
export function showWeather(data) {
  const output = document.getElementById('weatherOutput');
  output.innerHTML = `
    <h2>${data.name}</h2>
    <p>🌡 Temperature: ${data.main.temp}°C</p>
    <p>💧 Humidity: ${data.main.humidity}%</p>
    <p>☁ Condition: ${data.weather[0].description}</p>
  `;
}

export function showError(message) {
  document.getElementById(
    'weatherOutput'
  ).innerHTML = `<p style="color:red">${message}</p>`;
}
