import { TfiServer } from "react-icons/tfi";
const post = () => {
  fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};
export const Posts = () => {
  return (
    <button onClick={post}>
      {" "}
      <TfiServer /> Traer Datos
    </button>
  );
};
