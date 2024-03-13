//The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1 (0<=r<1).
//The Math.round() static method returns the value of a number rounded to the nearest integer.
//The Math.ceil() static method always rounds up and returns the smallest integer greater than or equal to a given number.
//The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.


//Get a random integer 
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


//Get a random number between the specified values
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}


//Get a random integer between the specified values
function getRandomIntB(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}


const x = getRandomInt(10);
//Expected output: 0 -> 9

document.getElementById('demo').innerHTML = x;


