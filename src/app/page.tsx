'use client'

import Slider from "./componentes/slider"
import Button from "./componentes/Button"
import CardInternal from "./componentes/CardInternal"
import CardLayour from "./componentes/CardLayout"
import CardTwo from "./componentes/CardTwo"

export default function Home() {
  const funcion = () => {
    console.log("Funciona")
  }
  return (
    <>
    <Slider/>
    <CardTwo/>
    </>
  );

}