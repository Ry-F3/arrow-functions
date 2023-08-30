/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

function addTwoNumbers(a, b) {
    //code block
    return a + b
}

let sum = addTwoNumbers(3, 5);
console.log(sum)

// Arrow Function With Parameters

const addTwoValues = (a, b) => {
    //code block
    return a + b
}

let sumValue = addTwoValues(5, 5);
console.log(sumValue)

// Single Line Arrow Function With Parameters
// const addTwoValuesP = (a, b) => (a + b); also valid
const addTwoValuesP = (a, b) => a + b;

let sumValueP = addTwoValuesP(2.5, 5);
console.log(sumValueP);

// Implicit Returns

const saySomething = message => console.log(message);
saySomething('Hello there!');

const sayHello = () => console.log('Hello');
sayHello()

// Returning Multiple Lines

const  returnMultipleLines = () => (
    `<p>
        This is a multiline string
    </p>`
)

console.log(returnMultipleLines());