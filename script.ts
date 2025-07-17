// ################################# set variable type #################################
let a: number;

let b: number;

a = 20;

b = 401;

console.log("Assign Variable", a, b);

// ################################# declare variable union type union type #################################
let c: string | number;

c = 10;

console.log("Union Number C", c);

c = "Union type string";

console.log("Union type string", c);

// ################################# declare an array and set type #################################
let arr: (string | number)[] = [];

arr.push("Akash");

arr.push(2000);

console.log("Array", arr);

// ############################## declare a object and set type #################################
let obj: Object;

obj = {
  name: "foysal",
};

console.log("Object", obj);

// ################################# declare a object and set type #################################
let object: {
  name: string;
  id: number | string;
  isActive: boolean;
};

object = {
  name: "Foysal",
  id: 10,
  isActive: true,
};

console.log("Object", object);

// ################################# you can assign a object but assign array #################################

let objectArray: Object;

objectArray = [10, 20, 30, "Akash"];

console.log(objectArray);

// Note: why can I declare a object but use an array?

// Ans: Because, Array is a certain type of object.

// ################################# function type #################################

// declare a function and set parameter data type
const multiplication = (arg1: number, arg2: number) => {
  return arg1 * arg2;
};

console.log("multiplication", multiplication(5, 30));

// declare a function and set data union type
const textFunc = (arg1: number | string, arg2: number | string) => {
  console.log("Function parameter union type", arg1, arg2);
};

textFunc("Hello", 20);

// optional function parameter
const optionalFunc = (arg1: number, arg2: number, arg3?: string) => {
  return {
    var: arg1 + arg2,
    string: arg3,
  };
};

console.log("optionalFunc", optionalFunc(10, 20));

// function signature

let signatureFunc: (arg1: string, arg2: string) => void;

signatureFunc = (arg1: string, arg2: string) => {
  return {
    arg1: arg1,
    arg2: arg2,
  };
};

console.log("signature function", signatureFunc("Foysal", "Mahmood"));

// conditional signature
let conditionalSignature: (arg1: number, arg2: number, arg3?: string) => number;

conditionalSignature = (a: number, b: number, c?: string) => {
  if (c == "add") {
    return a + b;
  } else {
    return a - b;
  }
};

console.log("Conditional sign function", conditionalSignature(1, 3));

// complex example
let userData: (
  id: string | number,
  info: {
    name: string;
    age: number;
  }
) => void;

userData = (
  userId: string | number,
  userInfo: {
    name: string;
    age: number;
  }
) => {
  return {
    userId,
    userInfo,
  };
};

// type alias

type stringNum = string | number;

type objS = { name: string; age: number };

// complex example
let userInfo: (
  id: stringNum,
  dtl: {
    name: string;
    age: number;
  }
) => void;

userData = (userId: string | number, dtl: objS) => {
  return {
    userId,
    dtl,
  };
};

// ################################# classes #################################

class player {
  name: string;
  age: number;
  country: string;

  constructor(n: string, a: number, c: string) {
    (this.name = n), (this.age = a), (this.country = c);
  }

  play() {
    console.log(`${this.name} from ${this.age} ${this.country} is playing`);
  }
}

const mashrafi = new player("Mashrafi", 40, "Bangladesh");

const shakib = new player("Shakib", 38, "Bangladesh");

const players: player[] = [];

players.push(shakib);
