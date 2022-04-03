const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";
removeName(nameToRemove,names);

const nameToRemove = "Peter";
removeName(nameToRemove,names);

function removeName(name,names){
	for (let index = 0; index < names.length; index++) {
		const element = names[index];
		if(element === name){
			names.splice(index,1);
		}
	}

	return names;
}


//  80*365*24*60 = 42048000 minutes
//  "Game of thrones" 3*24*60+1*60 =4380 minutes
// 4380/42048000 = 0.000104 = 0.0104 % For 80 years
// "Sopranos" 3*24*60+14*60=5160 minutes
// 5160/42048000 = 1.227168 = 0.0122 % For 80 years
// "The Wire" 2*24*60+12*60 = 3600 minutes
// 3600/42048000 = 8.561643 = 0.0085 % For 80 years

const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];


const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const travelTime = calculateHours(travelInformation);
function calculateHours(travelInformation){
	var speed = travelInformation.speed;
	var destinationDistance = travelInformation.destinationDistance;
	var hours = destinationDistance / speed;
hours = hours.toString();
var hoursFirstPart = hours.split('.')[0];
var hoursSecondPart = hours.split('.')[1];
return 'Hours of :'+hoursFirstPart+ ' and minutes of :'+hoursSecondPart;

}


console.log(travelTime); // 8 hours and 38 minutes



