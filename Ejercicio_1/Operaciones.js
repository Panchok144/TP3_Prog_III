const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const Operaciones = document.getElementById("operacion");
const boton = document.getElementById("calcular")
const resultado = document.getElementById("resultado")


function verificarDivision(){

     const n1 = parseFloat(numero1.value);
  const n2 = parseFloat(numero2.value);

  if (Operaciones.value === "division" && (n1 === 0 || n2 === 0)) {
    boton.disabled = true;
    resultado.textContent = "Error: no se puede dividir por cero";
  } else {
    boton.disabled = false;
   
  }
}

numero1.addEventListener("input", verificarDivision);
numero2.addEventListener("input", verificarDivision);
Operaciones.addEventListener("change", verificarDivision);

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

       
            resul = numero_1 / numero_2;
            
      break;

    }

    resultado.textContent = resul;
})
