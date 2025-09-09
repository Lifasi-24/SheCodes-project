function refreshWeather(response) {
  let temperatureElement = document.querySelector("#current-temperature-value");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#current-city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "43efo1fedef303523a955b3t59eadaee";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(refreshWeather);
}

function displayCity(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");

  searchCity(searchInputElement.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", displayCity);

searchCity("Pretoria");
