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