import React, { useState } from "react";

const Calculadora = () => {
  // Estados para las entradas y resultados
  const [alto, setAlto] = useState("");
  const [ancho, setAncho] = useState("");
  const [resultado, setResultado] = useState("Total metros cuadrados: 0");
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
    <div className="mt-20 border-2 border-white justify-start ml-5 p-5">
      <h2 className="text-white text-3xl font-bold ml-3 my-4">Calculadora de M²</h2>
      <div className="">

      <label htmlFor="alto" className="ml-3 mr-2 font-semibold text-white">
        Alto (m):
      </label>
      <input
        type="number"
        id="alto"
        min="0"
        step="0.01"
        className="h-10 pl-2"
        placeholder="Ingresa el alto"
        value={alto}
        onChange={(e) => setAlto(e.target.value)}
        />
      <br />
      <label htmlFor="ancho" className="ml-3 mt-5 mr-2 font-semibold text-white">
        Ancho (m):
      </label>
      <input
        type="number"
        id="ancho"
        min="0"
        step="0.01"
        className="h-10 pl-2 mt-5"
        placeholder="Ingresa el ancho"
        value={ancho}
        onChange={(e) => setAncho(e.target.value)}
        />
      <br />
      <button
        className="mt-10 ml-3 bg-orange-300 rounded-md w-40 font-semibold"
        
        onClick={calcular}
        >
        Calcular
      </button>
          </div>
      <div
        id="resultado"
        
        className="result font-bold ml-3 mt-10 text-2xl text-red-500"
        
      >
        {resultado}
      </div>
      <h5 id="carrito" className="cart text-white ml-3 text-lg">
        {mensajeCarrito}
      </h5>
    </div>
  );
};

export default Calculadora;
