import React, { useState } from "react";


const Contact = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);


    fetch("https://formspree.io/f/xanjonjb", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setSuccess(true);
          form.reset();
        } else {
          alert("Error al enviar el formulario.");
        }
      })
      .catch((error) => {
        console.error("Error de red o servidor", error);
        alert("Hubo un problema al conectar con el servidor.");
      });
  };

  

  return (
    <React.Fragment>
      {/*----- Start Contact -----*/}
      
        <div className="w-screen">
        
          <div className="min-h-screen flex flex-col items-center justify-center bg-purple-950 px-6 py-6 text-center">
            <h3 className="text-slate-100 flex justify-center mt-40">
              CONTACTAME
            </h3>
            <h4 className="text-slate-100 flex justify-center text-lg italic sm:mt-5 sm:ml-4 lg:ml-0 lg:mb-16">
             y con gusto resuelvo tus dudas.
            </h4>

            {/* Formulario de contacto */}

            <div className="container mt-10 p-5 mx-auto border-2 border-gray-500 w-1/2 text-white font-semibold text-sm">
              {success ? (
                <p className="text-cyan-200 font-semibold text-lg text-center">
                  ¡Gracias por tu mensaje! Te responderé pronto.
                </p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-12 gap-4">
                    {/* Columna izquierda */}
                    <div className="col-span-12 md:col-span-6 flex flex-col gap-4">
                      <label className="flex flex-col">
                        Nombre:
                        <input
                          type="text"
                          name="name"
                          className="border-2 border-gray-500 bg-transparent p-1 mt-1"
                          required
                        />
                      </label>

                      <label className="flex flex-col">
                        Email:
                        <input
                          type="email"
                          name="email"
                          className="border-2 border-gray-500 bg-transparent p-1 mt-1"
                          required
                        />
                      </label>
                    </div>

                    {/* Columna derecha */}
                    <div className="col-span-12 md:col-span-6 flex flex-col gap-4">
                      <label className="flex flex-col h-full">
                        Mensaje:
                        <textarea
                          name="message"
                          className="border-2 border-gray-500 bg-transparent p-1 mt-1 h-28 resize-none"
                          required
                        />
                      </label>

                      <button
                        type="submit"
                        className="bg-white text-black font-bold py-2 px-4 mt-2 self-start"
                      >
                        Enviar
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Fin formulario */}

            
          
          </div>
        </div>
    
      {/*----- End Contact -----*/}
    </React.Fragment>
  );
};

export default Contact;
