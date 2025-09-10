import React from "react";
import { Links } from "../LinktreeBadAngel/LinksData";
import Logo from "../../assets/badangel/archivos_badangel/6.png";

const EnConstruccion = () => {
  return (
    <React.Fragment>
      <div className="w-screen">
        <div className="min-h-screen flex flex-col items-center justify-center bg-black px-6 py-6 text-center">
          {/* Logo principal */}
          <div className="w-48 h-full bg-black/20 shadow-lg flex items-center justify-center">
            <img src={Logo} alt="Bad Angel" className="" />
          </div>
          <p className="text-2xl font-thin text-gray-300 -mt-12 mb-10">BADD ANGEL</p>
          <h1 className="text-xl font-medium text-red-500 mt-5 mb-3">
            STORE 
            <p>
              EN CONSTRUCCIÓN. 
              </p>
          </h1>
            <h2 className="text-lg font-medium text-gray-100 mt-1 mb-9">
              Volvé pronto! Inauguramos 17/09/25
              </h2>

          {/* Botones */}
          <div className="w-full max-w-md flex flex-col gap-4 mt-10">
            {Links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-${link.background} border border-gray-300 hover:border-red-500 text-white hover:text-red-500 font-medium py-3 px-4 rounded-xl shadow-sm hover:shadow-md transition`}
              >
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl">{link.img}</span>
                  <h4 className="font-bold text-lg">{link.title}</h4>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EnConstruccion;
