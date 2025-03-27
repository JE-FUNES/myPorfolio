import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Lucide } from "../../../utils/index.js";
import { FaGithub } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const GitHubComponent = () => {
  const language = useSelector((state) => state.language);
  const [path, setPath] = useState(""); // Ruta actual dentro del repo
  const [files, setFiles] = useState([]);
  const [code, setCode] = useState(null); // Código del archivo seleccionado
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/repos/JE-FUNES/myPorfolio/contents/${path}`, {
      headers: {
        Authorization: process.env.REACT_APP_GITHUB_TOKEN
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setFiles(data);
        } else {
          console.error("Error al obtener archivos:", data);
          setFiles([]); // Asegura que `files` siempre sea un array
        }
        setCode(null); // Limpiar código al cambiar de carpeta
      })
      .catch((err) => console.error("Error:", err))
      .finally(() => setLoading(false));
  }, [path]);

  const fetchFileContent = (fileUrl) => {
    setLoading(true);
    fetch(fileUrl)
      .then((res) => res.json())
      .then((data) => {
        const decodedContent = atob(data.content);
        setCode(decodedContent);
      })
      .catch((err) => console.error("Error cargando archivo:", err))
      .finally(() => setLoading(false));
  };

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 820);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 820);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <React.Fragment>
      <section className=" bg-white pt-20 pb-10" id="Github">
        <div className="container lg:py-20 min-h-screen">
          <h3 className="text-black flex justify-center">
            <FaGithub className="sm:w-10 sm:h-10 lg:w-8 lg:h-8 mr-2 text-purple-500" />
            {language === "en"
              ? "GITHUB REPOSITORY FILES"
              : "ARCHIVOS DEL REPOSITORIO GITHUB"}
          </h3>
          <h2 className="text-black flex justify-center sm:ml-8 lg:ml-0">
            {language === "en"
              ? "Code inserted from the Github API, using react-syntax-highlighter"
              : "Código insertado desde la API de Github, mediante react-syntax-highlighter"}
          </h2>
          <div className="grid lg:grid-cols-12 grid-cols-1 items-center bg-slate-100 h-full sm:mt-5 lg:mt-10 pb-10">
            {/* Begin First Column */}
            <div className="lg:col-span-2  w-full h-full text-left px-5 mt-12 pt-5 border-r-2 border-purple-700">
              <h2 className="text-purple-800 flex justify-center font-semibold mb-2 sm:-mt-5 lg:mt-0">
                {language === "en" ? "FILES & FOLDERS" : "ARCHIVOS & CARPETAS"}
              </h2>
              {loading && (
                <p>{language === "en" ? "LOADING..." : "CARGANDO..."}</p>
              )}
              <ul>
                <li>
                  {path && (
                    <button
                      onClick={() => {
                        setPath(path.split("/").slice(0, -1).join("/"));
                        setSelectedFile(null);
                      }}
                      className="flex flex-nowrap text-purple-800 my-5"
                    >
                      <Lucide
                        icon="ArrowLeft"
                        className="bg-purple-800 text-white w-6 h-6 p-1 mr-1"
                      />
                      {language === "en" ? "Return" : "Volver"}
                    </button>
                  )}
                </li>
                {files.map((file) => (
                  <li
                    key={file.path}
                    className="cursor-pointer hover:text-fuchsia-300 p-2"
                  >
                    {file.type === "dir" ? (
                      <button
                        onClick={() => setPath(file.path)}
                        className="hover:text-fuchsia-500 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700"
                      >
                        📁 {file.name}
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          fetchFileContent(file.url);
                          setSelectedFile(file);
                        }}
                        className={`hover:text-fuchsia-500 ${
                          selectedFile?.path === file.path
                            ? "bg-purple-500 text-white"
                            : ""
                        } `}
                      >
                        📄 {file.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            {/* Begin Second Column */}
            <div className="lg:col-span-10 py-2 top-0 items-start">
              {selectedFile && (
                <h3 className="sm:text-sm lg:text-base text-black mb-3 ml-5">
                  {language === "en"
                    ? "Selected File: "
                    : "Archivo seleccionado: "}

                  <span className="text-lg font-bold text-purple-700">
                    {selectedFile.path}
                  </span>
                </h3>
              )}
              {!isLargeScreen && (
    <p className="bg-fuchsia-500/80 text-center text-white rounded-lg mb-2 sm:p-2 lg:ml-10">
      {language === "en"
        ? "For better readability, we recommend viewing the code on a desktop screen."
        : "Para una mejor visualización, se recomienda ver el código en una pantalla de ordenador."}
    </p>
  )}
              {code ? (
                <SyntaxHighlighter
                  language="javascript"
                  style={oneDark}
                  className="overflow-auto"
                >
                  {code}
                </SyntaxHighlighter>
              ) : (
                <>
                  <p className="text-base text-purple-900/40 italic sm:ml-5 lg:ml-10 mt-1">
                    {isLargeScreen ? (
                      <Lucide icon="ArrowLeft" />
                    ) : (
                      <Lucide icon="ArrowUp" />
                    )}
                    {language === "en"
                      ? "Select a file to view its contents"
                      : " Selecciona un archivo para ver su contenido"}
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="flex justify-end space-x-2 mt-4">
            <a href="#Contact">
              <div className="btn btn-yellow rounded-full font-bold flex justify-center items-center animate-pulse cursor-pointer px-4 py-2">
                <Lucide icon="ArrowDown" />
                {language === "en" ? "Go on" : "Sigamos"}
              </div>
            </a>
            <a href="#Curriculum">
              <div className="btn-white rounded-full font-bold flex justify-center items-center cursor-pointer ml-2">
                <Lucide icon="ArrowUp" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default GitHubComponent;
