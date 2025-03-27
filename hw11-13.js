const input1 = prompt("Це буде перше число: ");
const input2 = prompt("Це буде друге число: ");
const operation = prompt(`Введіть одну з операцій, яка запропонована нижче:
    \u2795, \u2796, \u2716\uFE0F, \u2797`);  


function plus_operation (input1, input2) {
    return input1 + input2;
}

function minus_operation (input1, input2) {
    return input1 - input2;
}   

function multiply_operation (input1, input2) {
    return input1 * input2;
}   

function divide_operation (input1, input2) {
    return input1 / input2;
}


if (operation === "+") {
    console.log(plus_operation(+input1, +input2));
} else if (operation === "-") {
    console.log(minus_operation(+input1, +input2));
} else if (operation === "*") {
    console.log(multiply_operation(+input1, +input2));
} else if (operation === "/") {
    if (+input2 === 0) {
        alert(`А тепер повільно прибери руки від клавіатури і не рухайся! \uD83D\uDEA8`);
    } else {
        console.log(divide_operation(+input1, +input2));
    }
} else {
    console.log("Невідомий оператор!");
    alert("Невідомий оператор!");
}


