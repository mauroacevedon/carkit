'use client'

const Button = ({ text , funcion}) => {
    return (
      <button
        onClick={funcion}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
      >
        {text}
      </button>
    );
  };
  
export default Button;
  