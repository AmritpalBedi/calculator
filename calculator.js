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