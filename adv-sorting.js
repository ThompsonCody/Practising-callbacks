/*var numbers = [1, 2, 5, 9, 10];

numbers.sort(function(a,b){
  return a-b;
});
//console.log(numbers);*/
sheds you
const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
  ];

students.sort((a,b) => {
  if (a.name < b.name) {
    return -1;
  }
  if(a.name > b.name)
    return 1;

  if (a.name === b.name) {
      return b.age - a.age;
  }
  /*
    switch(a.name < b.name){
      case a.name > b.name:
        return 1;
        break;
      case a.name === b.name:
        return b.age - a.age;
        break;
      default:
        return -1;
    }
  */
    return 0;
});
  console.log(students);