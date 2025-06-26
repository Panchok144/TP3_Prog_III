function App(){

    const [habilitado, setHabilitado] = React.useState("Bizquierdo");

    return (
    
    <>
    <button onClick = {() => setActivo("Bderecho")}
        disabled = {activo !== "Bizquierdo"}>

            Boton Izquierdo
        </button>


     <button onClick = {() => setActivo("Bizquierdo")}
        disabled = {activo !== "Bderecho"}>

            Boton Derecho
        </button>    
    </>
    )
    
}

const root = ReactDOM.CreatRoot(document.getElementById("root"));
root.render(<App />);