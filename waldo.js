var findWalder = (arr, found) => {
  arr.forEach((currentValue) => { //currentV.. = element on which loop is currently on
    if (currentValue === "Waldo") {
      found(arr.indexOf(currentValue));//callback
    }
  });
}

var actionWhenFound = (i) => {
  console.log(`Found him at ${i}`);
}

findWalder(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);