function greet(name: string): string {
    return `Welcome, ${name}`;
}
console.log(greet('Raka'));
console.log(greet(42));

//Declaring type annotation
let user: string = 'Raka'
let age: number = 25
let isActive: boolean = true
console.log(`${user} is ${age} years old.`);

{/*Type Assignment Error */}
let city: string = 'Kathmandu'
let city = 44
console.log();

{/*Type Inference */ }

//Declare userName as string once and dont define type later
let userName: string = 'ungabunga'

userName = 'bungaunga'
userName = 24 //Throws error before runtime
console.log(userName);

{/*Inference in Function */ }
function add(x: number, y: number): number{
    return x + y;
}

let result = add(10, 10);
console.log(result);

function isLoggedIn(user: string): boolean{
    if (typeof user === 'string') {
        return true;
    }
    else {
        return false;
    }
}

console.log(isLoggedIn(24));
console.log(isLoggedIn('ungabunga'));

{/*Inference in array */ }

const hero = ['shaktiman', 'tota', 'perman'];
const number = [1, 2, 3];
const mixed = ['crazy', 23, 'hola']

//String only accepts string data, numbers accepts number but does not accept anything data other than its types
hero.push('pencilman') //Only a string can be pushed in an array of string cause of types
number.push(34) //Same as above 
mixed.push('crazyman', 88) //Same as above

console.log(hero);
console.log(number);
console.log(mixed);


{/*Inference in Array */ }

const user = {
    name: 'Raka',
    age: 23,
    isAdmin: false,
    city: {
        name: "New York",
        population: 8000000,
        country: "USA",
        coordinates: {
            lat: 40.7128,
            lng: -74.0060
        }
    }
}

console.log(user);

//Here the num gets the type context from the type of number
const numbers = [1, 2, 4, 5 ,6 ,8]

numbers.forEach((num) => {
    console.log(`The number is ${num}.`);
})

interface User{
    name: string;
    age: number;
    isAvailable?: boolean;
}

let user1: User = { name: 'unga', age: 99, isAvailable:true };
let user2: User = { name: 'bunga', age: 1, isAvailable:false };

console.log(`${user1.name} is ${user1.age} years old. He is ${user1.isAvailable}`);
console.log(`${user2.name} is ${user2.age} years old. He is ${user2.isAvailable}`);

{/* Union Types */ }
type ID = string | number;  // Can be either

//Example
let result: string | number = 'abcd1234';
if (typeof result === "string" || typeof result === "number") {
    console.log(`The given value is valid.`);
} else {
    console.log(`The given value is not valid.`);
}  

{/* Intersection Types */ }
type Admin = User & { permissions: string[] };

//Example
type User = {
    id: number;
    name: string;
    email: string;
};

type Admin = User & {
    permissions: string[];
    role: "admin" | "superadmin";
};

{/* Literal Types */ }
type Status = "pending" | "approved" | "rejected";

{/* Type Alias / Interface */ }
type Point = { x: number; y: number };

