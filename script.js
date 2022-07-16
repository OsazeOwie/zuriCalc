const num1 = prompt("Enter number: ");
let operation = prompt ("Enter operation");
const num2 = prompt("Enter second number: ");

if (operation === "+"){
alert(parseInt(num1) + parseInt(num2));
}

else if (operation === "-"){
alert(parseInt(num1) - parseInt(num2));
}

else if (operation === "/"){
alert(parseInt(num1) / parseInt(num2));
}

else if (operation === "*"){
alert(parseInt(num1) * parseInt(num2));
}

else{
    alert("wrong input");
};
