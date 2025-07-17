"use strict";
// ################################# set variable type #################################
let a;
let b;
a = 20;
b = 401;
console.log("Assign Variable", a, b);
// ################################# declare variable union type union type #################################
let c;
c = 10;
console.log("Union Number C", c);
c = "Union type string";
console.log("Union type string", c);
// ################################# declare an array and set type #################################
let arr = [];
arr.push("Akash");
arr.push(2000);
console.log("Array", arr);
// ############################## declare a object and set type #################################
let obj;
obj = {
    name: "foysal",
};
console.log("Object", obj);
// ################################# declare a object and set type #################################
let object;
object = {
    name: "Foysal",
    id: 10,
    isActive: true,
};
console.log("Object", object);
// ################################# you can assign a object but assign array #################################
let objectArray;
objectArray = [10, 20, 30, "Akash"];
console.log(objectArray);
// Note: why can I declare a object but use an array?
// Ans: Because, Array is a certain type of object.
// ################################# function type #################################
// declare a function and set parameter data type
const multiplication = (arg1, arg2) => {
    return arg1 * arg2;
};
console.log("multiplication", multiplication(5, 30));
// declare a function and set data union type
const textFunc = (arg1, arg2) => {
    console.log("Function parameter union type", arg1, arg2);
};
textFunc("Hello", 20);
// optional function parameter
const optionalFunc = (arg1, arg2, arg3) => {
    return {
        var: arg1 + arg2,
        string: arg3,
    };
};
console.log("optionalFunc", optionalFunc(10, 20));
// function signature
let signatureFunc;
signatureFunc = (arg1, arg2) => {
    return {
        arg1: arg1,
        arg2: arg2,
    };
};
console.log("signature function", signatureFunc("Foysal", "Mahmood"));
// conditional signature
let conditionalSignature;
conditionalSignature = (a, b, c) => {
    if (c == "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log("Conditional sign function", conditionalSignature(1, 3));
// complex example
let userData;
userData = (userId, userInfo) => {
    return {
        userId,
        userInfo,
    };
};
// complex example
let userInfo;
userData = (userId, dtl) => {
    return {
        userId,
        dtl,
    };
};
// ################################# classes #################################
class player {
    constructor(n, a, c) {
        (this.name = n), (this.age = a), (this.country = c);
    }
    play() {
        console.log(`${this.name} from ${this.age} ${this.country} is playing`);
    }
}
const mashrafi = new player("Mashrafi", 40, "Bangladesh");
const shakib = new player("Shakib", 38, "Bangladesh");
const players = [];
players.push(shakib);
// ################################# Access Modifier #################################
class player2 {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} from ${this.age} ${this.country} is playing`);
    }
}
const pilot = new player("Mashrafi", 40, "Bangladesh");
const sabbir = new player("Shakib", 38, "Bangladesh");
const players2 = [];
players2.push(shakib);
