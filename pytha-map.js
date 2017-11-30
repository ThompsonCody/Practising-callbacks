let input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

let result = input.map((index) => Math.sqrt(Math.pow(index.x, 2) + Math.pow(index.y, 2)));
// var pow = (index, n) => Math.pow(index.n, 2);
// let result = input.map((index) => Math.sqrt(pow(x) + pow(y)));

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);