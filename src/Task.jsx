import "./task.css";
// TaskCard(chec);

export function TaskCard({ ready }) {
  //   const valor = ;
  //   console.log(valor);
  return (
    <div className="card">
      <h1>Mi primera tarea componente</h1>
      <input type="checkbox" />

      <div className={ready ? "task-green" : "task-red"}>
        {ready ? "tarea completa" : "tarea pendiente"}
      </div>
    </div>
  );
}
