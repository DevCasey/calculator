// ------------ Creates and selects HTML elements
const container = document.querySelector('.container');
const firstDiv = document.querySelector('#firstRow');
const secondDiv = document.querySelector('#secondRow');
const thirdDiv = document.querySelector('#thirdRow');
const fourthDiv = document.querySelector('#fourthRow');
const fifthDiv = document.querySelector('#fifthRow');
const display = document.querySelector('.display');
const getNumbers = document.querySelectorAll('.numbers');

let result = document.querySelector('#calculation');
result.textContent = "0";

const divide = document.createElement('button');
firstDiv.appendChild(divide);
divide.setAttribute('id', 'divide');
divide.textContent = "/";

const mult = document.createElement('button');
secondDiv.appendChild(mult);
mult.setAttribute('id', 'multiply');
mult.textContent = "*";

const minus = document.createElement('button');
thirdDiv.appendChild(minus);
minus.setAttribute('id', 'subtract');
minus.textContent = "-";

const decimal = document.createElement('button');
fourthDiv.appendChild(decimal);
decimal.setAttribute('id', 'decimal');
decimal.textContent = ".";

const plusOrMinus = document.createElement('button');
fourthDiv.appendChild(plusOrMinus);
plusOrMinus.setAttribute('id', 'plusOrMinus');
plusOrMinus.textContent = "+/-";

const add = document.createElement('button');
fourthDiv.appendChild(add);
add.setAttribute('id', 'add');
add.textContent = "+";

const clear = document.createElement('button');
fifthDiv.appendChild(clear);
clear.setAttribute('id', 'clear');
clear.textContent = "Clear";

const undo = document.createElement('button');
fifthDiv.appendChild(undo);
undo.setAttribute('id', 'undo');
undo.textContent = "Undo";

const percent = document.createElement('button');
fifthDiv.appendChild(percent);
percent.setAttribute('id', 'percent');
percent.textContent = "%";

const equals = document.createElement('button');
fifthDiv.appendChild(equals);
equals.setAttribute('id', 'equals');
equals.textContent = "=";


for(let i = 10; i > 0; i--) {
	const number = document.createElement('button');
  number.id = `num${i}`
  number.classList.add('numbers')
  number.textContent = i;
  appendToDom(number, i);
}

function appendToDom(element, number) {
	if (number < 4) return firstDiv.prepend(element);
	if (number < 7) return secondDiv.prepend(element);
	if (number < 10) return thirdDiv.prepend(element);
}
// ----------------------------------------------------------------
// ----------------------------------------------------------------

function addition(a,b) {
	return a+b;
}

function subtraction(a,b) {
	return a-b;
}

function multiplication(a,b) {
	return a*b;
}

function division(a,b) {
}

function screenClear() {
	document.querySelector('#clear').addEventListener('click', (event) => {
		result.textContent = 0;
	})
}

document.querySelectorAll('.numbers').forEach((element) => {
  element.addEventListener('click', (event) => {
  	result.textContent = event.target.textContent;
  });
})












/*// ------------ Creates and selects HTML elements
const container = document.querySelector('.container');
const firstDiv = document.querySelector('#firstRow');
const secondDiv = document.querySelector('#secondRow');
const thirdDiv = document.querySelector('#thirdRow');
const fourthDiv = document.querySelector('#fourthRow');
const fifthDiv = document.querySelector('#fifthRow');
const display = document.querySelector('.display');
const getNumbers = document.querySelectorAll('.numbers');



let result = document.querySelector('#calculation');
result.textContent = "0";

const num7 = document.createElement('button');
firstDiv.appendChild(num7);
num7.setAttribute('id', 'num7');
num7.classList.add('numbers')
num7.textContent = "7";

const num8 = document.createElement('button');
firstDiv.appendChild(num8);
num8.setAttribute('id', 'num8');
num8.classList.add('numbers');
num8.textContent = "8";

const num9 = document.createElement('button');
firstDiv.appendChild(num9);
num9.setAttribute('id', 'num9');
num9.classList.add('numbers');
num9.textContent = "9";

const divide = document.createElement('button');
firstDiv.appendChild(divide);
divide.setAttribute('id', 'divide');
divide.textContent = "/";

const num4 = document.createElement('button');
secondDiv.appendChild(num4);
num4.setAttribute('id', 'num4');
num4.classList.add('numbers');
num4.textContent = "4";

const num5 = document.createElement('button');
secondDiv.appendChild(num5);
num5.setAttribute('id', 'num5')
num5.classList.add('numbers')
num5.textContent = "5";

const num6 = document.createElement('button');
secondDiv.appendChild(num6);
num6.setAttribute('id', 'num6');
num6.classList.add('numbers')
num6.textContent = "6";

const mult = document.createElement('button');
secondDiv.appendChild(mult);
mult.setAttribute('id', 'multiply');
mult.textContent = "*";

const num1 = document.createElement('button');
thirdDiv.appendChild(num1);
num1.setAttribute('id', 'num1');
num1.classList.add('numbers');
num1.textContent = "1";

const num2 = document.createElement('button');
thirdDiv.appendChild(num2);
num2.setAttribute('id', 'num2');
num2.classList.add('numbers');
num2.textContent = "2";

const num3 = document.createElement('button');
thirdDiv.appendChild(num3);
num3.setAttribute('id', 'num3');
num3.classList.add('numbers');
num3.textContent = "3";

const zero = document.createElement('button');
fourthDiv.appendChild(zero);
zero.setAttribute('id', 'zero')
zero.classList.add('numbers');
zero.textContent = "0";

const minus = document.createElement('button');
thirdDiv.appendChild(minus);
minus.setAttribute('id', 'subtract');
minus.textContent = "-";

const decimal = document.createElement('button');
fourthDiv.appendChild(decimal);
decimal.setAttribute('id', 'decimal');
decimal.textContent = ".";

const plusOrMinus = document.createElement('button');
fourthDiv.appendChild(plusOrMinus);
plusOrMinus.setAttribute('id', 'plusOrMinus');
plusOrMinus.textContent = "+/-";

const add = document.createElement('button');
fourthDiv.appendChild(add);
add.setAttribute('id', 'add');
add.textContent = "+";

const clear = document.createElement('button');
fifthDiv.appendChild(clear);
clear.setAttribute('id', 'clear');
clear.textContent = "Clear";

const undo = document.createElement('button');
fifthDiv.appendChild(undo);
undo.setAttribute('id', 'undo');
undo.textContent = "Undo";

const percent = document.createElement('button');
fifthDiv.appendChild(percent);
percent.setAttribute('id', 'percent');
percent.textContent = "%";

const equals = document.createElement('button');
fifthDiv.appendChild(equals);
equals.setAttribute('id', 'equals');
equals.textContent = "=";
// ----------------------------------------------------------------
// ----------------------------------------------------------------

function addition(a,b) {
	return a+b;
}

function subtraction(a,b) {
	return a-b;
}

function multiplication(a,b) {
	return a*b;
}

function division(a,b) {
}

function screenClear() {
	calculation.textContent = "0";
}

document.querySelectorAll('.numbers').forEach((element) => {
  element.addEventListener('click', (event) => {
    console.log(event.target);
  });
})
*/



/*function operate(operator, num1, num2) {
	operator = "";
	num1 = "";
	num2 = "";

	if (operator === "+") {return add(a,b);}
	if (operator ===)*/


