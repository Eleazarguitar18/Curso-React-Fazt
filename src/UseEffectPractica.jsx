import { useState, useEffect } from "react";

export function UseEffectPractica() {
  const [mensaje, setMensaje] = useState("");
  const [counter, setCounter] = useState(10);
  //   ?uso del use efect de namera dependiente
  // ! para que sea independiente solo deja el array vacio con un espacio
  useEffect(() => {
    console.log("render XD");
  }, [counter]);
  return (
    <div>
      <input onChange={(e) => setMensaje(e.target.value)} />
      <button onClick={() => alert("el mesaje es: " + mensaje)}>Save</button>
      <hr />

      <h1>Counter: {counter} </h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Sumar
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Restar
      </button>
      <button
        onClick={() => {
          setCounter(10);
        }}
      >
        Reiniciar
      </button>
      <hr />
    </div>
  );
}
