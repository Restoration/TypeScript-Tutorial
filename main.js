"use strict";
exports.__esModule = true;
var message = 'Hello World';
console.log(message);
var title = 'Codevolution';
var isBeginner = true;
var name = 'Vishwas';
var sentence = "My name is " + name + "\nI am a beginner in TypeScript";
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['Chris', 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var myVariable = 10;
var multiType;
multiType = 20;
multiType = true;
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
console.log(add(1, 2));
console.log(add(1));
function fullname(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Yosui',
    lastName: 'Inoue'
};
fullname(p);
