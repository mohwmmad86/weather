var searchBox = document.getElementById("search-box");
var searchInput = document.getElementById("search-input");
var button = document.getElementById("button");
var searchInput = document.getElementById("search-input");
var main = document.getElementById("main");
var weatherImg = document.getElementById("picture");
var notFound = document.getElementById("not-found");

const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "7dcef718ec783d2b84734b4434bc675e";

window.addEventListener("load", function () {
  searchBox.style.display = "flex";
  setTimeout(function () {
    searchBox.style.marginTop = "0";
  }, 500);
});

async function getWeatherData(cityName) {
  const response = await fetch(url + cityName + `&appid=${apiKey}`);
  var data = await response.json();
  var name = data.name;
  if (response.status === 404) {
    searchBox.style.marginTop = "-300%";
    setTimeout(function () {
        searchBox.style.display = "none";
    }, 500);
    notFound.style.display = "flex";
  setTimeout(function () {
    notFound.style.marginTop = "0";
  }, 500);
  } else {
    document.getElementById("cityName").innerHTML = name;
  var temperature = Math.round(data.main.temp);
  document.getElementById("temp").innerHTML = temperature + "°C";
  if (data.weather[0].main === "Clear") {
    weatherImg.src = "pics/sunny.png";
  } else if (data.weather[0].main === "Clouds") {
    weatherImg.src = "pics/cloudy.png";
  } else if (data.weather[0].main === "Rain") {
    weatherImg.src = "pics/rainy.png";
  } else if (data.weather[0].main === "Snow") {
    weatherImg.src = "pics/snow.png";
  } else if (data.weather[0].main === "Drizzle") {
    weatherImg.src = "pics/drizzle.png";
  } else if (data.weather[0].main === "mist") {
    weatherImg.src = "pics/mist.png";
  }
  setTimeout(function () {
    searchBox.style.marginTop = "-300%";
    setTimeout(function () {
      searchBox.style.display = "none";
      main.style.display = "flex";
    }, 500);
    setTimeout(function () {
      main.style.marginBottom = "0";
    }, 800);
  }, 300);
  }
}

button.addEventListener("click", function () {
  getWeatherData(searchInput.value);
});
