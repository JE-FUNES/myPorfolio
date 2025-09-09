import React from "react";
import { Links } from "./LinksData.js";
import Logo from "../../assets/badangel/archivos_badangel/6.png";

const LinktreeBadAngel = () => {
  return (
    <React.Fragment>
      <div className="w-screen">
        <div className="min-h-screen flex flex-col items-center justify-center bg-black px-6 py-6 text-center">
          {/* Logo principal */}
          <div className="w-48 h-full bg-black/20 shadow-lg flex items-center justify-center">
            <img src={Logo} alt="Bad Angel" className="" />
          </div>
          <p className="text-2xl font-thin text-gray-300 -mt-12 mb-10">BAD ANGEL</p>
          <h1 className="text-xl font-medium text-gray-100 mt-6 mb-10">
            DONDE 
            <p>
              LO DIVINO Y LO PERVERSO 
              </p>
            CONVERGEN
          </h1>

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

export default LinktreeBadAngel;
