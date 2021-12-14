/* My age in 2027*/ 
let yearOfBerth;
let yearFuture;
yearOfBerth = 1985;
yearFuture = 2027;
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
