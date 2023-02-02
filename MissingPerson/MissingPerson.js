"use strict";
/*
Problem:
    Type "Person" is missing, please define it and use
    it in persons array and logPerson function in order to fix
    all the TS errors.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPerson = exports.persons = void 0;
exports.persons /* <- Person[] */ = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];
function logPerson(person) {
    let additionalInformation;
    if ('role' in person) {
        additionalInformation = person.role;
    }
    else {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}
exports.logPerson = logPerson;
exports.persons.forEach(logPerson);
