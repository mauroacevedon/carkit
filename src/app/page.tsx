'use client'

import Slider from "./componentes/slider"
import Button from "./componentes/Button"

export default function Home() {
  const funcion = () => {
    console.log("Hola MUNDO 22")
  }
  return (
    <>
    <Slider/>

    <Button text={"bOTOO2"} funcion={funcion}/>
    </>
  );

}