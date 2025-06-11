import React, { useState } from "react";
import logo from "../../../assets/Logs/creative.png";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { NavbarData, EspNavbarData } from "./NavbarData";
import { Link } from "react-scroll";
import { FaFileDownload, FaMailBulk } from "react-icons/fa";
import LanguagesSwitcher from "../../Switchers/LanguajesCyan.jsx";
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
        <header>
          <nav className="fixed top-0 w-full z-40 bg-amber-600/80">
            <div className="container sm:py-3 xl:py-5">
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
                          className="lg:px-2 sm:max-w-[120px] lg:max-w-[150px] xl:ml-5 xl:max-w-[200px]"
                        />
                        <p className="text-orange-100 pl-6 pt-1 -mb-2 text-xs">
                          {language === "en"
                            ? 'You are in "Designs"'
                            : 'Estás en "Diseños"'}
                            <span title=
                            {language === "en"
                              ? 'go to Presentation'
                              : 'Ir a la Presentación'}
                            className="bg-purple-500/50 text-white rounded-full ml-1 px-2 hover:bg-purple-900">
                            {language === "en"
                            ? 'Choose again'
                            : 'Volver a elegir'}
                            </span>
                        </p>
                      </div>
                    </a>
                  </div>
                  {/* Button close and menu */}
                  <div className="flex items-center gap-5 lg:hidden">
                    <button
                      onClick={() => setOpen(!open)}
                      className="block lg:hidden text-[40px] outline-none text-cyan-500"
                    >
                      {open ? <RiCloseFill /> : <RiMenu3Fill />}
                    </button>
                  </div>
                  {/* Desktop screen */}
                  <div className="hidden lg:block">
                    <ul className="list-none flex space-x-3 items-end right-0 w-full cursor-pointer">
                      {language === "en"
                        ? NavbarData.map((e, key) => (
                            <li key={key}>
                              <Link
                                to={e.link}
                                smooth={true}
                                duration={500}
                                className="inline-block px-1.5 lg:text-sm xl:text-base font-medium uppercase leading-9 tracking-[2px] text-white hover:text-cyan-500"
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
                                className="inline-block px-1.5 lg:text-sm xl:text-base font-medium uppercase leading-9 tracking-[2px] text-white hover:text-cyan-500"
                              >
                                {e.name}
                              </Link>
                            </li>
                          ))}
                          <div className="lg:pl-10 xl:pl-3 lg:mr-3 xl:mr-2">
                        <a
                          href={"#Free"}
        
                          className="btn btn-theme2 animate-pulse shadow-md shadow-white"
                          title="Free"
                        >
                          <FaFileDownload className="inline-block w-6 h-6 px-0 my-1 mr-1" />
                          GRATIS
                        </a>
                      </div>
                      <div className="lg:pl-10 xl:pl-3 lg:mr-4 xl:mr-2">
                        <a
                          href={"#Contact"}
        
                          className="btn btn-whapp  shadow-md shadow-white"
                          title="Contact"
                        >
                          <FaMailBulk className="inline-block w-6 h-6 px-0 my-1" />
                        </a>
                      </div>
                      
                      <div className="lg:pl-4 xl:px-2 rounded-full max-w-full">
                        <LanguagesSwitcher className="bg-white" />
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Mobile screen */}
              <div className={`lg:hidden ${open ? "" : "hidden"}`}>
                <div className="mt-4">
                  <LanguagesSwitcher 
                  />
                </div>
                <div className="pt-5 ml-5">
                  <ul>
                    {language === "en"
                      ? NavbarData.map((e, key) => (
                          <li key={key}>
                            <Link
                              to={e.link}
                              smooth={true}
                              duration={500}
                              onClick={closeMenu}
                              className="inline-block px-1.5 text-base font-medium uppercase leading-9 tracking-[2px] hover:text-cyan-500"
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
                              className="inline-block px-1.5 text-base font-medium uppercase leading-9 tracking-[2px] hover:text-cyan-500"
                            >
                              {e.name}
                            </Link>
                          </li>
                        ))}
                    <a
                      href={"#Contact"}
                      
                      className="btn btn-whapp  text-base w-[170px] shadow-md shadow-white"
                      title="Contact"
                    >
                      <FaMailBulk className="inline-block w-6 h-6 px-0 my-1 mr-2" />
                      Contact
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>
        {/*----- End Navbar -----*/}
      </React.Fragment>
    </>
  );
};

export default Navbar;
