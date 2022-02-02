
/*--------Homework--------JSON-------*/
// let  berry = {
//   number: 8
// };

// let eat = {
//   title: "berries containing zinc",
//   elementIsNecessaryForLife: [{name: "avocados"}, {name: "pomegranates"}, {name: "blackberriess"}, {name: "berries"}, {name: "blackberries"}, {name: "raspberries"}, {name: "loganberries"}, {name: "dates"}],
//   place: berry // element is necessary for life
// };

// berry.occupiedBy = eat; //Sources of zinc are avocados, pomegranates, berries (blackberries, raspberries, loganberries,dates)

// alert( JSON.stringify(eat, function replacer(key, value) {
//   console.log(`${key}: ${value}`);
//   return (key == 'occupiedBy') ? undefined : value;
// }));
/*-----------API---------------*/
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';
async function getISS() {
	const response = await fetch(api_url);
	const data = await response.json();
	const { latitude, longitude} = data;

	document.getElementById('lat').textContent = latitude;
	document.getElementById('lon').textContent = longitude;
 }
	getISS();

/* answer =  API is a set of functions and rules that exist.
Inside the application "Application" .API simple interface between the application
and other elements, such as third-party software or
equipment. API is a set of code functions (methods, properties, events and url addresses)
   Which can be used in their applications to interact with web browser components
user or third-party web services. In my example, the program has a written program for
Definitions of catching and latitude available via URL address.
An API is a set of existing functions and rules.
   Inside the application "Application". API is a simple interface between an application
   and other items such as third party software or
   equipment. An API is a set of code functions (methods, properties, events, and URLs).
   Which can be used in your applications to interact with web browser components.
users or third party web services. In my example, the program has a written program for
The user's longitude and latitude definitions are available via a URL.
	*/

	/*------------------------------------*/
	api.openweathermap.org/data/2.5/weather?q=Ranum&appid=833893ea6ddd4c9bc2f142d8c1316d62

	http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={833893ea6ddd4c9bc2f142d8c1316d62y}
	 https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=833893ea6ddd4c9bc2f142d8c1316d62
let weather = {
	apiKey: "a1f94e5c6976e42c8f7d8149416f21bf",
	fetchWeather: function (city) {
		fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
		.then((response) => response.json())
		.then((data) => this.displayWeather(data));
	},

	displayWeather: function(data) {
		const { name } = data;
		const { icon, description } = data.weather[0];
		const { temp, humidity }= data.main;
		const { speed } = data.wind;
		/*console.log(name,description,temp,humidity,speed,);*/
		document.querySelector(".city").innerText = "Weather in" + name;
		document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +".png";
		document.querySelector(".description").innerText = description;
		document.querySelector(".temp").innerText = temp + "℃";
		document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
		document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
		// document.querySelector(".weather").classList.remove("loading");
		document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?" + name + "')"
	},
		search: function () {
		this.fetchWeather(document.querySelector(".search-bar").value);
	},
};
document.querySelector(".search button").addEventListener("click", function () {
	weather.search();
});

document
.querySelector(".search-bar")
.addEventListener("keyup", function (event) {
	if(event.key == "Enter") {
		weather.search();
	}
});

weather.fetchWeather("Ranum");


/*---------------------------------------------------------------- */
// a1f94e5c6976e42c8f7d8149416f21bf   08c291ffc93611c397d82b6fb867f6f1   cee7d710ad81630f683099397e76183d  4779b644afb5bda9364bad3eaca4e644

// api.openweathermap.org/data/2.5/weather?q=ranum&appid=4c85280aa72a7ce9dcab008cb3bc41b2

// {coord: {…}, weather: Array(1), base: 'stations', main: {…}, visibility: 10000, …}
// base: "stations"
// clouds: {all: 95}
// cod: 200
// coord: {lon: 6.5072, lat: 53.3432}
// dt: 1642553888
// id: 2755249
// main: {temp: 277.29, feels_like: 273.32, temp_min: 276.49, temp_max: 278.16, pressure: 1030, …}
// name: "Ranum"
// sys: {type: 2, id: 2009499, country: 'NL', sunrise: 1642577833, sunset: 1642607500}
// timezone: 3600
// visibility: 10000
// weather: [{…}]
// wind: {speed: 5.19, deg: 207, gust: 9.42}
// [[Prototype]]: Object

