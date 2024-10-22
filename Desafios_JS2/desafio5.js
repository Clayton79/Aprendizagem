const maiorOuIgual = function (num1, num2) {
    if(typeof num1 === "number" && typeof num2 === "number") {
        console.log(num1 >= num2);
    }else {
        console.log(false);
    }
} 
maiorOuIgual(1,2);