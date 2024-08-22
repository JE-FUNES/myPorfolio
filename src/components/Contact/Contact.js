import React, { useState } from "react";
import { ContactData } from "./ContactData";
import { submitContactForm } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import contact_bg from "../../assets/Image/contact-bg.png";


const Contact = () => {
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    likedPage: 4, // Valor por defecto de 4 estrellas
    reason: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "likedPage") {
      setFormData({
        ...formData,
        [name]: Number(value),
      });
    } else {
      if (name === "name" && value.length > 30) {
        return;
      }
      if (name === "reason" && value.length > 200) {
        return;
      }
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    // Validación de errores
    const newErrors = { ...errors };
    if (name === "name" && value.trim() === "") {
      newErrors[name] = "Name is required";
    } else {
      delete newErrors[name];
    }
    setErrors(newErrors);
  };

  const handleStarClick = (rating) => {
    setFormData({
      ...formData,
      likedPage: rating,
    });
  };

  const handleFormSubmit = () => {
    dispatch(submitContactForm(formData));
    alert("Form Send!");
    navigate("/home");
  };

  const handleCalendar = () => {
    // Especifica el tamaño y otras opciones del pop-up
    const width = 800;
    const height = 500;
    const left = (window.innerWidth - width) / 2;
    const top = 180;

    const options = `width=${width},height=${height},toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,left=${left},top=${top}`;

    // Abre el pop-up
    window.open(
      "https://calendar.app.google/VjrtmJCxjv8H4Rfo6",
      "_blank",
      options
    );
  };

  return (
    <React.Fragment>
      {/*----- Start Contact -----*/}
      <section
        className="pt-24 pb-20 bg-slate-900 bg-bg-effect-2 bg-no-repeat bg-cover bg-bottom h-full"
        id="Contact"
      >
        <h3 className="text-slate-100 flex justify-center">CONTACT ME</h3>
        <div className="container pt-24 pb-24  mt-1 justify-center">
          <div className="grid grid-cols-12">
            {/* Start Contact form  */}
            <div className="col-span-12 lg:col-span-6 ">
              <div className="lg:max-w-[410px] w-full lg:ml-auto pt-[50px] lg:pt-0">
                <div className="pb-10">
                  <img
                    className="w-full border"
                    src={contact_bg}
                    title="This is me..."
                    alt="Me"
                  />
                </div>
                
              </div>
            </div>
            {/* End Contact form */}
            {/* Start Contact */}
            <div className="col-span-12 lg:col-span-6 flex">
              <div className="lg:max-w-[410px] w-full lg:ml-5 pt-[50px] lg:pt-0">
              <ul>
                  {ContactData.map((e, key) => {
                    return (
                      <li className="relative flex mb-6 border" key={e.key}>
                        <div
                          className={`inline-flex items-center justify-center text-2xl h-14 w-14 ${e.Bg_color}`}
                        >
                          {e.icon}
                        </div>
                        <div className="flex-1 pl-4">
                          <h5
                            className="mx-2 my-3 text-sm font-normal uppercase tracking-wider text-slate-300 cursor-pointer"
                            Title={e.hoverTitle}
                            onClick={e.link}
                          >
                            {e.name}
                          </h5>
                          <p
                            className="mx-2 my-3 font-medium md:text-xl text-lg text-white max-w-[250px] cursor-pointer"
                            Title={e.hoverTitle}
                            onClick={e.link}
                          >
                            {e.contact}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="border px-5 py-11 justify-items-center align-center">
                  <h6
                    className="text-[32px] font-semibold text-purple-50 text-center hover:text-yellow-500 hover:font-bold cursor-pointer"
                    onClick={handleCalendar}
                  >
                    SCHEDULE A MEETING
                  </h6>
                </div>
                  
              </div>
            </div>
            {/* End Contact */}
          </div>
        </div>
      </section>
      {/*----- End Contact -----*/}
    </React.Fragment>
  );
};

export default Contact;
