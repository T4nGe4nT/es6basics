
//  1 & 2 Spread two arrays together
let numbers1 = [1, 2, 3, 4, 5];
let numbers2 = [6, 7, 8, 9, 10];

let numbers = [...numbers1, ...numbers2];


// console.log(numbers);


//  3 Arrow funtion to calculate the square of a number.
let a = 5;
const square = (a) => {
    return a * a;
};


// console.log(square(a));


//  4 Map that contains the squares of each number in the numbers array
let squares = new Map();
numbers.forEach((number) => {
    squares.set(number, square(number));
});

// console.log(squares);

// 5 Arrow function to determin wheter a number is even or odd.
const isEven = (number) => {
    return number % 2 === 0;
};

//  console.log(isEven(4));


// 6 Filter that contains only the even numbers from the numbers array
let evenSquares = numbers.filter(isEven);

//  console.log(evenSquares);

 // 7 Destructure of the evenSquares array into constants
const x = evenSquares;
const [firstEvenSquare, secondEvenSquare] = x;

//  console.log(firstEvenSquare);
//  console.log(secondEvenSquare);

 // 8 Using Template Literals to log numbers, squares, and evenSquares

 console.log(`Numbers: ${numbers}`);
 // This next one is wild! i wont lie i used AI to get this. 
 console.log(`Squares: ${Array.from(squares.entries()).map(([key, value]) => `${key}: ${value}`).join(', ')}`); console.log(`Even Squares: ${evenSquares}`);
 // Back to bizznus
 console.log(`First Even Square: ${firstEvenSquare}`);
 console.log(`Second Even Square: ${secondEvenSquare}`);

