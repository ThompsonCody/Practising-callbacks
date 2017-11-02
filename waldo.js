function findWaldo(arr, found) {
  arr.forEach(function(currentValue){
    if (currentValue === "Waldo")
      found(arr.indexOf(currentValue));
  });
}

function actionWhenFound(i) {
  console.log("Found him! He was at " + i + ", not sure where a number is geographically, but it's good. We all just jammin baby, welcome Waldo to This");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);