const api = {
    key: "bce30d2d548f76cdea1803e470cdefb1",
    baseurl: "http://api.openweathermap.org/data/2.5/"
}

const searchBar = document.querySelector(".search-bar");
searchBar.addEventListener("keypress", setQuery);

function setQuery(e) {
    if (e.keyCode == 13) {
        getResults(searchBar.value);
        console.log(searchBar.value);
    }
};

function getResults(query) {
    fetch(`${api.baseurl}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}

function displayResults(weather) {
    console.log(weather);
    let city = document.querySelector(".location .city");
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    //use date formatter instead of creating function
    let now = new Date();
    date = document.querySelector(".location .date");
    date.innerText = dateBuilder(now);

}

function dateBuilder(d) {

}