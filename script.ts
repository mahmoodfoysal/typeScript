console.log("Hello");
function multiplication(a: number, b: number) {
  return a * b;
}
console.log(multiplication(3, 4));

// normal variable
let a: string | number;

// array union
let b: (string | number)[] = [];

b.push(1, 2);

console.log("b", b);

a = 5;
a = "str";

// dynamic type

let c: any; // kub thekai na porle ata use kora thik na

c = 5;

c = "Str";

let anyTypeOfArray: any[] = [];

anyTypeOfArray.push("Arr");

anyTypeOfArray.push(290);

// any type of object

let anyTypeOfObject: {
  name: any;
  age: any;
};

anyTypeOfObject = {
  name: "Bangladesh",
  age: 34,
};

// lesson function type

const myFunc: Function = (f1: number, f2: number) => {
  return f1 + f2;
};

console.log("myfunc", myFunc(100, 50));

// optional function parameter
const opFunc = (f1: number, f2: number, f3?: number) => {
  return f1 * f2;
};

console.log("Optional parameter", opFunc(20, 3));

// default function parameter
const defaultFunc = (f1: number, f2: number, f3: number = 10) => {
  return f1 * f2;
};

console.log("Optional parameter", defaultFunc(20, 3));

// type alias

type stringOrNumber = string | number;
type useType = { name: string; age: number };

const useDetails = (id: stringOrNumber, user: useType) => {
  console.log(`user id is ${id}, name is ${user.name} and age is ${user.age}`);
};

const sayHello = (user: useType) => {
  console.log(`Hello ${user.age > 50 ? "sir" : "Mr."} ${user.name}`);
};

// function signatures

let myFungSig: (x: number, y: number) => number;

myFungSig = (a, b) => {
  return a + b;
};

let calculation: (x: number, y: number, c: string) => number;

// complex example

calculation = (a: number, b: number, c: string) => {
  if (c == "add") {
    return a + b;
  } else {
    return a * b;
  }
};

calculation(5, 6, "add");

console.log("calculation", calculation);

let useInfo: (
  id: number | string,
  info: {
    name: string;
    age: number;
  }
) => void;

useInfo = (
  id: number | string,
  info: {
    name: string;
    age: number;
  }
) => {};

// Classes

class Player {
  name: string;
  age: number;
  country: string;

  constructor(n: string, a: number, c: string) {
    this.name = n;
    (this.age = a), (this.country = c);
  }

  play() {
    console.log(`${this.name} from ${this.country} is playing!`);
  }
}

const mashrafi = new Player("Mashrafi", 2, "Bangladesh");
const shakib = new Player("Mashrafi", 75, "Bangladesh");

const players: Player[] = [];

players.push(shakib);
players.push(mashrafi);

// Access Modifiers
class Player2 {
  public name: string;
  private age: number;
  readonly country: string;

  constructor(n: string, a: number, c: string) {
    this.name = n;
    (this.age = a), (this.country = c);
  }

  play() {
    console.log(`${this.name} from ${this.country} is playing!`);
  }
}

const mashrafi2 = new Player2("Mashrafi", 2, "Bangladesh");
const shakib2 = new Player2("Mashrafi", 75, "Bangladesh");

const players2: Player2[] = [];

players2.push(shakib2);
players2.push(mashrafi2);

// bahire theke access kora jabe na

class Player3 {
  constructor(
    public name: string,
    private age: number,
    readonly country: string
  ) {}

  play() {
    console.log(`${this.name} from ${this.country} is playing!`);
  }
}

const mashrafi3 = new Player2("Mashrafi", 2, "Bangladesh");
const shakib3 = new Player2("Mashrafi", 75, "Bangladesh");

const players3: Player2[] = [];

players2.push(shakib3);
players2.push(mashrafi3);
