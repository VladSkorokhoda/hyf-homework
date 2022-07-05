
/*------------------Json------------------*/
let stocks = {
Fruits: ["banana", "grapes"],
liquid: ["water", "ice"],
holder: ["cone", "cup", "stick"],
toppings: ["chocolate", "peanuts"]
};

let is_shop_open = true;

function time(ms) {
	return new Promise((resolve, reject) => {
   if (is_shop_open) {
      setTimeout(resolve, ms);
   } else {
      reject(console.log("shop is closed"));
   }
});
}

async function kitchen() {
	try {
   await time(2000);
   console.log(`${stocks.Fruits[0]} was selected`);

   await time(0000);
   console.log("start the production");

   await time(2000);
   console.log("cut the fruit");

   await time(1000);
   console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was edded`);

   await time(1000);
   console.log("start the mashine");

   await time(2000);
	console.log(`ice cream plased on ${stocks.holder[0]}`);

   await time(3000);
   console.log(`${stocks.toppings[0]} was selected`);

   await time(2000);
console.log("serve ice cream");
} catch (error) {
   console.log("customer left", error);
} finally {
   console.log("day ended, shop is closed");
}
}
/*-----------------API---------*/

let  berry = {
	number: 8
};

let eat = {
	title: "berries containing zinc",
	elementIsNecessaryForLife: [{name: "avocados"}, {name: "pomegranates"}, {name: "blackberriess"}, {name: "berries"}, {name: "blackberries"}, {name: "raspberries"}, {name: "loganberries"}, {name: "dates"}],
  place: berry // element is necessary for life
};

berry.occupiedBy = eat; //Sources of zinc are avocados, pomegranates, berries (blackberries, raspberries, loganberries,dates)

alert( JSON.stringify(eat, function replacer(key, value) {
	console.log(`${key}: ${value}`);
	return (key == 'occupiedBy') ? undefined : value;
}));
// /*-----------API---------------*/

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

/*------------------The Weather-----------------*/

let weather = {
	apiKey: "aa6125a78f69d719b26ef6bedb0a9c32",
	fetchWeather: function (city) {
		fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
		.then((response) => response.json())
		.then((data) => this.displayWeather(data));
	},
	displayWeather: function(data) {
		const { name } = data;
		const { icon, description } = data.weather[0];
		const { temp, humidity } = data.main;
		const { speed } = data.wind;
		// console.log(name,description,temp,humidity,speed,);
		document.querySelector(".city").innerText = "Weather in " + name;
		document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +".png";
		document.querySelector(".description").innerText = description;
		document.querySelector(".temp").innerText = temp + "℃";
		document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
		document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
		document.querySelector(".weather").classList.remove("loading");/**/ 
		document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?" + name + "')"
	},
		search: function () {
		this.fetchWeather(document.querySelector(".search-bar").value);
	}
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
/*------------------Giphy api-------------------*/
const giphySearchInput = document.getElementById('giphySearchInput');
const giphySearchNumberInput = document.getElementById('giphySearchNumberInput');
const giphyButton = document.getElementById('giphyButton');


giphyButton.addEventListener('click', gifyFunction);

function gifyFunction() {
	fetch(`https://api.giphy.com/v1/gifs/search?api_key=afkfgyzJLTqchST0rWEzPncN1q6klt&q=${searchGifyImage}&limit=${SearchNumberInput}&offset=0&rating=g&lang=en`)
   .then(response => response.json())
   .then(giphyData => {
      console.log(giphyData);
   let  gifImgDisplaySection = document.getElementById('gifImgDisplay');
   gifImgDisplaySection.innerHTML= "";
      for (let i = 0; i <= giphyData.data.length; i++) {
      let url = giphyData.data[i].images.downsized_medium.url;
      let imgList = document.createElement('li');
      let imge = document.createElement('img');
      imge.src = url;
      imge.style.width = '10rem';
      imge.style.height = '10rem';
      imgList.appendChild(imge);
      gifImgDisplaySection.appendChild(imgList);
      }
   });
}