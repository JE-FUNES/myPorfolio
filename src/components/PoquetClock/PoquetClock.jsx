import React, { useEffect, useState } from "react";
import background from "../../assets/Image/reloj2.webp";

const PoquetClock = () => {
  const [isLit, setIsLit] = useState(false); // Estado para iluminación

  useEffect(() => {
    const actualizarReloj = () => {
      const ahora = new Date();
      const horas = ahora.getHours() % 12;
      const minutos = ahora.getMinutes();
      const segundos = ahora.getSeconds();

      const gradoHora = horas * 30 + minutos / 2;
      const gradoMinuto = minutos * 6;
      const gradoSegundo = segundos * 6;

      document.querySelector(
        ".hora"
      ).style.transform = `rotate(${gradoHora}deg)`;
      document.querySelector(
        ".minuto"
      ).style.transform = `rotate(${gradoMinuto}deg)`;
      document.querySelector(
        ".segundo"
      ).style.transform = `rotate(${gradoSegundo}deg)`;
    };

    actualizarReloj();
    const intervalo = setInterval(actualizarReloj, 1000);

    return () => clearInterval(intervalo); // Limpiar el intervalo al desmontar
  }, []);

  return (
    <div
      className="relative flex items-center justify-center h-screen w-full bg-no-repeat bg-center bg-contain"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Contenedor del reloj */}
      <div
        className={`absolute w-[50%] max-w-[300px] lg:mt-28 lg:ml-5 aspect-square rounded-full border-[10px] border-gray-500/50 shadow-lg transition-all duration-300 
                    ${
                      isLit
                        ? "shadow-[0_0_40px_10px_rgba(0,255,255,0.8)]"
                        : "shadow-cyan-500/30"
                    }`}
      >
        {/* Marco */}
        <div className="absolute w-full h-full rounded-full border-[5px] border-gray-300/50"></div>
  
        {/* Esfera */}
        <div className="absolute flex items-center justify-center w-full h-full">
          {/* Manecillas */}
          <div className="absolute bottom-1/2 left-1/2 w-[12px] h-[50%] bg-black transform -translate-x-1/2 -translate-y-[10%] origin-bottom rounded-md hora"></div>
          <div className="absolute bottom-1/2 left-1/2 w-[12px] h-[60%] bg-black transform -translate-x-1/2 -translate-y-[10%] origin-bottom rounded-md minuto"></div>
          <div className="absolute bottom-1/2 left-1/2 w-[4px] h-[70%] bg-red-500 transform -translate-x-1/2 -translate-y-[10%] origin-bottom rounded-md segundo"></div>
  
          {/* Centro */}
          <div className="absolute w-4 h-4 bg-gray-200 rounded-full border border-gray-700"></div>
        </div>
      </div>
  
      {/* Botón para iluminar */}
      <button
        className="absolute bottom-52 mb-2 ml-4 rounded-full px-4 py-1 font-semibold text-gray-900 text-xl bg-fuchsia-400 shadow-md transition-all duration-200 hover:bg-cyan-300"
        onClick={() => setIsLit(!isLit)}
      >
        I
      </button>
    </div>
  );
  
};

export default PoquetClock;
