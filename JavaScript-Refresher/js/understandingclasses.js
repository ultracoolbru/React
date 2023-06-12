export class Human {
    constructor(gender) {
        this.gender = gender;
    }
}

export class Person extends Human {
    constructor(name, age, gender) {
        super(gender);
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and I am a ${this.gender}`);
    }
}

// A more modern approach to classes that removes the constructor and the super call:
export class Platform {
    platformName;
    platformVersion;
}

export class Device extends Platform {
    deviceName;
    deviceModel;

    printDeviceDetails() {
        console.log(`Device Name: ${this.deviceName}, Device Model: ${this.deviceModel}, Platform Name: ${this.platformName}, Platform Version: ${this.platformVersion}`);
    }
}