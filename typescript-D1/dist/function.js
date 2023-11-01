"use strict";
function add(num1, num2) {
    return num1 + num2;
}
add(2, 6);
const addSum = (num1, num2) => num1 + num2;
addSum(5, 10);
//object -into-> function --> method
const newUser = {
    name: 'putul',
    age: 17,
    addAge(age) {
        return `His new age is: ${this.age + age}`;
    }
};
const arr = [1, 2, 3];
const newArr = arr.map((elem) => elem * elem);
