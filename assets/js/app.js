//weather API
const api = {
    key: "bce30d2d548f76cdea1803e470cdefb1",
    baseurl: "http://api.openweathermap.org/data/2.5/"
}

// date creater
let now = new Date();
let date = document.querySelector(".location .date");
date.innerText = dateFormatter(now);

//grab search bar, add event listener
const searchBar = document.querySelector(".search-bar");
searchBar.addEventListener("keypress", setQuery);

//check for enter press, run search
function setQuery(e) {
    if (e.keyCode == 13) {
        getResults(searchBar.value);
        console.log(searchBar.value);
    }
};

//query to openweather maps 
function getResults(query) {
    fetch(`${api.baseurl}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}

//edit html with results
function displayResults(weather) {
    console.log(weather);
    //location results
    let city = document.querySelector(".location .city");
    city.innerText = `${weather.name}, ${weather.sys.country}`;

   //date 
    let now = new Date();
    let date = document.querySelector(".location .date");
    date.innerText = dateFormatter(now);

    //temp
    let currentTemp = document.querySelector(".current .temp");
    let fixedNumber = Math.round(weather.main.temp)
    currentTemp.innerHTML = `${fixedNumber}` + "<span>°F</span>";

    //weather type
    let weatherType = document.querySelector(".current .weather-type");
    weatherType.innerText = weather.weather[0].description;

    //high - low
    let highLow = document.querySelector(".current .high-low");
    let highVal = Math.round(weather.main.temp_max);
    let lowVal = Math.round(weather.main.temp_min);
    highLow.innerHTML = `${highVal} °F / ${lowVal} °F`;

}

//format date
function dateFormatter(d) {

    const months = {
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December'
      };


      const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ];


      const year = d.getFullYear();
      const date = d.getDate();
      const monthName = months[d.getMonth()];
      const dayName = days[d.getDay()];

      const formattedDate = `${dayName} ${monthName} ${date} ${year}`;

      return formattedDate;
      
}

