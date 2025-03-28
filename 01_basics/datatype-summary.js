//Primitive

//7 types : String, Number, Boolean, Undefined, Null, Symbol, BigInt

const score = 100;
const scoreValue = 100.5;
const isPassed = true;
const outsideTemp = null
let outsideTemp2; //undefined
const id = Symbol('123');
const anotherID = Symbol('123');

console.log(id === anotherID); // false, unique

const bigNumber = 1234567890123456789012345678901234567890n; //bigInt


//Reference (Non-primitive)
//3 types : Object, Array, Function

const heros = ["spiderMan", "IronMan", "Thor"];
const myObj = {
    name: "harshit",
    age: 21,
    isActive: true,
};
const myFunction = function () {
    console.log("hello world");
};