import React, { useState } from "react";
import logo from "../../../assets/Logs/logo-jefa-transp-rojo-fondo-negro.png";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { NavbarData, EspNavbarData } from "./NavbarData";
import { Link } from "react-scroll";
import { FaWhatsapp } from "react-icons/fa";
import LanguagesSwitcher from "../../Switchers/LanguajesRed.jsx";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const language = useSelector((state) => state.language);

  const closeMenu = () => {
    setOpen(false); 
  };

  return (
    <>
      <React.Fragment>
        {/*----- Start Navbar -----*/}
        <footer className="bg-black border-t border-white border-opacity-10 sm:pb-4 lg:py-2 sm:h-content w-full fixed bottom-0 z-40">
          <nav className="">
            <div className="container sm:py-2 lg:py-1">
              <div className="flex items-center justify-between md:block">
                <div className="flex justify-between items-center w-full">
                  {/* Logo */}
                  <div className="z-50 relative">
                    <a href={"https://www.jefa-web.com.ar/"}>
                      <div className="flex flex-col items-center">
                        <img
                          src={logo}
                          alt="Web Developer"
                          title="Web Developer"
                          className="lg:px-2 sm:max-w-[100px] lg:max-w-[120px] sm:ml-2 xl:ml-5 xl:max-w-[170px]"
                        />
                        
                      </div>
                    </a>
                  </div>
                  {/* Button close and menu */}
                  <div className="flex items-center gap-5 lg:hidden">
                    <button
                      onClick={() => setOpen(!open)}
                      className="block lg:hidden text-[40px] outline-none text-red-500"
                    >
                      {open ? <RiCloseFill /> : <RiMenu3Fill />}
                    </button>
                  </div>
                  {/* Desktop screen */}
                  <div className="hidden lg:block">
                    <ul className="list-none flex space-x-1 items-end right-0 w-full cursor-pointer">
                    <a href={"https://www.jefa-web.com.ar/"}>
                      <li key="section">
                      <p className="text-red-500/80 p-2 text-sm mr-2 border-2 border-red-500/50 bg-slate-800 rounded-full">
                          {language === "en"
                            ? 'You are in "Mkt Agencies"'
                            : 'Estás en "Agencias de Mkt"'}
                            <span title=
                            {language === "en"
                              ? 'go to Presentation'
                              : 'Ir a la Presentación'}
                            className="bg-red-500/50 text-slate-100 rounded-full ml-1 px-2 hover:bg-red-900">
                            {language === "en"
                            ? 'Choose again'
                            : 'Volver a elegir'}
                            </span>
                        </p>
                      </li>
                      </a>
                      {language === "en"
                        ? NavbarData.map((e, key) => (
                            <li key={key}>
                              <Link
                                to={e.link}
                                smooth={true}
                                duration={500}
                                className="inline-block px-1.5 lg:text-sm xl:text-base mb-1 font-medium uppercase leading-9 tracking-[2px] text-slate-100 hover:text-red-500"
                              >
                                {e.name}
                              </Link>
                            </li>
                          ))
                        : EspNavbarData.map((e, key) => (
                            <li key={key}>
                              <Link
                                to={e.link}
                                smooth={true}
                                duration={500}
                                className="inline-block px-1.5 lg:text-sm xl:text-base mb-1 font-medium uppercase leading-9 tracking-[2px] text-slate-100 hover:text-red-500"
                              >
                                {e.name}
                              </Link>
                            </li>
                          ))}
                      <div className="lg:pl-10 xl:pl-3 lg:mr-4 xl:mr-2">
                        <a
                          href={"https://wa.me/+5493512737199"}
                          target="blank"
                          className="btn btn-whapp border-2 border-black shadow-md shadow-white"
                          title="Whatsapp"
                        >
                          <FaWhatsapp className="inline-block w-6 h-6 px-0 my-1" />
                        </a>
                      </div>
                      <div className="lg:pl-4 xl:px-2">
                        <LanguagesSwitcher />
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Mobile screen */}
              <div className={`ml-3 lg:hidden ${open ? "" : "hidden"}`}>
                <div className="mt-4">
                  <LanguagesSwitcher 
                  />
                </div>
                <div className="py-5 ml-2">
                  <ul>
                    {language === "en"
                      ? NavbarData.map((e, key) => (
                          <li key={key}>
                            <Link
                              to={e.link}
                              smooth={true}
                              duration={500}
                              onClick={closeMenu}
                              className="inline-block px-1.5 text-base font-medium uppercase leading-9 tracking-[2px] text-slate-100 hover:text-orange-600"
                            >
                              {e.name}
                            </Link>
                          </li>
                        ))
                      : EspNavbarData.map((e, key) => (
                          <li key={key}>
                            <Link
                              to={e.link}
                              smooth={true}
                              duration={500}
                              onClick={closeMenu}
                              className="inline-block px-1.5 text-base font-medium uppercase leading-9 tracking-[2px] text-slate-100 hover:text-orange-600"
                            >
                              {e.name}
                            </Link>
                          </li>
                        ))}
                    <a
                      href={"https://wa.me/+5493512737199"}
                      target="blank"
                      className="py-0 text-base w-[160px] shadow-md  mt-3 text-green-400"
                      title="Whatsapp"
                    >
                      <FaWhatsapp className="btn btn-whapp inline-block shadow-white w-8 h-8 px-0 my-1 mr-2" />
                      WHATSAPP
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </footer>
        {/*----- End Navbar -----*/}
      </React.Fragment>
    </>
  );
};

export default Navbar;
