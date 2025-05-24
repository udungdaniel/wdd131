function calculateWindChill(tempF, speedMph) {
  return (
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speedMph, 0.16) +
    0.4275 * tempF * Math.pow(speedMph, 0.16)
  ).toFixed(1);
}

document.addEventListener("DOMContentLoaded", () => {
  const apiKey = 'ab941a565a8b46c9303661c43ee5708b'; // OpenWeatherMap API key
  const city = 'Abuja';
  const countryCode = 'NG';
  const units = 'imperial'; // Use 'metric' for Celsius

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=${units}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Weather data fetch failed.');
      }
      return response.json();
    })
    .then(data => {
      const temp = data.main.temp;
      const wind = data.wind.speed;
      const condition = data.weather[0].description;

      document.getElementById("temp").textContent = temp.toFixed(1);
      document.getElementById("wind").textContent = wind.toFixed(1);
      document.getElementById("condition").textContent = condition.charAt(0).toUpperCase() + condition.slice(1);

      const chillElement = document.getElementById("chill");
      if (temp <= 50 && wind > 3) {
        chillElement.textContent = `${calculateWindChill(temp, wind)} °F`;
      } else {
        chillElement.textContent = "N/A";
      }
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      document.getElementById("condition").textContent = "Unavailable";
    });

  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
});
