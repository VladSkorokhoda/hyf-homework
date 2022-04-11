// Exercise 1
// const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
// notThisFunctionName(danishWords); // returns 'ø'

 function shortestWord(str){
   
   console.log("Original String:" + str);
    str = str.trim();

   console.log("Trimmed String:" + str);
    let words=str.split(" ");

   var shortestWord=words[0];
     
    for(let word of words){
      
      if(word.length !== 0){
        if(word.length<shortestWord.length){
            shortestWord=word;
        }
      }
    }
    return shortestWord;
}
console.log(shortestWord( "bil", "plante", "kaffe", "bog", "ø", "planetarium")); // Shows "bil"



let danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

console.log(danishWords[4]);
// Dear mentors.So it is possible?

// Exercise 2
const danishString = "Jeg har en blå bil";
notThisFunctionName(danishString); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
notThisFunctionName(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}

// console.log('running in node')
// console.log(document);




// function shortestWord(str){
   
//    console.log("Original String:" + str);
//     str = str.trim();

//    console.log("Trimmed String:" + str);
//     let words=str.split(" ");

//    var danishWords=words[0];

//     for(let word of words){
      
//       if(word.length !== 0){
//         if(word.length<shortestWord.length){
//             shortestWord=word;
//         }
//       }
//     }
//     return danishWords;
// }
// console.log(shortestWord( "bil", "plante", "kaffe", "bog", "ø", "planetarium")); // Shows "ø"






// let danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

// console.log(danishWords[4]);



//  задание 1
// const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
// notThisFunctionName(danishWords); // returns 'ø'

// const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
// //const danishWordsUl = document.querySelector('#danishWords')

//               //console.log(danishWordsUl)

// for (let i=0; i < danishWords.length; i++ ) {
// const danishWordsUl = document.querySelector('#danishWords')

// const li = document.createElement('li')

// 	          //console.log(danishWords[i])



// 	li.innerHTML = danishWords[i]

//  //document.querySelector('#danishWords').appendChild(li)
//    danishWordsUl.appendChild(li)
// }





// //  Задание 2
// const danishString = "Jeg har en blå bil";
// notThisFunctionName(danishString); // returns {total: 1, å: 1}

// const danishString2 = "Blå grød med røde bær";
// notThisFunctionName(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}


// console.(document)


const podcasts = [{
        name: 'The mystery om of Johan Klausen Varbourg',
        imageUrl: 'https://picsum.photos/536/354'
    },
    {
        name: 'Tips about dogs with small legs',
        imageUrl: 'https://picsum.photos/536/354'
    },
    {
        name: 'You, me, we and us',
        imageUrl: 'https://picsum.photos/536/354'
    },
    {
        name: 'Breakfast news - Dinner edition'
    }
]; 
for(let i=0; < podcasts.length; i++ ) {
	console.log(podcasts[i])
}

