import React from 'react'
import ReactDOM from 'react-dom/client'
import { Greeting } from './Greeting'
import Usuario, { Producto } from "./Usercard";

import { Cancion } from "./Cancion";
import { Button } from "./Button";


// const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(document.getElementById('root'))
const precio = 10
root.render(
    <>
        <Button text='click me' />
        <Button text='Pay' />
        <Button text='' />
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