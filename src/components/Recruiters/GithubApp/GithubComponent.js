import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Lucide } from "../../../utils/index.js";
import { FaGithub } from "react-icons/fa";

const GitHubComponent = () => {
  const language = useSelector((state) => state.language);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/repos/JE-FUNES/myPorfolio/contents/
`)
      .then((res) => res.json())
      .then((data) => setFiles(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <React.Fragment>
      <section
        className=" bg-white pt-20"
        id="Github"
      >
        <div className="container py-20 min-h-screen">
              <h3 className="text-black flex justify-center">
                <FaGithub className="w-8 h-8 mr-2 text-purple-500" />
                {language === "en"
                  ? "GITHUB REPOSITORY FILES"
                  : "ARCHIVOS DEL REPOSITORIO GITHUB"}
              </h3>
              <h2 className="text-black flex justify-center">
                {language === "en"
                  ? "Code inserted from the Github API, using react-syntax-highlighter"
                  : "Código insertado desde la API de Github, mediante react-syntax-highlighter"}
              </h2>
          <div className="grid lg:grid-cols-12 grid-cols-1 items-center">
            {/* Begin First Column */}
            <div
              className="lg:col-span-2  w-full h-full text-left pl-12 mt-12 pt-5 bg-slate-50">
                <h2 className="text-purple-800 flex justify-center font-semibold mb-2">
                {language === "en"
                  ? "FILES"
                  : "ARCHIVOS"}
              </h2>
              <ul>
                {files.map((file) => (
                  <li key={file.name} className="cursor-pointer hover:text-fuchsia-300">
                  <a
                    href={file.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <Lucide icon="Circle" className="w-2 h-2 text-purple-700" />
                    <span>{file.name}</span>
                  </a>
                </li>
                
                ))}
              </ul>
            </div>
            {/* Begin Second Column */}
            <div
              className="lg:col-span-10 py-5 mb-12 lg:mb-0 bg-slate-900 min-h-[90%]">
                <h2 className="text-purple-100 flex justify-center font-semibold mb-2">
                {language === "en"
                  ? "FILES"
                  : "ARCHIVOS"}
              </h2>
                </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default GitHubComponent;
