// Destructuring is a way to unpack values from arrays, or properties from objects, into distinct variables.

export const userNameData = ["Edward", "Whitehead"];

// Destructured Array.
export const [firstName, lastName] = userNameData;

export const user = {
    name: "Edward",
    age: 30
};

// Destructured Object.
export const { name, age } = user;
export const { name: userName, age: userAge } = user;