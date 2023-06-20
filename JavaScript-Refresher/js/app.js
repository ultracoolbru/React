import * as everything from './importsandexports.js';
import sayHello from './importsandexports.js';
import { hobbies, findIndex, editedHobbies } from './arraysandmaps.js';
import { firstName, lastName, userNameData, user, name, age, userName, userAge } from './destructuring.js';
import { timeout, timer, timerStop, sayHelloFromTimeOut, greeter } from './functionsasvalues.js';
import { init } from './functionsinfunctions.js';
import * as refsVsPrimVals from './refvsprimitivevals.js';


everything.importsAndExports();
everything.getDeviceDetails();

sayHello();
everything.default();

// Arrays and Array Methods like map()
hobbies.forEach(hobby => {
    console.log(hobby);
});

console.log(findIndex);

editedHobbies.forEach(hobby => {
    console.log(hobby);
});

// Destructuring Arrays
console.log(firstName, lastName);
console.log(userNameData);
console.log(user);
console.log(name, age);
console.log(userName, userAge);

// Functions as Values
timeout(1000);
timer(1000);
sayHelloFromTimeOut(5000);
timerStop(5000);
greeter(() => console.log("Hello from greeter!"));

init();

// Primitives vs Reference Values
console.log(refsVsPrimVals.userMessage);
console.log(refsVsPrimVals.person);
refsVsPrimVals.loopThroughPersons();