const { useState } = React;

function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");
  const [clase, setClase] = useState("");

  function Calcular() {
    const alt = parseFloat(altura);
    const pes = parseFloat(peso);

    if (!alt || !pes) {
      setResultado("ERROR: No se ingresaron valores validos");
      setClase("error");
      return;
    }

    const imc = pes / (alt * alt);
    const res = imc.toFixed(2);

    if (imc < 18.5) {
      setResultado(`Su IMC es: ${res} - su condicion es Nivel bajo`);
      setClase("bajo");
    } else if (imc >= 18.5 && imc < 25) {
      setResultado(`Su IMC es: ${res} - su condicion es Nivel normal`);
      setClase("normal");
    } else if (imc >= 25 && imc <= 29.9) {
      setResultado(`Su IMC es: ${res} - su condicion es Nivel sobrepeso`);
      setClase("sobrepeso");
    } else {
      setResultado(`IMC: ${res} - Nivel de NIvel obesidad`);
      setClase("obesidad");
    }
  }

  return (
    <>
      <h2>Calculadora de IMC</h2>

      <input
        type="number"
        placeholder="Peso (kg)"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />

      <input
        type="number"
        placeholder="Altura (m)"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />

      <button onClick={Calcular}>Calcular</button>

      <p className={clase}>{resultado}</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
