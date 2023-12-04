const viewer = document.querySelector(".viewer");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const digits = document.querySelector(".digits");
const digit = document.querySelectorAll(".digits li");

const showInsertion = function (button) {
	viewer.innerHTML = button;
};
showInsertion(12345);
console.log(digit);

digit.forEach(function (number) {
    const clickedNumber = function () {
        viewer.innerHTML =number.innerText;
    };

    number.addEventListener('click', clickedNumber);
});