
// event application 

function getEventWeekday(remainingDay) {
    const date = new Date();
    const day = date.getDay();
    const eventDay = day + remainingDay;
    const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
    const message = `Today is ${daylist[day]}.The event is going to happen in ${eventDay} days to come. Which is on ${daylist[eventDay % 7]}`

    console.log(message);

}
getEventWeekday(14);

/*Weather wear */

function dressAdviser(temperature) {
    let todaysDress;
    if (temperature > 0) {
        if (temperature < 5) {
            todaysDress = `temperatue can go upto 0 degree so wear a warm cloths`;
        } else if (temperature < 10) {
            todaysDress = `temperature can be 5 to 10 degree, so wear warm colthes`;
        } else if (temperature < 20) {
            todaysDress = `temperatue can be between 10 to 20 degree.  adviced to wear thin jacket`;
        } else if (temperature < 30) {
            todaysDress = `It is a a bit warm today so it is adviced to wear shorts and a t-shirt`;
        } else {
            todaysDress = `it very hot today, adviced to seat inside AC or take an sun-umbrella if you need to go outside`
        }
    } else {
        todaysDress = `it is very cold today so it is adviced to  wear a thick jacket,gloves, cap , muffler and warm shoes`;
    }
    return todaysDress;
}
const clothesToWear = dressAdviser(9);
console.log(clothesToWear);

/*Candy helper optional */

const availibleCandyTypes = [];

const boughtCandyPrices = [];

function addCandy(candyType, weight) {
    let price;
    switch (candyType) {
        case 'Sweet':
            price = weight * 0.5;
            break;
        case 'Chocolate':
            price = weight * 0.7;
            break;
        case 'Toffee':
            price = weight * 1.1;
            break;
        case 'Chewing-gum':
            price = weight * 0.03;
            break;
        default:
            price = " price not set";
            break;
    }
    availibleCandyTypes.push(candyType, price);
    boughtCandyPrices.push(price);
}

addCandy("Sweet", 20);
addCandy("Chocolate", 40);
addCandy("Toffee", 30);
addCandy("Chewing-gum", 100);
console.log(availibleCandyTypes);
console.log(boughtCandyPrices);

const amountToSpend = (Math.random() * 100).toFixed(); // gives any number betweeen o to 100
function canBuyMoreCandy() {

    let cost = 0;

    //    for (let i = 0; i < boughtCandyPrices.length; i++) {
    //        console.log(boughtCandyPrices[i]);
    //         cost += boughtCandyPrices[i];
    //     }


    // alternate way : rewriting the above for-loop into while-loop
    let i = 0;
    while (i < boughtCandyPrices.length) {
        cost += boughtCandyPrices[i];
        i++;
    }

    console.log(`Amount to spend is : ${ amountToSpend } and  cost is :  ${cost}`);

    if (amountToSpend <= cost) {
        console.log(`you already have ${(cost - amountToSpend)}  to pay back so no more candy for you!`);
    } else {
        console.log(` you still have ${amountToSpend - cost}  left soYou can buy more, so please do!`);
    }
}

canBuyMoreCandy()

/*Student Manager*/
const class07StudentsArray = [];
function addStudentToClass(studentName) {

  let admission;
  if (class07StudentsArray.length < 6) {
    class07StudentsArray.push(studentName);
    admission = `Number of students in class now is ${class07StudentsArray.length} . Congratulation ${studentName} ! you are admitted`;
    console.log(admission);
  } else if (class07StudentsArray.includes(studentName)) {
    admission = `Hi ${studentName} you are already admitted.`;
    console.log(admission);
  } else if (class07StudentsArray.length <= 6 && studentName === "Queen") {
    class07StudentsArray.push(studentName);
    admission = `Honourable ${studentName} is successfully added to the class07. The class member now including queen is ${class07StudentsArray.length}`;
    console.log(admission);
  } else {
    admission = `Sorry ${studentName} ! we have already ${class07StudentsArray.length} students admitted. The class is full, Cannot add more students to class 07`;
    console.log(admission);
  }
}

function getNumberOfStudents() {
  let numberOfStudents = class07StudentsArray.length;
  console.log(`The current number of Students is ` + numberOfStudents);
  return numberOfStudents;
}

console.log(class07StudentsArray);
addStudentToClass("Sveta");
console.log(class07StudentsArray);
addStudentToClass("Vahab");
console.log(class07StudentsArray);
addStudentToClass("Amrit");
console.log(class07StudentsArray);
addStudentToClass("Chunmai");
console.log(class07StudentsArray);
addStudentToClass("Asma");

console.log(class07StudentsArray);
addStudentToClass("Annas");
console.log(class07StudentsArray);
addStudentToClass("Vlad");
console.log(class07StudentsArray);
addStudentToClass("Chunmai");
console.log(class07StudentsArray);

addStudentToClass("Queen");// array.length increase as it is pushed
console.log(class07StudentsArray);

addStudentToClass("Mr. Langsome");
console.log(class07StudentsArray);

addStudentToClass("Queen"); // assigining queen again? No 
getNumberOfStudents();