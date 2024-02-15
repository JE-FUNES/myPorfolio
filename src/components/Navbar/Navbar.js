import React, { useState } from 'react'
import logo from '../../assets/Image/logo-jefa.png'
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { NavbarData } from './NavbarData'
import Scrollspy from "react-scrollspy"
import { FaWhatsapp } from "react-icons/fa";


const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <React.Fragment>
            {/*----- Start Navbar -----*/}
            <header>
                <nav className="fixed top-0 w-full z-50 bg-white">
                    <div className="container lg:py-3 py-5">
                        <div className="flex items-center justify-between md:block">
                            <div className="flex justify-between items-center w-full">
                                {/* Logo */}
                                <div className="z-50 relative">
                                    <a href='#home'>
                                        <img src={logo} alt="Web Developer" title='Web Developer' style={{width: 200}}/>
                                    </a>
                                </div>
                                {/* Button close and menu */}
                                <div className="flex items-center gap-5 lg:hidden">
                                    <button onClick={() => setOpen(!open)} className="block lg:hidden text-[32px] outline-none">
                                        {
                                            open ? <RiCloseFill /> :
                                                <RiMenu3Fill />
                                        }
                                    </button>
                                </div>
                                {/* Desktop sreen */}
                                <div className="hidden lg:block">
                                    <Scrollspy items={NavbarData.map((e) => e.link)} currentClassName="active" className="list-none flex space-x-4 items-end right-0 w-full pb-0">
                                        {
                                            NavbarData.map((e, key) => {
                                                return (
                                                    <li key={key}>
                                                        <a href={"#" + e.link} className="inline-block px-1.5 text-base font-medium uppercase leading-9 tracking-[2px] hover:text-pink-500">{e.name}</a>
                                                    </li>
                                                )
                                            })
                                        }
                                        <a href={"https://wa.me/+5493512737199"} target='blank' className="btn btn-whapp" title='Whatsapp'>
                                            <FaWhatsapp className="inline-block w-6 h-6 px-0" /></a>
                                
                                    </Scrollspy>
                                </div>
                            </div>
                        </div>
                        {/* Mobile sreen */}
                        <div className={`lg:hidden  ${open ? '' : 'hidden'}`}>
                            <div className="pt-5">
                                <Scrollspy items={NavbarData.map((e) => e.link)} currentClassName="active">
                                    {
                                        NavbarData.map((e, key) => {
                                            return (
                                                <li key={key}>
                                                    <a href={"#" + e.link} className="inline-block px-1.5 text-base font-medium uppercase leading-9 tracking-[2px] hover:text-orange-600">{e.name}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </Scrollspy>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            {/*----- End Navbar -----*/}
        </React.Fragment>
    )
}

export default Navbar