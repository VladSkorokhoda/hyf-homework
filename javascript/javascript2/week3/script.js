
/*-------------------Homework-JS2-W3-----------------*/


document.querySelector('input').addEventListener('input', callback);


/*-------------------1---Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.--*/
const secPrinter = () => console.log('button1: call after 2.5 s.');
const timer = () => setTimeout(secPrinter, 2500);
window.addEventListener('load', timer);
/*--------------------2---Call the function you have created with some different arguments.*/

function secPrinterParam(timer, secPrinter) {
	setTimeout(() => console.log(secPrinter), timer * 1000);
} 
secPrinter(5, 'button1: This string logget after 5 seconds');
secPrinter(3, 'This string logget after 3 seconds');
/*--------------------3--out the text: Called after 5 seconds 5 seconds after the button is clicked.--*/

const clickButton = document.querySelector('#button2');
clickButton.addEventListener('click', () => {
	console.log('clicked - wait 5 sec');
	secPrinter(5, 'after 5 sec' );
});
/*-------------------4--Create two functions and assign them to two different variables.--*/

function earthLogger1 () {console.log('Earth')};
function saturnLogger2 () {console.log('Saturn')};
function planetLogFunction (callback) {callback()};
planetLogFunction(earthLogger1);
planetLogFunction(saturnLogger2);
/*--------------------4--second option-----------------*/
const earthLogger = () => console.log('Earth');
const saturnLogger = () => console.log('Saturn');
const planetLogFunction = (callback) => callback();
planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

/*--------------------5--Create a button with the text called "Log location".--*/

const button1 = document.getElementById('get location');
const locationLink = document.querySelector('#locationlink');
const locationPara = document.querySelector('#locationPara');
button1.addEventListener('click', function() {
	navigator.geolocation.getCurrentPosition(function(position) {
		const lat = position.coords.latitude;
		const long = position.coords.longitude;
		locationPara.innerText= ` Your location is ${lat.toFixed(2)}° Lattitude by ${ long.toFixed(2)}° Longitude`
});
});
/*--------------------6--Google-Map-------------------*/

const button3 = documentElementById('Click me Again 3')
const myPosition = document.getElementById('position')
function geolocation() {
	navigator.geolocation.getCurrentPosition(showPosition);
}
function showPosition(position){
	myPosition.innerHTML = "Latitude: " + position.coords.latitude +
   "<br>Longitude: " + position.coords.longitude;
}
button3.addEventListener('click', getlocation);
/*-------------------7--Create a function called runAfterDelay*/

function runAfterDelay(delay, callback) {
	setTimeout(callback, delay * 1000);
}
runAfterDelay (4, function() {
	console.log('after 4 sec');
});
runAfterDelay (3, function() {
	console.log('after 3 sec');
});
/*-------------------8--Check if we have double clicked on the page.*/

const doubleClick = () => {
	console.log('Double click');
}
document.addEventListener('Double click', doubleClick);
/*-------------------9--Joke--------------------*/

const badJoke = () => {
	console.log("If you received a call to the intercom and asked a stupid question: Are you at home?, do not get annoyed, it is better to calmly answer: Yes, where are you?.")
}
const funnyJoke = () => {
	console.log("People who read newspapers while sitting on the toilet are ready for any news.")
}
const jokeCreator = ( shouldTellFunnyJoke, logFannyJoke, logBadJoke) => {
	if (shouldTellFunnyJoke) {
		logFannyJoke()
	} else {
		logBadJoke()
	}
}
jokeCreator(tru, funnyJoke, badJoke)
/*--------------------Function as a variable--------------------*/

const a_function = (text) => {
	console.log(text)
};
const b_function = (text) => {
	console.log(text)
};
const c_function = (text) => {
	console.log(text)
};
var arrayOfFunctions = [
	a_function,
	b_function,
	c_function
]
for (let i = 0; i < arrayOfFunctions.length; i++) {
	arrayOfFunctions[i](`the ${i} call function`);
}
/*-------------------both functions------------------*/

const haha = () => {
	console.log('haha')
}
function normalFunction () {
	consolr.log('normal function')
}
haha();
normalFunction();
/*--------------------key--------------------*/

const dream = {
	become: function() {
		console.log('become a developer')
	}
};
/*--------------------fastest presser--------------------*/

var countS = 0;
var countL = 0;
document
.getElementById ('button-startGame')
.addEventListener('click', function() {
	let time = document.getElementById('seconds').value;
setTimeout(() => {const end = document.getElementById('end');
end.innerHTML = 'game over';}, time * 2000);
})
document.getElementById('presserS').addEventListener('keydown', function(event) {
	if(event.key == "S") {
		countS++;
		const numberOfPress = document.getElementById('startS');
		numberOfPress.innerHTML = countS;
	}
});
