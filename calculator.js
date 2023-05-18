function add(x, y) {
    let z = x + y;
    if (z.toString().length > 11) {
        z = z.toPrecision(11)
    }
    return z;
}

function sub(x, y) {
    let z = x - y;
    if (z.toString().length > 11) {
        z = z.toPrecision(11)
    }
    return z;
}

function multiply(x, y) {
    let z = x * y;
    if (z.toString().length > 11) {
        z = z.toPrecision(11)
    }
    return z;
}

function divide(x, y) {
    let z = x / y;
    if (z.toString().length > 11) {
        z = z.toPrecision(11)
    }
    return z;
}

function operate(x, operator, y) {
    if (operator == "+") {
        return add(x, y)
    }
    else if (operator == "-") {
        return sub(x, y)
    }
    else if (operator == "x") {
        return multiply(x, y)
    }
    else if (operator == "/") {
        return divide(x, y)
    }
}

const screen = document.querySelector(".nums");
const digits = document.querySelectorAll(".digits");

let temp;
let firstNum;
let secondNum;
let symbol;
digits.forEach((digit) => {
    digit.addEventListener("click", () => {
        if (firstNum && secondNum) {
            if (digit.textContent == "+" || digit.textContent == "-" ||digit.textContent == "÷" ||digit.textContent == "x") {
                screen.textContent = operate(firstNum, symbol, secondNum);
            }
        }
        if (temp) {
            firstNum = +temp;
            screen.textContent = "";
            temp = undefined;
        }
        if (digit.textContent == "+") {
            symbol = "+";
            temp = screen.textContent;
        }
        else if (digit.textContent == "-") {
            symbol = "-";
            temp = screen.textContent;
        }
        else if (digit.textContent == "x") {
            symbol = "x";
            temp = screen.textContent;
        }
        else if (digit.textContent == "÷") {
            symbol = "/";
            temp = screen.textContent;
        }
        else {
            if (screen.textContent.length == 15) {
                screen.textContent = screen.textContent;
            }
            else {
                if (screen.textContent == "0") {
                    screen.textContent = digit.textContent;
                }
                else {
                    screen.textContent += digit.textContent;
                }
            }
        }
        if (firstNum) {
            secondNum = +screen.textContent;
        }
    });
});

const equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
    if (firstNum && secondNum) {
        screen.textContent = operate(firstNum, symbol, secondNum);
    }
})


const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    screen.textContent = "0";
    firstNum = undefined;
    secondNum = undefined;
    temp = undefined;
})

const del = document.querySelector(".delete");
del.addEventListener("click", () => {
    screen.textContent.length == 1 ? screen.textContent = 0 :
        screen.textContent = screen.textContent.slice(0, -1);
})

