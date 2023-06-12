import * as arrowFunctions from './arrowfunctions.js';
import * as letandconst from './letandconst.js';
import { Person } from './understandingclasses.js';

function x() {
    arrowFunctions.printMyName(letandconst.myName);
    arrowFunctions.myAge(letandconst.myAge);
    
    let person = new Person(letandconst.myName, letandconst.myAge);
    person.greet();
}

x();