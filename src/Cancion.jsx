export function Cancion({ titulo, autor, tempo, tono, link, secuencia }) {
  const container = (
    <div className="cancion">
      <h1>{titulo}</h1>
      <h3>Autor: {autor}</h3>
      <h4>tempo:{tempo} 🎶</h4>
      <h4>tono:{tono} 🎼</h4>
      <h4>tono: {tono} </h4>
      <p>
        enlace: {link} <br />
        secuecnia: {secuencia ? "si" : "no"}
      </p>
    </div>
  );
  return container;
}
