import { useState } from "react";

export function Mensaje() {
  const [mensaje, setMensaje] = useState("");
  return (
    <div>
      <h2>Manejo de inpust</h2>
      <input onChange={(e) => setMensaje(e.target.value)} />
      <button onClick={() => alert("el mesaje es: " + mensaje)}>Save</button>
    </div>
  );
}
