let wordList = ["Hey", "Shiva", "Shankara", "Hey", "Maheshwara", "Shiva", "Shakti", "Mahadeva", "Om"];

let myMap = (arr, callback) => {
  let result = [];
  // arr.forEach((element, index) => letSee(arr[index], callback));
  for(let index in arr){
    // console.log(index);
    if(typeof callback === 'function'){
      let cbResult = callback(arr[index]); //This be "word" arg in below funcs
      result.push(cbResult);
    }
  }
  return result;
}

// var letSee = (array, x) => {
//   console.log(array);
//   if(typeof x == 'function'){
//     var cbResult = x(array[index])
//     result.push(cbResult)
//   }
// }

console.log('\n-----BACKWARDS CHANT-----');
let chantInReverse = myMap(wordList, (word) => word.split('').reverse().join('').toUpperCase());
console.log(chantInReverse);