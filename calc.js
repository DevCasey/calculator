// ------------ Creates and selects HTML elements
const container = document.querySelector('.container');
const firstDiv = document.querySelector('#firstRow');
const secondDiv = document.querySelector('#secondRow');
const thirdDiv = document.querySelector('#thirdRow');
const fourthDiv = document.querySelector('#fourthRow');
const fifthDiv = document.querySelector('#fifthRow');
const display = document.querySelector('.display');



const num7 = document.createElement('button');
firstDiv.appendChild(num7);
num7.setAttribute('id', '7');
num7.textContent = "7";

const num8 = document.createElement('button');
firstDiv.appendChild(num8);
num8.setAttribute('id', '8');
num8.textContent = "8";

const num9 = document.createElement('button');
firstDiv.appendChild(num9);
num9.setAttribute('id', '9');
num9.textContent = "9";

const divide = document.createElement('button');
firstDiv.appendChild(divide);
divide.setAttribute('id', 'divide');
divide.textContent = "/";

const num4 = document.createElement('button');
secondDiv.appendChild(num4);
num4.setAttribute('id', '4');
num4.textContent = "4";

const num5 = document.createElement('button');
secondDiv.appendChild(num5);
num5.setAttribute('id', '5')
num5.textContent = "5";

const num6 = document.createElement('button');
secondDiv.appendChild(num6);
num6.setAttribute('id', '6');
num6.textContent = "6";

const mult = document.createElement('button');
secondDiv.appendChild(mult);
mult.setAttribute('id', 'multiply');
mult.textContent = "*";

const num1 = document.createElement('button');
thirdDiv.appendChild(num1);
num1.setAttribute('id', '1');
num1.textContent = "1";

const num2 = document.createElement('button');
thirdDiv.appendChild(num2);
num2.setAttribute('id', '2');
num2.textContent = "2";

const num3 = document.createElement('button');
thirdDiv.appendChild(num3);
num3.setAttribute('id', '3');
num3.textContent = "3";

const zero = document.createElement('button');
fourthDiv.appendChild(zero);
zero.setAttribute('id', 'zero')
zero.textContent = "0";

const minus = document.createElement('button');
thirdDiv.appendChild(minus);
minus.setAttribute('id', 'subtract');
minus.textContent = "-";

const add = document.createElement('button');
fourthDiv.appendChild(add);
add.setAttribute('id', 'add');
add.textContent = "+";


const clear = document.createElement('button');
fourthDiv.appendChild(clear);
clear.setAttribute('id', 'clear');
clear.textContent = "Clear";









// ------- Appends second row of numbers and functions to second row
// ------- 



