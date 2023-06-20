// Primitives vs Reference Values

// Primitives - Numbers, Strings, Booleans
export let userMessage = "Hello from Primitives vs Reference Values!";
userMessage = userMessage.concat(" How are you?");

// Reference Values - Objects, Arrays, Functions
export const person = ["Edward", "Elena", "Jason"];
person.push("God");

export const loopThroughPersons = () => {
    for (const name of person) {
        console.log(name);
    }
};