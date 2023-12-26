import PropTypes from "prop-types";
// ?comando para instalar: npm i prop-types
export function Button({ text, name, enlace = "enlace" }) {
  // console.log(text);

  if (!text) {
    console.error("debes ingresar un texto para el boton");
  }

  const preciona = () => {
    console.log("hello word");
  };
  return (
    <button onClick={preciona}>
      {text}--{name}--{enlace}
    </button>
  );
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
};
// ?puedes definir asi los valores por defecto o tambien como parametros al crear el componente
// ? o tambien colocarlo como parametro en la entrada de la funcion
Button.defaultProps = {
  name: "Es un boton",
};
