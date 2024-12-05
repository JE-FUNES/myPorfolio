import React, { useState } from "react";

const Calculadora = () => {
  // Estados para las entradas y resultados
  const [alto, setAlto] = useState("");
  const [ancho, setAncho] = useState("");
  const [resultado, setResultado] = useState("Total M² : 0");
  const [mensajeCarrito, setMensajeCarrito] = useState("");

  const calcular = () => {
    // Validar entradas
    const altoNum = parseFloat(alto.replace(",", ".")) || 0;
    const anchoNum = parseFloat(ancho.replace(",", ".")) || 0;

    if (altoNum <= 0 || anchoNum <= 0) {
      alert("Por favor, ingresa valores válidos para el alto y el ancho.");
      return;
    }

    // Calcular metros cuadrados
    let metrosCuadrados = Math.ceil(altoNum * anchoNum);

    // Asegurarse de que el mínimo sea 2 m²
    if (metrosCuadrados < 2) {
      metrosCuadrados = 2;
    }

    // Calcular el costo total (si es necesario)
    const valorTotal = metrosCuadrados * 8500;

    // Actualizar estados
    setResultado(`Metros cuadrados: ${metrosCuadrados}`);
    setMensajeCarrito(
      `Cambia la cantidad a ${metrosCuadrados} unidades para ver el valor de lo que necesitas.`
    );
  };

  return (
    <div className="mt-5 border-2 border-white mx-5 p-5">
      <div>
        <h2 className="text-white text-3xl font-bold ml-3 my-4 flex justify-center">
          Calculadora de M²
        </h2>
      </div>
  
      {/* Contenedor de Alto */}
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between w-full mb-5">
          <label htmlFor="alto" className="ml-1 font-semibold text-white">
            Alto (m):
          </label>
          <input
            type="number"
            id="alto"
            min="0"
            step="0.01"
            className="h-10 pl-2 w-1/2 rounded-md"
            placeholder="Ingresa el alto"
            value={alto}
            onChange={(e) => setAlto(e.target.value)}
          />
        </div>
  
        {/* Contenedor de Ancho */}
        <div className="flex items-center justify-between w-full">
          <label htmlFor="ancho" className="ml-1 font-semibold text-white">
            Ancho (m):
          </label>
          <input
            type="number"
            id="ancho"
            min="0"
            step="0.01"
            className="h-10 pl-2 w-1/2 rounded-md"
            placeholder="Ingresa el ancho"
            value={ancho}
            onChange={(e) => setAncho(e.target.value)}
          />
        </div>
      </div>
  
      {/* Botón y resultados */}
      <div className="flex flex-col items-center mt-10">
        <button
          className="bg-orange-300 rounded-md w-40 h-12 font-semibold"
          onClick={calcular}
        >
          Calcular
        </button>
        <div
          id="resultado"
          className="result font-bold mt-5 text-2xl text-red-500"
        >
          {resultado}
        </div>
        <h5 id="carrito" className="cart text-white mt-2 text-lg">
          {mensajeCarrito}
        </h5>
      </div>
    </div>
  );
  
};

export default Calculadora;
