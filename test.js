// 1. What is Coercion in JavaScript?
// ANSWER: Coercion is the coversion between two different build-in types

// Explicit Coercion
var a = "42";
var b = Number(a);

console.log(a); 
// "42"
console.log(b);
// 42 number type

// 2. What is typeof operator?
// ANSWER: typeof is a operator that can examine a value and tell you what type it is:

var typeOf = "i am a string"
typeof typeOf;

console.log(typeOf);

// Do this example in google chrome console



var a = "42";

var b = Number( a );

console.log(a);
console.log(b);

// 3. FizzBuzz Challenge
// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5

for (let i = 1; i <= 100; i++) {
    let f = i % 3 == 0,
    b = i % 5 == 0;
    console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
}

