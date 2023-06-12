import * as arrowFunctions from './arrowfunctions.js';
import * as letandconst from './letandconst.js';
import { Person } from './understandingclasses.js';
import { Device } from './understandingclasses.js';
import * as spreadoperator from './spreadandrestoperator.js';

function importsAndExports() {
    arrowFunctions.printMyName(letandconst.myName);
    arrowFunctions.myAge(letandconst.myAge);
    
    let person = new Person(letandconst.myName, letandconst.myAge, "Male");
    person.greet();
}
importsAndExports();

function getDeviceDetails() {
    let device = new Device();
    device.deviceName = "iPhone 12 Pro Max";
    device.deviceModel = "A2345";
    device.platformName = "iOS";
    device.platformVersion = "14.4.2";
    device.printDeviceDetails();
}
getDeviceDetails();

spreadoperator.printNumbers();
spreadoperator.printPerson();