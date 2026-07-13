import { useEffect, useState } from "react";
function App() {
  const [mensaje, setMensaje] = useState("Cargando...");
  const [error, setError] = useState("");
  useEffect(() => {
    fetch("/api/saludo")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al consultar el backend");
        }
        return res.json();
      })
      .then((data) => {
        setMensaje(data.mensaje);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);
  return (
    <div className="container">
      <h1>Aplicación React + Node.js</h1>
      {error ? <p className="error">{error}</p> : <p>{mensaje}</p>}
    </div>
  );
}
export default App;
