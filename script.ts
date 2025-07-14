console.log("Hello");
function multiplication(a: number, b: number) {
    return a * b;
}
;
console.log(multiplication(3, 4));

// normal variable
let a : string | number;

// array union 
let b : (string | number)[] = [] ;

b.push(1, 2)

console.log("b", b);

a = 5;
a= "str"

// dynamic type 

let c : any; // kub thekai na porle ata use kora thik na

c = 5;

c = 'Str'

let anyTypeOfArray : any[] = [];

anyTypeOfArray.push('Arr');

anyTypeOfArray.push(290)

// any type of object 

let anyTypeOfObject : {
    name: any,
    age: any
};

anyTypeOfObject = {
    name: 'Bangladesh',
    age: 34
};

// lesson function type 

const myFunc: Function = (f1 : number, f2 : number) => {
    return f1 + f2
}; 

console.log("myfunc", myFunc(100, 50));

// optional function parameter 
const opFunc = (f1 : number, f2: number, f3 ?: number) => {
    return f1 * f2
};

console.log("Optional parameter", opFunc(20, 3))


// default function parameter 
const defaultFunc = (f1 : number, f2: number, f3 : number = 10)  => {
    return f1 * f2
};

console.log("Optional parameter", defaultFunc(20, 3))

// type alias