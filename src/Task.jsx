import { useState } from "react";
import "./task.css";
// TaskCard(chec);

export function TaskCard(/* { ready } */) {
  //   const valor = ;
  //   console.log(valor);
  const valor = false;
  const [ready, setReady] = useState(valor);
  const heandelReady = () => {
    setReady(!ready);
  };
  return (
    <div className="card">
      <h1>Mi primera tarea componente</h1>
      <input type="checkbox" checked={ready} onChange={heandelReady} />

      <div className={ready ? "task-green" : "task-red"}>
        {ready ? "tarea completa" : "tarea pendiente"}
      </div>
    </div>
  );
}
