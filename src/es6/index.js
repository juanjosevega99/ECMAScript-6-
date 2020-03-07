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

let lorem = `frase epica
ahora es otra frase epica
`;

console.log(lorem);

let person = {
  name: "juan",
  age: 20,
  country: "CO"
};

let { name, age } = person;
console.log(name, age);

let team1 = ["Juan", "Ana", "Car"];
let team2 = ["Camila", "Maria", "Kim"];

let education = ["David", ...team1, ...team2];

console.log(education);
