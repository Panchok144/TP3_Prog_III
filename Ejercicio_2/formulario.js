const boton = document.getElementById("Boton");

boton.addEventListener("click", function() {

  const palabra = document.getElementById("ingresar").value.trim().toLowerCase();
  const resultado = document.getElementById("resultado");

  const palabras_cargadas = ["manzana", "banana", "pera", "durazno", "frutilla", "mango"];

  if (palabra === "") {
    resultado.innerHTML = `<p>ERROR: no se ingresó una palabra</p>`;
    return;
  }

  
  const PF = palabras_cargadas.filter(p => p.toLowerCase().includes(palabra));

  
  

  if (PF.length > 0) {
    const NP = PF.map(f => `<li>${f}</li>`).join("");
    resultado.innerHTML = 
    ` 
      <p> Palabras similar: ${palabra}  
      <ul>${NP}</ul>
      `;
  } else {
    resultado.innerHTML = `<p>No se encontraron coincidencias</p>`;
  }
});

