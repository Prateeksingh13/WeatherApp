// Constants
const apiKey = "641eb123b4msh59915efd2d1bbeep1e4091jsn13d10a5b75ae";
const apiUrl = "https://weatherapi-com.p.rapidapi.com/current.json?q=";

const earth_img = document.querySelector(".earth_img");

//Earth
earth_img.addEventListener("click", () => {
  earth_img.style.transform = "scale(3.0, 2.5) translateX(20px)"; // Scale and move to the right
  earth_img.style.transformOrigin = "right center"; // Set the transform origin to the right side
  earth_img.style.transition = "transform 2s cubic-bezier(0.25, 0.1, 0.25, 1)";
});

//Date
const date = new Date();

const day = date.getDate();
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const weekday = daysOfWeek[date.getDay()];
const month = date.getMonth() + 1;
const year = date.getFullYear().toString().slice(-2); // Get the last two digits of the year

const currentDate = `${day}/${month}/${year}`;

document.addEventListener("DOMContentLoaded", async () => {
  // Fetch and display Mumbai's weather data on page load
  try {
    const mumbaiWeatherData = await fetchWeatherData("Mumbai");
    if (mumbaiWeatherData) {
      updateWeatherUI(mumbaiWeatherData);
    }
  } catch (error) {
    console.error(error);
    // Handle error (e.g., display a message to the user)
    alert("Error fetching Mumbai's weather data");
  }
});

function city() {
  // Set the default city to Mumbai
  let city_name = "Mumbai";

  const userEnteredCity = document.getElementById("city_Name").value.trim();
  if (userEnteredCity !== "") {
    // If the user entered a city, use that value
    city_name = userEnteredCity;
  }

  return city_name;
}

// Function to create headers for fetch requests
function createHeaders() {
  return {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };
}

// Function to fetch weather data for a city
async function fetchWeatherData(city) {
  try {
    const response = await fetch(`${apiUrl}${city}`, createHeaders());
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    // Handle error (e.g., display a message to the user)
    alert(error.message);
    return null;
  }
}

const currentWeatherCard = document.querySelector(".weatherInfo");
const currentWeather = document.querySelector(".data");

// Function to update the UI with weather data
function updateWeatherUI(response) {
  // Your existing code for updating the UI
  // ...

  const { humidity, wind_kph, cloud, temp_c } = response.current;
  const { name, localtime } = response.location;

  currentWeatherCard.innerHTML = `
    <p class="weather">Weather Details</p>
    <p class="cloudy">cloudy</p>
    <p class="cloudy_report">${cloud}%</p>
    <p class="humidity">Humidity</p>
    <p class="humidity_report">${humidity}%</p>
    <p class="wind">Wind</p>
    <p class="wind_report">${wind_kph}km/h</p>`;

  currentWeather.innerHTML = `
    <p class="current_temp">${Math.trunc(
      temp_c
    )} <span class="current_temp_cel">o</span></p>
    <p class="current_city">${name}</p>
    <p class="current_weather_icon">
      <img src="./Images/Vector.svg" alt="" />
    </p>
    <p class="current_time">${localtime.slice(10)}</p>
    <p class="current_day">${weekday}</p>
    <p class="current_date">${currentDate}</p>`;
}

// Event listener for the "Search" button
const weatherForm = document.getElementById("weatherForm");

city_data.addEventListener("click", async (event) => {
  event.preventDefault();
  const options = createHeaders();
  const weatherData = await fetchWeatherData(city());

  if (weatherData) {
    console.log(weatherData);
    updateWeatherUI(weatherData);
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return false;
});

// Example of dynamic card selection
const cityCards = document.querySelectorAll(".card_content");

cityCards.forEach((card, index) => {
  const cardOptions = createHeaders();
  const cities = ["New Delhi", "Chennai", "Goa"];
  const city = cities[index];

  fetchWeatherData(city)
    .then((response) => {
      showCitiesCardData(card, response);
    })
    .catch((err) => console.error(err));
});

function showCitiesCardData(card, response) {
  let { temp_c } = response.current;
  let { name } = response.location;

  card.innerHTML = `
    <p class="cardc_temp">${Math.trunc(
      temp_c
    )}<span class="cardc_temp_sign">°</span></p>
    <p class="cardc_city">${name}</p>
    <p class="cardc_date">${currentDate}</p>`;
}
