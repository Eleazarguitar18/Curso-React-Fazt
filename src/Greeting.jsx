
export function Greeting() {
    const user = {
        firstName: 'Eleazar',
        lastName: 'Cruz'
    }
    // return <h1>{JSON.stringify(user)}</h1>
    const married = false

    const suma = (x, y) => {
        return x + y
    }
    return (
        <>
            <h1>{user.firstName}</h1>
            <h3>{user.lastName}</h3>
            <p>otra variable: {married.toString()}</p>
            <h1>{married ? 'estoy casado 🎁' : 'no estoy casado ❄️'}</h1>
            <h2>{suma(20, 19)}</h2>
        </>
    )

}
// function Greeting({ nombre }) {
//     return <div>
//         <h1>Este es un componente {nombre}</h1>
//         <p>lorem 123</p>
//     </div>
// }
// ?puedes usar unicode emojis
// function Greeting({ nombre }) {
//     const married = false
//     return <h1>{married ? 'estoy casado 🎁' : 'no estoy casado ❄️'}</h1>
// }
