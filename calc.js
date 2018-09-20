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


// Adds and appends numbers 0-9 to the calculator interface

for(let i = 10; i >= 0; i--) { 
	const number = document.createElement('button');
  number.id = `num${i}`;
  number.classList.add('numbers');
  number.textContent = i;
  appendToDom(number, i);
}

function appendToDom(element, number) {
	if (number < 4 && number > 0) return firstDiv.prepend(element);
	if (number < 7 && number > 3) return secondDiv.prepend(element);
	if (number < 10 && number > 6) return thirdDiv.prepend(element);
	if (number < 1) return fourthDiv.prepend(element);
}
// ----------------------------------------------------------------


// ----------------------------------------------------------------


let currentNumb = document.querySelector('.container');
currentNumb.addEventListener('click', function(e) {
	if (e.target && e.target.matches('.numbers')) {
		console.log(e.target.textContent);
	}
});





function operate(operator, number1, number2) {
	document.querySelectorAll('.numbers').forEach((element) => {
		if (operator === "+") {return addition(a,b);}
		if (operator === "-") {return subtraction(a,b);}
		if (operator === "*") {return multiplication(a,b);}
		if (operator === "/") {return division(a,b);}
	})
}

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
	return a/b;
}


let clearDisplay = document.querySelector('#clear');
clearDisplay.addEventListener('click', (event) => {
	result.textContent = "0";
})


document.querySelectorAll('.numbers').forEach((element) => {
  element.addEventListener('click', (event) => {
  	result.textContent = event.target.textContent;
  });
})

function operator(a,b,operate) {

}




