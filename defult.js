function add (num1, num2 = 10){
    num2 = num2 || 0;
    return num1 + num2;
}

const total = add(18, 450);
console.log(total);