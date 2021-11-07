function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#current-temperature");
  let cityElement = document.querySelector("#city-name");
  let descriptionElement = document.querySelector("#weather-description");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
}

let apiKey = "68bf029e8355926f228cd5965fe12dec";
let city = "New York";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
