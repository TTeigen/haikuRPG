export function syllablesInWord (word) {
  debugger;
  if (specialWords[word]){
    return specialWords[word];
  } else {
    let vowelCount = countVowels(word);
    if (vowelCount === 1){
      return 1;
    } else {
      vowelCount -= countDiphthongs(word);
      vowelCount -= countSilentVowels(word);
      if (vowelCount < 1){
        throw "somehow started with more than 1 vowel and returned less than 1 vowel";
      }
      return vowelCount;
    }
  }
}

let vowels = ['a','e','i','o','u','y'];
let specialWords = {
  "quiet" : 2,
  "buick" : 2

}
//get vowels
export function countVowels(word) {
  let counter = 0;
  for (let i =0; i<word.length; i++) {
    if (vowels.includes(word.charAt(i).toLowerCase())) {
      counter++;
    }
  }
  return counter;
}

//takes in word, returns number of consecutive vowel pairs
export function countDiphthongs(word){
  // let diphThongs = ["ow", "oe", "oo", "ue", "ey", "ay", "oy", "oi", "au", "aw", "ou", "ea", "ei", "ie"];
  let counter = 0;
  for(let i = 0; i < word.length - 1; i++){
    let a;
    let char1 = word.charAt(i).toLowerCase();
    if (vowels.includes(char1)){
      a = char1;
      if (a){
        let b;
        let char2 = word.charAt(i + 1).toLowerCase();
        if (vowels.includes(char2)){
          b = char2;
          if (b){
            if (a === "o" && b === "a" && i === (word.length - 2)){
              counter--;
            } else if (a === "y"){
              //do nothing
            } else {
              counter++;
            }
          }
        }
      }
    }
  }
  return counter;
}

//if last 2 == le and previous letter != vowel do nothing else  +1

export function countSilentVowels(word) {
  let counter = 0;
  if (word.charAt(word.length-1) === 'e') {
    if(word.substring(word.length -2, word.length) === 'le') {
      if(vowels.includes(word.charAt(word.length-3))) {
        counter++
      } else {
        //do nothing
      }
    } else {
      counter++
    }
  }
  return counter;
}











//subtract methods:
//vowels -= yBeforeVowel(word)
//y before vowel: coyote: return 1





















// vowelCount++
//
// if eindexOf == word.length
//   vowelCount--
//
// cap a ble
// a ble
//yes
//yellow
//y before vowel === subtract 1
// fum ble
// tic kle
//
// name
// tale
