var nombre;
var apellidos;
var edad;
var salario;

function recibir() {
    nombre = document.getElementsByName("nombre")[0].value;
    apellidos = document.getElementsByName("apellidos")[0].value;
    edad = parseInt(document.getElementsByName("edad")[0].value);
    salario = parseFloat(document.getElementsByName("salario")[0].value);

    if (!isNaN(salario) && !isNaN(edad)) {
        calcularSalario(salario, edad);
    } else {
        document.getElementById("escribir").innerHTML = "<h1>Por favor, introduce valores numéricos válidos para edad y salario.</h1>";
    }
}

function borrar() {
    document.getElementById("escribir").innerHTML = "";
}

function calcularSalario(salario, edad) {
    if (salario < 1000) {
        if (edad < 30) {
            salario = 1100;
        } else if (edad <= 45) {
            salario *= 1.03;
        } else {
            salario *= 1.15;
        }
    } else if (salario <= 2000) {
        if (edad > 45) {
            salario *= 1.03;
        } else {
            salario *= 1.1;
        }
    }

    document.getElementById("escribir").innerHTML = "<h1>Tu salario es " + salario.toFixed(2) + " euros</h1>";
}
