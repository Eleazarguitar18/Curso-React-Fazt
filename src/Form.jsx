export function From() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("enviado");
      }}
    >
      <h4>Registro usuario</h4>
      <button>Send</button>
    </form>
  );
}
