const viewer = document.querySelector(".viewer");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const digits = document.querySelector(".digits");
const digit = document.querySelectorAll(".digits li");
const operators = document.querySelectorAll(".operators li")

console.log(operators);
let operations=[]

digit.forEach(function (number) {
    const clickedNumber = function () {
		operations.push(number.innerText)
        viewer.innerHTML =operations.join('');
		
    };

    number.addEventListener('click', clickedNumber);
});
operators.forEach(function (operator) {
    const clickedOperator = function () {
		operations.push(operator.innerText)
        viewer.innerHTML =operations.join('');
		
    };

    operator.addEventListener('click', clickedOperator);
});
