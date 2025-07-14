"use strict";
console.log("Hello");
function multiplication(a, b) {
    return a * b;
}
;
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
c = 'Str';
let anyTypeOfArray = [];
anyTypeOfArray.push('Arr');
anyTypeOfArray.push(290);
// any type of object 
let anyTypeOfObject;
anyTypeOfObject = {
    name: 'Bangladesh',
    age: 34
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
// type alias
