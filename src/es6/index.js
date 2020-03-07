// es6
//DEFAULT PARAMS Y CONCATENACION
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

//LET y CONST, Multilínea, Spread Operator y Desestructuración
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

//Arrow Functions, Promesas y Parámetros en objetos
let name = "Juan";
let age = 20;

obj = { name, age };
console.log(obj);

const names = [
  { name: "Juan", age: 20 },
  { name: "Ana", age: 18 }
];

let listOfName = names.map(item => console.log(item.name));

let listOfName2 = (name, age, country) => {};
let listOfName3 = name => {};

const square = num => num * num;

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Ups!");
    }
  });
};

helloPromise()
  .then(response => console.log(response))
  .then(() => console.log("Hola"))
  .catch(error => console.log(error));

//Clases, Módulos y Generadores
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

import { hello } from "./module";

hello();

function* helloWorld() {
  if (true) {
    yield "Hello, ";
  }
  if (true) {
    yield "World";
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
