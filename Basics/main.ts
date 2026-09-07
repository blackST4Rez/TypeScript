// function greet(name: string): string {
//     return `Welcome, ${name}`;
// }
// console.log(greet('Raka'));
// console.log(greet(42));

//Declaring type annotation
let user: string = 'Raka'
let age: number = 25
let isActive: boolean = true
console.log(`${user} is ${age} years old.`);

{/*Type Assignment Error */}
// let city: string = 'Kathmandu'
// let city = 44
// console.log();

{/*Type Inference */ }

//Declare userName as string once and dont define type later
// let userName: string = 'ungabunga'

// userName = 'bungaunga'
// userName = 24 //Throws error before runtime
// console.log(userName);

//Inference in function
// function add(x: number, y: number): number{
//     return x + y;
// }

// let result = add(10, 10);
// console.log(result);

// function isLoggedIn(user: string): boolean{
//     if (typeof user === 'string') {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(isLoggedIn(24));
// console.log(isLoggedIn('ungabunga'));



