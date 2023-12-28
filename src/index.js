import React from 'react'
import ReactDOM from 'react-dom/client'
import { Greeting } from './Greeting'
import Usuario, { Producto } from "./Usercard";

import { Cancion } from "./Cancion";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { From } from "./Form";
import { Posts } from "./Posts";
import Calendario from "./Calendar";
import { Users } from "./User";
import { Counter } from "./Counter";
import { Mensaje } from "./Input";
import { UseEffectPractica } from "./UseEffectPractica";
// const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(document.getElementById('root'))
const precio = 10
// const handleChange = (e) => { console.log(e.target.value); }

root.render(
    <>
        <UseEffectPractica />
        <Mensaje />
        <hr />
        <h3>contador  en componente aparte:</h3>
        <Counter />
        <TaskCard />
        <Saludar />
        {/* <Button text='Ok' /> */}
        {/* una manera de ingresar */}

        {/* <input onChange={handleChange} /> */}
        <From />
        <Posts />
        <Calendario />
        <Users />



        {/* {
            user.map((user, i) => {
                return (
                    <div className='nameUsers' key={i}>
                        <h1>{user.name}</h1>
                        <img src={user.image} alt="" />
                    </div>
                )
            })
        } */}
        {/* <Button text='click me' />
        <Button text='Pay' />
        <Button text='' /> */}

        {/* <Greeting nombre={"eleazar"} />  */}
        {/* <Greeting />
        <Usuario />
        <Producto precio={precio} />
        <Producto />
        <hr />
        <Cancion
            titulo="Medley Un movimiento sobre natural"
            autor="New wine"
            tempo="150 bpm"
            tono="Am"
            link="www.youtube.com/new_wine"
            secuencia={true}
        /> */}
    </>

)

// datos
// const user = [
//     {
//         id: 1,
//         name: "Pepe",
//         image: "https://robohash.org/user9",
//     },
//     {
//         id: 2,
//         name: "Teodoro",
//         image: "https://robohash.org/user10",
//     },
//     {
//         id: 3,
//         name: "Carlos",
//         image: "https://robohash.org/user31",
//     },
// ];