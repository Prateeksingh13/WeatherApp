const currentWeather = document.querySelector(".rectangle1");
const currentWeatherCard = document.querySelector(".rectangle2");
const earthAni = document.querySelector(".earth");
const earth_img = document.querySelector(".earth_img");
const city_data = document.getElementById("city_data");
const citiesCard1 = document.querySelector(".card1")
const citiesCard2 = document.querySelector(".card2")
const citiesCard3 = document.querySelector(".card3")



function city() {
  
  const city_name = document.getElementById("city_Name").value;

  if (city_name !== ""){
    return city_name;
  }
}


earth_img.addEventListener("click", () => {
  earth_img.style.transform = "scale(4.0,2.5)";
  earth_img.style.transition = "transform 2s";
});


const date = new Date();

let weekday = date.getDay();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${day}/${month}/${year}`;

switch (new Date().getDay()) {
  case 0:
    weekday = "Sunday";
    break;
  case 1:
    weekday = "Monday";
    break;
  case 2:
    weekday = "Tuesday";
    break;
  case 3:
    weekday = "Wednesday";
    break;
  case 4:
    weekday = "Thursday";
    break;
  case 5:
    weekday = "Friday";
    break;
  case 6:
    weekday = "Saturday";
}

// Default Data 

const defaultValue = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "641eb123b4msh59915efd2d1bbeep1e4091jsn13d10a5b75ae",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=Mumbai`, defaultValue)   //${city()}
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    showWeatherData(response);
  })
  .catch((err) => console.error(err));

function showWeatherData(response) {
  let { humidity, wind_kph, cloud, temp_c } = response.current;
  let { name, localtime } = response.location;

  currentWeatherCard.innerHTML = `
        <p class="weather">Weather Details</p>
        <p class="cloudy">cloudy</p>
        <p class="cloudy_report">${cloud}%</p>
        <p class="humidity">Humidity</p>
        <p class="humidity_report">${humidity}%</p>
        <p class="wind">Wind</p>
        <p class="wind_report">${wind_kph}km/h</p>`;

  currentWeather.innerHTML = `
        <p class="current_temp">${Math.trunc(temp_c)}</p>
        <p class="current_temp_cel">o</p>
        <p class="current_city">${name}</p>
        <p class="current_weather_icon">
          <img src="./Images/Vector.svg" alt="" />
        </p>

        <p class="current_time">${localtime.slice(10)}</p>
        <p class="current_day">${weekday}</p>
        <p class="current_date">${(currentDate.slice(0, 5) + currentDate.slice(7, 9))}</p>`;
}

// Cities Card Data

const card1 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "641eb123b4msh59915efd2d1bbeep1e4091jsn13d10a5b75ae",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q="New Delhi"`, card1)
  .then((response) => response.json())
  .then((response) => {
    showCitiesCardData1(response);
  })
  .catch((err) => console.error(err));

function showCitiesCardData1(response) {
  let {temp_c } = response.current;
  let {name} = response.location;

  citiesCard1.innerHTML = `
  <p class="cardc_temp">${Math.trunc(temp_c)}</p>
  <p class="cardc_temp_sign">o</p>
  <p class="cardc_city" >${name}</p>
  <p class="cardc_date">${(currentDate.slice(0, 5) + currentDate.slice(7, 9))}</p>`;
}


const card2 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "641eb123b4msh59915efd2d1bbeep1e4091jsn13d10a5b75ae",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q="Chennai"`, card2)
  .then((response) => response.json())
  .then((response) => {
    showCitiesCardData2(response);
  })
  .catch((err) => console.error(err));

function showCitiesCardData2(response) {
  let {temp_c } = response.current;
  let {name} = response.location;

  citiesCard2.innerHTML = `
  <p class="cardc_temp">${Math.trunc(temp_c)}</p>
  <p class="cardc_temp_sign">o</p>
  <p class="cardc_city" >${name}</p>
  <p class="cardc_date">${(currentDate.slice(0, 5) + currentDate.slice(7, 9))}</p>`;
}

