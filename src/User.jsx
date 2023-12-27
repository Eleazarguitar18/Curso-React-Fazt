export const user = [
  {
    id: 1,
    name: "Pepe",
    image: "https://robohash.org/user9",
  },
  {
    id: 2,
    name: "Teodoro",
    image: "https://robohash.org/user10",
  },
  {
    id: 3,
    name: "Carlos",
    image: "https://robohash.org/user31",
  },
];
// ? la funcion map siempre devuelve algo
export function Users() {
  console.log(user);
  const container = user.map((user, i) => {
    return (
      <div key={i}>
        <h1>{user.name}</h1>
        <img src={user.image} />
      </div>
    );
  });
  console.log(container);
  return container;
}
