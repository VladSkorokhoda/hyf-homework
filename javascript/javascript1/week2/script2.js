
// function getFullName (firstName, lastName, isFormalName, isWoman) {

//     var message;
// 	if(isFormalName === true){
//        message = "Welcome, Lord " + firstName + " " + lastName;
// 	}else if(isWoman === true){
// 		  message = "Welcome, Mis. " + firstName + " " + lastName;
// 	}
// 	return message;
// };

// // This is not a woman
// var test = getFullName("Benjamin", "Hughes",true, false);
// console.log(test);


// // This is a woman
// var test = getFullName("Laura", "Walkins",false, true);
// console.log(test);



// function clothesToWear(degreeCelsius) {
// var toWear;
// if (degreeCelsius < 10) {
//  return toWear = "warm jacket";
// } else if (degreeCelsius > 25) {
//  return toWear= "put on a t-shirt";
// } else {
// return toWear  = "Dress up as you want";
// }
//  }

//  var result = clothesToWear(9);
//  console.log(result);
 
//   var result = clothesToWear(30);
//  console.log(result);

//    var result = clothesToWear(15);
//  console.log(result);


//  // Get event weekday
// function  getEventWeekday(days){
// var today = new Date();
// var WeekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var eventDay = today.setDate(today.getDate()+days);
// var weekday = new Date(eventDay);
// return WeekDays[weekday.getDay()]; 
// }

// //Call the function
// getEventWeekday(2);


// //Student manager

// const class07Students = [];
// function addStudentToClass (studentName) {
// if (class07Students.length < 6) {
// class07Students.push ( studentName);

// } else if (class07Students.length >= 6 ) {
// console.log('Cannot add more students to class 07');
// } else if (class07Students.length >= 6 && studentName == 'Queen Margrethe II' ) {
// class07Students.unshift('Queen Margrethe II')

// } else {
// console.log ('something went wrong');}
// if (Boolean) return
// }
// addStudentToClass ('Anton1');
// addStudentToClass ('Andre2');
// addStudentToClass ('Tony3');
// addStudentToClass ('Ann May4');
// addStudentToClass ('Tanya5');
// addStudentToClass ('Julia6');
// addStudentToClass ('Queen Margrethe II');
// console.log(class07Students);


// //addCandy function

// Create a function called addCandy. It has two parameters:

// candyType - specifies the candy type. Could be 'sweet, chocolate, toffee or chewing-gum'
// weight - specifies the weigth of the candy in grams
// The function should add the price of the candy to an array called boughtCandyPrices using push

// Here is an example of the usage:


//addCandy("sweet", 20); // Adds the price of 20 grams of sweets to the array boughtCandyPrices

const Candy =  {"Sweet" : 0.5, "Chocolate" : 0.7, "Toffee" : 1.1, "ChewingGum" : 0.03};
const boughtCandyPrices =[];

function addCandy(candyType,weight) {
	let price = Candy[candyType] * weight; 
	 boughtCandyPrices.push(price)
	 console.log(price);
	 return price;
}

addCandy("Sweet", 20);

const amountToSpend
