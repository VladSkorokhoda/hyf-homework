h// console.log("Vlad was here")

// const favouriteDishes =["food", "pizza","sushi", "humus"]
// const favouriteDishes = document-querySelector("#FavouriteDishes")

// for(let i = 0; i < favouritDishes.length; i++){
// 	const li = document.createElement("li")
	 
// 	li.innerHTML = favouriteDishes[i]

// 	favouriteDishesUl.appendChild(li)
// }



// const eventElement = document.querySelector('.events');
// eventElement.innerHTML = "Soccer training Wednesday";
// eventElement.style.backgroundColor = 'blue';
// console.log(eventElement);

// const div = document.createElement('div');
// div.innerHTML = "new div";

// const body = document.querySelector('body');
// body.appendChild(div)



// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }


// console.log("Podcast")

// const h1 = document.qu

// const podcasts = [{
//         name: 'The mystery om of Johan Klausen Varbourg',
//         imageUrl: 'https://picsum.photos/536/354'
//     },
//     {
//         name: 'Tips about dogs with small legs',
//         imageUrl: 'https://picsum.photos/536/354'
//     },
//     {
//         name: 'You, me, we and us',
//         imageUrl: 'https://picsum.photos/536/354'
//     },
//     {
//         name: 'Breakfast news - Dinner edition'
//     }
// ]; (edited) 

// const podcastUL = document.createElement("ul")

// for(let i = 0; i < podcasts.length; i++){
// 	const li = document.createElement("li")
// 	const li = document.createElement("h1")

// 	const podcast = [i]
// 	headers.innerHTML = podcast.name
	 
// 	if(podcast.imageUrl === undefined) {

// 		const image = document.createElement("img")

// 		image.setAttribute("src", podcast.imageUrl)
// 		image.setAttribute("alt", "Podcast name: ${podcast.name}')

// 		podcastLi.appendChild(image)
// 	}

// podcast
// 	}


// 	//simple-eventlisteners

// 	const button = document.querySelector

// 	const button = document.querySelector('button')

// button.addEventListener('click', function (event) {
//   button.innerHTML = 'Button clicked'
// })
// <body>
//     <h1>Event Listeners</h1>
//     <button>Click me</button>
//     <script src="index.js"></script>
// </body>




// //домашка

// const bodyNew = document.querySelector("body");
// const btn3n = document.querySelector("#btn3");
// btn3n.addEventListener("click",function(){
//     if(bodyNew.style.background==="black"){
//         bodyNew.style.background="white";
//         bodyNew.style.color= "black"
//     }
//     else{
//         bodyNew.style.background="black";
//     bodyNew.style.color= "white"
//     }
// })



// Write a function that finds the shortest word of an array of words

// const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
// notThisFunctionName(danishWords); // returns 'ø'

findShortestWordLength("bil", "plante", "kaffe", "bog", "ø", "planetarium");
 function findShortestWordLength(str) {
    let words = str.split(' ');
    let minLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > minLength) {
        minLength = words[i].length;
      }
    }
    return minLength;
  }
  
  
findShortestWordLength("bil", "plante", "kaffe", "bog", "ø", "planetarium");
console.log(minLengtht);
// 6

/*function findLongestWordLength(str) {
  return Math.max(...str.split(' ').map(word => word.length));
}*/