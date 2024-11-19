'use client'


import Button from "./Button";

const Slider = () => {

  const funcion = () => {
    console.log("Hola mundoooo")
  }

  return (
    <div
      className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] rounded-lg overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: "url('https://via.placeholder.com/1200x800')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      <div className="relative z-10 text-center text-white p-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">Gran Título</h1>
        <p className="text-lg sm:text-2xl md:text-3xl mb-6">Este es el subtítulo del slider</p>
        <Button text="Ver más" funcion={funcion} />
      </div>
    </div>
  );
};

export default Slider;
