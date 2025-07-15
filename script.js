"use strict";
console.log("Hello");
function multiplication(a, b) {
    return a * b;
}
console.log(multiplication(3, 4));
// normal variable
let a;
// array union
let b = [];
b.push(1, 2);
console.log("b", b);
a = 5;
a = "str";
// dynamic type
let c; // kub thekai na porle ata use kora thik na
c = 5;
c = "Str";
let anyTypeOfArray = [];
anyTypeOfArray.push("Arr");
anyTypeOfArray.push(290);
// any type of object
let anyTypeOfObject;
anyTypeOfObject = {
    name: "Bangladesh",
    age: 34,
};
// lesson function type
const myFunc = (f1, f2) => {
    return f1 + f2;
};
console.log("myfunc", myFunc(100, 50));
// optional function parameter
const opFunc = (f1, f2, f3) => {
    return f1 * f2;
};
console.log("Optional parameter", opFunc(20, 3));
// default function parameter
const defaultFunc = (f1, f2, f3 = 10) => {
    return f1 * f2;
};
console.log("Optional parameter", defaultFunc(20, 3));
const useDetails = (id, user) => {
    console.log(`user id is ${id}, name is ${user.name} and age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? "sir" : "Mr."} ${user.name}`);
};
// function signatures
let myFungSig;
myFungSig = (a, b) => {
    return a + b;
};
let calculation;
// complex example
calculation = (a, b, c) => {
    if (c == "add") {
        return a + b;
    }
    else {
        return a * b;
    }
};
calculation(5, 6, "add");
console.log("calculation", calculation);
let useInfo;
useInfo = (id, info) => { };
// Classes
class Player {
    constructor(n, a, c) {
        this.name = n;
        (this.age = a), (this.country = c);
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}
const mashrafi = new Player("Mashrafi", 2, "Bangladesh");
const shakib = new Player("Mashrafi", 75, "Bangladesh");
const players = [];
players.push(shakib);
players.push(mashrafi);
// Access Modifiers
class Player2 {
    constructor(n, a, c) {
        this.name = n;
        (this.age = a), (this.country = c);
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}
const mashrafi2 = new Player2("Mashrafi", 2, "Bangladesh");
const shakib2 = new Player2("Mashrafi", 75, "Bangladesh");
const players2 = [];
players2.push(shakib2);
players2.push(mashrafi2);
// bahire theke access kora jabe na
class Player3 {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}
const mashrafi3 = new Player2("Mashrafi", 2, "Bangladesh");
const shakib3 = new Player2("Mashrafi", 75, "Bangladesh");
const players3 = [];
players2.push(shakib3);
players2.push(mashrafi3);
