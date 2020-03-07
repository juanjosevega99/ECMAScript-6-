// es6
function newFunction(name = "juan", age = 20, country = "CO") {
  console.log(name, age, country);
}

newFunction();

let hello = "Hello";
let world = "world";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);
