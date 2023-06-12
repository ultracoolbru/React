// Spread is used to split up array elements OR object properties.
export const numbers = [1, 2, 3];
export const newNumbers = [...numbers, 4];

export function printNumbers() {
    console.log(newNumbers);
}

// Rest is used to merge a list of function arguments into an array.
export const person = {
    name: "Edward"
}
export const newPerson = {
    ...person,
    age: 30
}

export function printPerson() {
    console.log(newPerson);
}