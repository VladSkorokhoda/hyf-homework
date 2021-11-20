/* My age in 2027*/ 
let yearOfBerth;
let yearFuture;
yearOfBerth = 1985; // integer, 
yearFuture = 2027; // integer, 
const age = yearFuture - yearOfBerth;
console.log('You will be' + age+ 'years old in' + yearFuture);

/* Dog age*/
let dogYearOfBirth;
let dogYearFuture;
dogYearOfBirth = 2017;
dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = false;
if (shouldShowResultInDogYears === true)
{
	console.log('Your dog will be' + dogYear + ' human years old' + dogYearFuture );
}
else {
	console.log('Your dog will be' + dogYear*7 + 'dog years old' + dogYearFuture);
}

/* House */
// Formula housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
//Your friend Peter is considering a house that is 8m wide, 10m deep and 10m high. The garden size is 100m2. The house costs 2.500.000

// find out the value of high, wide and deep assign the value to  volumeInMeters
// Then put the values into the formula
var volumeInMetersForPeter = 8 * 10 * 10;
var gardenSizeInM2ForPeter = 100;
var housePriceBeforeCalculationForPeter = 2500000;
calculateHousePrice(volumeInMetersForPeter,gardenSizeInM2ForPeter,housePriceBeforeCalculationForPeter);


 //Julia is considering a house that is 5m wide, 11m deep and 8m high. The garden size is 70m2. This house costs 1.000.000.
var volumeInMetersForJulia = 5 * 8 * 11;
var gardenSizeInM2ForJulia = 70;
var housePriceBeforeCalculationForJulia = 1000000;
calculateHousePrice(volumeInMetersForJulia,gardenSizeInM2ForJulia,housePriceBeforeCalculationForJulia);

function calculateHousePrice(volumeInMeters,gardenSizeInM2, originalHousePrice){

	var housePriceAfterTheCalculation = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
	var housePriceBeforeCalculation = originalHousePrice;

if(housePriceBeforeCalculation > housePriceAfterTheCalculation){
	// Payed to much
	return 'Payed to much';
}else if(housePriceBeforeCalculation < housePriceAfterTheCalculation){
	// Payed to little
	return 'Payed to little';
}else{
	// The price is the same, payed the right price
	return 'Payed the right amount';
}

}




console.log('From first array');
var startupNameFromFirstWords;
startupNameFromFirstWords = firstWords[Math.floor(Math.random() * 5)];
var newStringFromFirst = 'Company name: '+startupNameFromFirstWords + ' contains '+ startupNameFromFirstWords.length + ' characters';
console.log(newStringFromFirst);

console.log('From second array');
var startupNameFromSecondWords;
startupNameFromSecondWords = secondWords[Math.floor(Math.random() * 5)];
var newStringFromSecond = 'Company name: '+startupNameFromSecondWords + ' contains '+ startupNameFromSecondWords.length + ' characters';
console.log(newStringFromSecond);

var firstWords = ['Tesla', 'BMW', 'Mercedes', 'Vlad', 'Drugio'];
var secondWords = ['Samsung', 'Toshiba', 'Nokia', 'Motorola', 'Vio'];

var fromFirstNames = StartUpName(firstWords);
console.log(fromFirstNames);

var fromSecondNames = StartUpName(secondWords);
console.log(fromSecondNames);

function StartUpName(array){
var startupName;
startupName = array[Math.floor(Math.random() * 5)];
var newStringFromFirst = 'Company name: '+startupName + ' contains '+ startupName.length + ' characters';
return newStringFromFirst;
}


/*Creative*/
var firstWords = ['Easy', 'Awesome', 'Corporate', 'Future', 'First', 'Best', 'Decent', 'Reliable', 'Wonderful', 'Amazing'];
var secondWords = ['Successful', 'Creative', 'Dreamy','Ambiguous', 'Heirlooms', 'First', 'Pioneers', 'First', 'Second', 'Third'];
console.log('From first array');
var startupNameFromFirstWords;
startupNameFromFirstWords = firstWords[Math.floor(Math.random() * 1)];
var newStringFromFirst = 'Company name: '+startupNameFromFirstWords + ' contains '+ startupNameFromFirstWords.length + ' characters';
console.log(newStringFromFirst);
var txt = "Easy";
var sln = txt.length;
console.log(txt.length);
var x = "letters";
console.log(x);
console.log('From second array');
var startupNameFromSecondWords;
startupNameFromSecondWords = secondWords[Math.floor(Math.random() * 1)];
var newStringFromSecond = 'Company name: '+startupNameFromSecondWords + ' contains '+ startupNameFromSecondWords.length + ' charcaters';
console.log(newStringFromSecond);
var txt = "Successful" /*+ 'letters'*/;
var sln = txt.length;
console.log(txt.length);
var txt = 'letters';
console.log(txt);
var x = "letters";
console.log(x);
console.log(newStringFromRandomNumberFromFirstWords);
const randomNumber = Math.floor(Math.random() * 8);
var sln = txt.lengthSecondWords [1];