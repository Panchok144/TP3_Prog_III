 
    function App() {

        
      const [numero1, setNumero1] = React.useState("");
      const [numero2, setNumero2] = React.useState("");
      const [seleccion, setSeleccion] = React.useState();
      const [resultado, setResultado] = React.useState();

      const calcular = () => {
        const n1 = parseFloat(numero1);
        const n2 = parseFloat(numero2);

        if (isNaN(n1) || isNaN(n2)) {
          setResultado("ERROR: Nose ingreso ninguno numero");
          return;
        }

        switch (seleccion) {
          case "suma":
            setResultado(n1 + n2);
            break;
          case "resta":
            setResultado(n1 - n2);
            break;
          case "multiplicacion":
            setResultado(n1 * n2);
            break;
          case "division":
            setResultado(n1 / n2);
            break;
        }
      };

      const Boton = () => {
        const n1 = parseFloat(numero1);
        const n2 = parseFloat(numero2);

        return (
          seleccion === "division" &&
          (n1 === 0 || n2 === 0)
        );
      };
    
  return (
        <>
          <div>
            <input
              type="number"
              placeholder="Número 1"
              value={numero1}
              onChange={(e) => setNumero1(e.target.value)}
            />
            <input
              type="number"
              placeholder="Número 2"
              value={numero2}
              onChange={(e) => setNumero2(e.target.value)}
            />
          </div>

          <div>
            <select value={seleccion} onChange={(e) => setSeleccion(e.target.value)}>
              <option value="suma">Suma</option>
              <option value="resta">Resta</option>
              <option value="multiplicacion">Multiplicación</option>
              <option value="division">División</option>
            </select>
          </div>

          <div>
            <button onClick={calcular} disabled={Boton()}>
              Calcular
            </button>
          </div>

          <div className="resultado">
            {<p>Resultado: {resultado}</p>}
          </div>
        </>
      )

    }

    ReactDOM.createRoot(document.getElementById("root")).render(<App />);