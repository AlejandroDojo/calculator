// Variables globales.
const display = document.getElementById("display");
const numberCall = document.querySelectorAll(".number");
const opCall = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals");

// Declaración de variables.
let num1 = "";
let aux = "";
let operacion = "";


// Al dar click en un número
numberCall.forEach( number => {
    number.addEventListener("click", () => {
        // Pasa el num1 al numero seleccionado y lo imprime
        num1+= number.textContent;
        display.innerHTML = num1;
    })
});
// Al dar click en un operador
opCall.forEach( operator => {
    operator.addEventListener("click", () => {
        // Selecciona un operador, y da valor al auxiliar
        operacion = operator.textContent;
        aux = num1;
        num1 = "";
    })
})
// Al dar click en es igual.
equals.addEventListener("click", () => {
    // Se pasan a decimales para no tener fallas aritmeticas.
    let numero1 = parseFloat(num1);
    let numero2 = parseFloat(aux);
    let resultado = 0;
    // Ejecuta la operación dependiendo del operador.
    if (operacion === "+") {
        resultado = numero1 + numero2;
    } else if (operacion === "-") {
        resultado = numero1 - numero2;
    } else if (operacion === "x") {
        resultado = numero1 * numero2;
    } else {
        resultado = numero1 / numero2;
    } 

    num1 = resultado;
    // Imprime el resulado
    display.innerHTML = resultado;
    operacion = "";
})
