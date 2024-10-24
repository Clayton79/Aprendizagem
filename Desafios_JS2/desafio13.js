const filtrarNumeros = function(arr) {
        const array =  arr.filter(numero => typeof numero === "number");
        return console.log(array);
}

filtrarNumeros(["javascript", 1, "3", "Web", 20]);
filtrarNumeros(["a", "c"]);