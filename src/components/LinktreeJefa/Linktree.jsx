import React from "react";

const links = [
  {
    label: "Portfolio + CV",
    url: "https://jefa-web.com.ar/#Portfolio",
  },
  {
    label: "Diseño Web para Agencias",
    url: "https://jefa-web.com.ar/#Agencias",
  },
  {
    label: "Web para Empresas y Comercios",
    url: "https://jefa-web.com.ar/#Empresas",
  },
  {
    label: "Recursos para Mujeres que Emprenden",
    url: "https://jefa-web.com.ar/#Recursos",
  },
  {
    label: "Cursos y Productos Recomendados",
    url: "https://hotmart.com/es?aff_link",
  },
];

export default function LinktreeJefa() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 to-white px-6 py-12 text-center">
      <img
        src="/tu-logo-o-avatar.png"
        alt="Jefa Web Logo"
        className="w-24 h-24 rounded-full shadow-md mb-4"
      />
      <h1 className="text-2xl font-bold text-gray-800 mb-1">Julia Funes</h1>
      <p className="text-sm text-gray-500 mb-6">
        Diseño Web + Recursos Digitales para Mujeres que Aprenden y Emprenden
      </p>

      <div className="w-full max-w-md flex flex-col gap-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-gray-300 hover:border-pink-500 text-gray-700 hover:text-pink-600 font-medium py-3 px-4 rounded-xl shadow-sm hover:shadow-md transition"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
