import PropTypes from "prop-types";
export function Button({ text, name, enlace = "enlace" }) {
  console.log(text);

  if (!text) {
    console.error("debes ingresar un texto para el boton");
  }
  return (
    <button>
      {text}--{name}--{enlace}
    </button>
  );
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
};
// ?puedes definir asi los valores por defecto o tambien como parametros al crear el componente
Button.defaultProps = {
  name: "Es un boton",
};