const card3 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "641eb123b4msh59915efd2d1bbeep1e4091jsn13d10a5b75ae",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q="Goa"`, card3)
  .then((response) => response.json())
  .then((response) => {
    showCitiesCardData3(response);
  })
  .catch((err) => console.error(err));

function showCitiesCardData3(response) {
  let {temp_c } = response.current;
  let {name} = response.location;

  citiesCard3.innerHTML = `
  <p class="cardc_temp">${Math.trunc(temp_c)}</p>
  <p class="cardc_temp_sign">o</p>
  <p class="cardc_city" >${name}</p>
  <p class="cardc_date">${(currentDate.slice(0, 5) + currentDate.slice(7, 9))}</p>`;
}

//Search City Data 

city_data.addEventListener("click" ,(event) =>{

  event.preventDefault();

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "641eb123b4msh59915efd2d1bbeep1e4091jsn13d10a5b75ae",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };
  
  fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city()}`, options)   //${city()}
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
  
      // name.innerHTML = response.name;
      // region.innerHTML = response.region;
      // country.innerHTML = response.country;
      // lat.innerHTML = response.lat;
      // lon.innerHTML = response.lon;
      // tz_id.innerHTML = response.tz_id;
      // localtime_epoch.innerHTML = response.localtime_epoch;
      // localtime.innerHTML = response.localtime;
      // current.innerHTML = response.current;
      // last_updated_epoch.innerHTML = response.last_updated_epoch;
      // last_updated.innerHTML = response.last_updated;
      // temp_c.innerHTML = response.temp_c;
      // temp_f.innerHTML = response.temp_f;
      // is_day.innerHTML = response.is_day;
      // condition.innerHTML = response.condition;
      // wind_mph.innerHTML = response.wind_mph;
      //   wind_kph.innerHTML = response.wind_kph;
      // wind_degree.innerHTML = response.wind_degree;
      // wind_dir.innerHTML = response.wind_dir;
      // pressure_mb.innerHTML = response.pressure_mb;
      // pressure_in.innerHTML = response.pressure_in;
      // precip_mm.innerHTML = response.precip_mm;
      // precip_in.innerHTML = response.precip_in;
      // humidity.innerHTML = response.humidity;
      //   cloud.innerHTML = response.cloud;
      // feelslike_c.innerHTML = response.feelslike_c;
      // feelslike_f.innerHTML = response.feelslike_f;
      // vis_km.innerHTML = response.vis_km;
      // vis_miles.innerHTML = response.vis_miles;
      // uv.innerHTML = response.uv;
      // gust_mph.innerHTML = response.gust_mph;
      // gust_kph.innerHTML = response.gust_kph;
  
      showWeatherData(response);
    })
    .catch((err) => console.error(err));
  
  function showWeatherData(response) {
    let { humidity, wind_kph, cloud, temp_c } = response.current;
    let { name, localtime } = response.location;
  
    currentWeatherCard.innerHTML = `
          <p class="weather">Weather Details</p>
          <p class="cloudy">cloudy</p>
          <p class="cloudy_report">${cloud}%</p>
          <p class="humidity">Humidity</p>
          <p class="humidity_report">${humidity}%</p>
          <p class="wind">Wind</p>
          <p class="wind_report">${wind_kph}km/h</p>`;
  
    currentWeather.innerHTML = `
          <p class="current_temp">${Math.trunc(temp_c)}</p>
          <p class="current_temp_cel">o</p>
          <p class="current_city">${name}</p>
          <p class="current_weather_icon">
            <img src="./Images/Vector.svg" alt="" />
          </p>
  
          <p class="current_time">${localtime.slice(10)}</p>
          <p class="current_day">${weekday}</p>
          <p class="current_date">${(currentDate =
            currentDate.slice(0, 5) + currentDate.slice(7, 9))}</p>`;
  }
})

