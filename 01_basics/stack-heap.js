//stack - used in primitive type
let a = 10; //primitive type
let b = a; //copy of value
b = 20; //change value of b
// console.log(a); //10
// console.log(b); //20

//heap - used in reference type

let user = {
    email: "harshit@gmail.com",
    isActive: true,
}

let user2 = user; //copy of reference

user2.email = 'abc@gmail.com'

console.log(user.email);
console.log(user2.email);