export const timeout = (timeout) => setTimeout(() => {
    console.log("Hello from setTimeout!");
}, timeout);

let nIntervalId;
export const timer = (timer) => {
    nIntervalId = setInterval(() => {
        console.log("Hello from setInterval!");
    }, timer);
}

export const timerStop = (timeout) => setTimeout(() => {
    clearInterval(nIntervalId);
    console.log("Timer stopped!");
}, timeout);

function sayHello() {
    console.log("Hello from sayHello!");
}

// sayHello() is passed as a value to setTimeout() and is executed after the timeout.
export const sayHelloFromTimeOut = (timeout) => setTimeout(sayHello, timeout);

export const greeter = (greeterFn) => greeterFn();