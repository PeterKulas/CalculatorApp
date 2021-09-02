"use strict";

const button0 = document.querySelector(".btn-0");
const button1 = document.querySelector(".btn-1");
const button2 = document.querySelector(".btn-2");
const button3 = document.querySelector(".btn-3");
const button4 = document.querySelector(".btn-4");
const button5 = document.querySelector(".btn-5");
const button6 = document.querySelector(".btn-6");
const button7 = document.querySelector(".btn-7");
const button8 = document.querySelector(".btn-8");
const button9 = document.querySelector(".btn-9");
const buttonDel = document.querySelector(".btn-del");
const buttonReset = document.querySelector(".btn-reset");
const buttonEqual = document.querySelector(".btn-equal");
const buttonPlus = document.querySelector(".btn-plus");
const buttonMinus = document.querySelector(".btn-minus");
const buttonDiv = document.querySelector(".btn-div");
const buttonMulti = document.querySelector(".btn-multi");
const buttonDot = document.querySelector(".btn-dot");
const themeBtn1 = document.querySelector(".thm-1");
const themeBtn2 = document.querySelector(".thm-2");
const themeBtn3 = document.querySelector(".thm-3");
const buttonsAll = document.querySelectorAll(".btn");
const displayEl = document.querySelector(".display");

//Variables
let memory = 0,
  result = 0,
  number,
  operation;
const theme1 = [
  "hsl(222, 26%, 31%)",
  "hsl(223, 31%, 20%)",
  "hsl(225, 21%, 49%)",
  "hsl(224, 28%, 35%)",
  "hsl(224, 36%, 15%)",
  "hsl(6, 63%, 50%)",
  "hsl(6, 70%, 34%)",
  "hsl(30, 25%, 89%)",
  "hsl(28, 16%, 65%)",
  "hsl(221, 14%, 31%)",
  "white",
];
const theme2 = [
  "hsl(0, 0%, 90%)",
  "hsl(0, 5%, 81%)",
  "hsl(185, 42%, 37%)",
  "hsl(185, 58%, 25%)",
  "hsl(0, 0%, 93%)",
  "hsl(25, 98%, 40%)",
  "hsl(25, 99%, 27%)",
  "hsl(45, 7%, 89%)",
  "hsl(35, 11%, 61%)",
  "hsl(60, 10%, 19%)",
  "white",
];
const theme3 = [
  "hsl(268, 75%, 9%)",
  "hsl(268, 71%, 12%)",
  "hsl(281, 89%, 26%)",
  "hsl(285, 91%, 52%)",
  "hsl(268, 71%, 12%)",
  "hsl(176, 100%, 44%)",
  "hsl(177, 92%, 70%)",
  "hsl(268, 47%, 21%)",
  "hsl(290, 70%, 36%)",
  "hsl(52, 100%, 62%)",
  "white",
];
displayEl.textContent = memory;

//Functions
const changeColors = function (c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11) {
  document.querySelector("body").style.backgroundColor = c1;
  document.querySelector(".keypad").style.backgroundColor = c2;
  displayEl.style.backgroundColor = c5;
  displayEl.style.color = c10;
  document.querySelector(".calc").style.color = c10;
  document.querySelector(".theme").style.color = c10;

  for (let i = 0; i < buttonsAll.length; i++) {
    buttonsAll[i].style.backgroundColor = c8;
    buttonsAll[i].style.border = `1px solid${c9}`;
    buttonsAll[i].style.boxShadow = `1px 7px 4px -7px ${c9}`;
    buttonsAll[i].style.color = c10;
  }
  buttonEqual.style.backgroundColor = c6;
  buttonEqual.style.border = `1px solid ${c6}`;
  buttonEqual.style.boxShadow = `1px 7px 4px -7px ${c7}`;
  buttonEqual.style.color = c11;

  buttonDel.style.backgroundColor = c3;
  buttonDel.style.border = `1px solid ${c4}`;
  buttonDel.style.boxShadow = `1px 7px 4px -7px ${c4}`;
  buttonDel.style.color = c11;

  buttonReset.style.backgroundColor = c3;
  buttonReset.style.border = `1px solid ${c4}`;
  buttonReset.style.boxShadow = `1px 7px 4px -7px ${c4}`;
  buttonReset.style.color = c11;
};

const setNumber = function (paNumber) {
  if (memory === 0) {
    memory = paNumber;
    result = paNumber;
  } else {
    memory += `${paNumber}`;
  }
  number = paNumber;
  displayEl.textContent = memory;
};

const writeOperation = function (paOperation) {
  operation = paOperation;
  memory += `${operation}`;
  displayEl.textContent = memory;
};

const doMath = function (paOperation) {
  switch (paOperation) {
    case "+":
      result += number;
      break;
    case "-":
      result -= number;
      break;
    case "/":
      result /= number;
      break;
    case "x":
      result *= number;
      break;
    default:
      break;
  }
};
//Themes
themeBtn1.addEventListener("click", function () {
  themeBtn1.classList.add("active");
  themeBtn2.classList.remove("active");
  themeBtn3.classList.remove("active");
  changeColors(...theme1);
  document.querySelector(".display").style.color = "white";
  document.querySelector(".calc").style.color = "white";
  document.querySelector(".theme").style.color = "white";
});

themeBtn2.addEventListener("click", function () {
  themeBtn1.classList.remove("active");
  themeBtn2.classList.add("active");
  themeBtn3.classList.remove("active");
  changeColors(...theme2);
});

themeBtn3.addEventListener("click", function () {
  themeBtn1.classList.remove("active");
  themeBtn2.classList.remove("active");
  themeBtn3.classList.add("active");
  changeColors(...theme3);
  buttonEqual.style.color = "hsl(198, 20%, 13%)";
});

//Buttons

buttonReset.addEventListener("click", function () {
  (result = 0), (memory = 0);
  number = 0;
  operation = "";
  displayEl.textContent = memory;
});

buttonPlus.addEventListener("click", function () {
  writeOperation("+");
});

buttonMinus.addEventListener("click", function () {
  writeOperation("-");
});

buttonDiv.addEventListener("click", function () {
  writeOperation("/");
});

buttonMulti.addEventListener("click", function () {
  writeOperation("x");
});

buttonEqual.addEventListener("click", function () {
  displayEl.textContent = result;
});

//Work with numbers
button0.addEventListener("click", function () {
  setNumber(0);
  doMath(operation);
});
button1.addEventListener("click", function () {
  setNumber(1);
  doMath(operation);
});
button2.addEventListener("click", function () {
  setNumber(2);
  doMath(operation);
});
button3.addEventListener("click", function () {
  setNumber(3);
  doMath(operation);
});
button4.addEventListener("click", function () {
  setNumber(4);
  doMath(operation);
});
button5.addEventListener("click", function () {
  setNumber(5);
  doMath(operation);
});
button6.addEventListener("click", function () {
  setNumber(6);
  doMath(operation);
});
button7.addEventListener("click", function () {
  setNumber(7);
  doMath(operation);
});
button8.addEventListener("click", function () {
  setNumber(8);
  doMath(operation);
});
button9.addEventListener("click", function () {
  setNumber(9);
  doMath(operation);
});
