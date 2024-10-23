const estaEntre = function(numero,minimo,maximo,inclusivo) {
        if(numero > minimo && numero < maximo) {
            numero = true;
        } else if (numero < minimo || numero > maximo) {
            numero = false;
        } else if ((numero == minimo || numero == maximo) && inclusivo != true) {
            numero = false;
        } else if ((numero == minimo || numero == maximo) && inclusivo == true) {
            numero = true
        }
        console.log(numero);
}

estaEntre(10, 50, 100);
estaEntre(16, 100, 160);
estaEntre(3, 3, 150);
estaEntre(3, 3, 150, true);