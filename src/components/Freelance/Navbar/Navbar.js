import React, { useState } from "react";
import logo from "../../../assets/Image/logo-jefa.png";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { NavbarData, EspNavbarData } from "./NavbarData";
import { Link } from "react-scroll";
import { FaWhatsapp } from "react-icons/fa";
import LanguagesSwitcher from "../../Switchers/Languages";
import { useSelector } from "react-redux";

const NavbarFree = () => {
  const [open, setOpen] = useState(false);
  const language = useSelector((state) => state.language);

  return (
    <React.Fragment>
      {/*----- Start Navbar -----*/}
      <header>
        <nav className="fixed top-0 w-full z-40 bg-white">
          <div className="container sm:py-3 xl:py-5">
            <div className="flex items-center justify-between md:block">
              <div className="flex justify-between items-center w-full">
                {/* Logo */}
                <div className="z-50 relative">
                <a href={`#${NavbarData[0].link}`}>
                    <div className="">
                      <img
                        src={logo}
                        alt="Web Developer"
                        title="Web Developer"
                        className="lg:px-2 sm:max-w-[120px] lg:max-w-[150px] xl:ml-5 xl:max-w-[200px]"
                      />
                    </div>
                  </a>
                </div>
                {/* Button close and menu */}
                <div className="flex items-center gap-5 lg:hidden">
                  <button
                    onClick={() => setOpen(!open)}
                    className="block lg:hidden text-[40px] outline-none text-fuchsia-500"
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
                              className="inline-block px-1.5 lg:text-sm xl:text-base font-medium uppercase leading-9 tracking-[2px] hover:text-pink-500"
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
                              className="inline-block px-1.5 lg:text-sm xl:text-base font-medium uppercase leading-9 tracking-[2px] hover:text-pink-500"
                            >
                              {e.name}
                            </Link>
                          </li>
                        ))}
                    <div className="lg:pl-10 xl:pl-3 lg:mr-4 xl:mr-2">
                      <a
                        href={"https://wa.me/+5493512737199"}
                        target="blank"
                        className="btn btn-whapp  shadow-md shadow-black"
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
            <div className={`lg:hidden ${open ? "" : "hidden"}`}>
            <div className="mt-4">
                    <LanguagesSwitcher />
                  </div>
              <div className="pt-5 ml-5">
                <ul>
                    {language === "en"
                    ?

                    (

                        NavbarData.map((e, key) => (
                            <li key={key}>
                      <Link
                        to={e.link}
                        smooth={true}
                        duration={500}
                        className="inline-block px-1.5 text-base font-medium uppercase leading-9 tracking-[2px] hover:text-orange-600"
                        >
                        {e.name}
                      </Link>
                    </li>
                  ))
                ) : (

                    EspNavbarData.map((e, key) => (
                        <li key={key}>
                  <Link
                    to={e.link}
                    smooth={true}
                    duration={500}
                    className="inline-block px-1.5 text-base font-medium uppercase leading-9 tracking-[2px] hover:text-orange-600"
                    >
                    {e.name}
                  </Link>
                </li>
              ))
            )
            }
                  <a
                    href={"https://wa.me/+5493512737199"}
                    target="blank"
                    className="btn btn-whapp  text-base w-[170px] shadow-md shadow-black"
                    title="Whatsapp"
                  >
                    <FaWhatsapp className="inline-block w-6 h-6 px-0 my-1 mr-2" />
                    WHATSAPP
                  </a>
                  
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/*----- End Navbar -----*/}
    </React.Fragment>
  );
};

export default NavbarFree;
