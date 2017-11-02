var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

// var first = [ input[0].x, input[0].y ],
//     second = [ input[1].x, input[1].y ],
//     third = [ input[2].x, input[2].y ];

var result = input.map(function(index){
  return  Math.sqrt(Math.pow(index.x, 2) + Math.pow(index.y, 2));
});


console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);