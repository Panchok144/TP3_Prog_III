const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const Operaciones = document.getElementById("operacion");
const boton = document.getElementById("calcular")
const resultado = document.getElementById("resultado")




boton.addEventListener("click", function () {

    numero_1 = parseFloat(numero1.value);
    numero_2 = parseFloat(numero2.value);

    let resul = 0;

    switch ( Operaciones.value){

        case "suma":
            resul = numero_1 + numero_2;
            break;

        case "resta":

        resul = numero_1 - numero_2;
        break;

        case "multiplicacion":

        resul = numero_1 * numero_2;
        break;

        case "division":

        if (numero_1 === 0 || numero_2 === 0){

             resultado.textContent = "Error: no se puede dividir por cero";
             return;
        }else {

            resul = numero_1 / numero_2;
        }

    }

    resultado.textContent = resul;
})
