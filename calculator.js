function add(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(x, operator, y) {
    if (operator == "+") {
        add(x, y)
    }
    else if (operator == "-") {
        sub(x, y)
    }
    else if (operator == "*") {
        multiply(x, y)
    }
    else if (operator == "/") {
        divide(x, y)
    }
}

const screen = document.querySelector(".nums");

const digits = document.querySelectorAll(".digits");
let num = 0;
digits.forEach((digit) => {
    digit.addEventListener("click", () => {
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
    });
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    screen.textContent = "0";
})

const del = document.querySelector(".delete");
del.addEventListener("click", () => {
    screen.textContent.length == 1 ? screen.textContent = 0:
    screen.textContent = screen.textContent.slice(0, -1);
})

// const addition = document.querySelector("#add");
// add.addEventListener("click", () => {
//     let firstNum = +screen.textContent;

// })

// just using to test
// const asdad = document.querySelectorAll(".operation");
// asdad.forEach((digit) => {
//     digit.addEventListener("click", () => {
//         alert(screen.textContent.length)
//     })
// })

