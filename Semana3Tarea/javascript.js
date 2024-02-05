function Velocidad() {
    // Obtener los valores de los inputs
    var distanciaEnKilometros = parseFloat(document.getElementById('distanciaInput').value);
    var tiempoEnMinutos = parseFloat(document.getElementById('tiempoInput').value);

   
    if (isNaN(distanciaEnKilometros) || isNaN(tiempoEnMinutos)) {
        alert('Por favor, ingrese valores numéricos válidos.');
        return;
    }

    // Realizar el cálculo de velocidad en m/s
    var velocidadEnMetrosPorSegundo = (distanciaEnKilometros * 1000) / (tiempoEnMinutos * 60);

    // Mostrar el resultado en el elemento con id 'resultado'
    document.getElementById('resultado').innerText = 'Velocidad: ' + velocidadEnMetrosPorSegundo.toFixed(2) + ' m/s';
}





/*EJERCICIO 2*/

function clasificacionTriangulo() {
    // se guardan  los valores de los lados
    var ladoA = parseFloat(document.getElementById('ladoA').value);
    var ladoB = parseFloat(document.getElementById('ladoB').value);
    var ladoC = parseFloat(document.getElementById('ladoC').value);

    // ver si los valores son válidos
    if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
        alert('Por favor, ingrese valores numéricos válidos.');
        return;
    }

    // Evaluar los lados del triangulo
    if (ladoA === ladoB && ladoB === ladoC) {
        mostrarResultado='Triángulo Equilátero';
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        mostrarResultado='Triángulo Isósceles';
    } else {
        mostrarResultado='Triángulo Escaleno';
    }

    //mostrar valor final
    document.getElementById('resultado1').innerText = mostrarResultado;
}


    
    





/*EJERCICIO 3*/


function realizarCalculo() {
    //  valores de los números
    var num1 = parseFloat(document.getElementById('inputNumero1').value);
    var num2 = parseFloat(document.getElementById('inputNumero2').value);

    // Verificar si son válidos
    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, ingrese valores numéricos válidos para los números.');
        return;
    }

    // Obtener la operación escogida
    var operacion = document.getElementById('selectOperacion').value;

    // Realizar la operación y mostrar el resultado mediante un switch
    var resultado;
    switch (operacion) {
        case 'suma':
            resultado = num1 + num2;
            break;
        case 'resta':
            resultado = num1 - num2;
            break;
        case 'multiplicacion':
            resultado = num1 * num2;
            break;
        case 'division':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                alert('Error: No se puede dividir por cero.');
                return;
            }
            break;
        default:
            alert('Seleccione una operación válida.');
            return;
    }

    // Mostrar el resultado en el elemento con id 'resultado2'
    document.getElementById('resultado2').innerText = 'Resultado: ' + resultado;
}



















/*EJERCICIO 4*/




function verificar() {
    // Obtener el valor del número
    var num1 = parseInt(document.getElementById('numeroEntrada').value);

    // Verificar si el valor es válido
    if (isNaN(num1)) {
        alert('Por favor, ingrese un número válido.');
        return;
    }

    // Verificar si el número es primo
    var esPrimo = esNumeroPrimo(num1);

    // Mostrar el resultado en el elemento con id 'resultado'
    if (esPrimo) {
        mostrarResultado('El número ' + num1 + ' es primo.');
    } else {
        mostrarResultado('El número ' + num1 + ' no es primo.');
    }
}

function esNumeroPrimo(num) {
    if (num <= 1) {
        return false;
    }

    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function mostrarResultado(resultado) {
    // Mostrar el resultado en el elemento con id 'resultado'
    document.getElementById('resultado4').innerText = resultado;
}















