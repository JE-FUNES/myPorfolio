import React from 'react'
import { FooterData } from './FooterData'
import { useNavigate } from 'react-router-dom'
import logo from"../../../assets/Image/firmaEmail.png"

const FooterAgc = () => {

    const navigate = useNavigate();

    const handleContactList = () => {
        navigate("/contactList");
      };
    return (
        <React.Fragment>
            {/*----- Start Footer -----*/}
            <footer className="bg-slate-900 border-t border-white border-opacity-10 py-4">
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 md:col-span-6 flex pb-3 md:pb-0">
                            <div className="flex justify-center items-center md:justify-start w-full">
                                {
                                    FooterData.map((e, key) => {
                                        return (
                                            <div key={e.key}>
                                            <a href={e.link} target='blank' className="text-white text-opacity-90 hover:text-pink-500 mr-5 text-base cursor-pointer" title={e.name}>{e.icon} </a>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 text-center md:text-right">
                            
                                <img 
                                src={logo} 
                                alt="Julia Esther Funes Aragón"
                                title="Web Developer"
                                className="lg:px-2 sm:max-w-[120px] lg:max-w-[180px] xl:ml-5 xl:max-w-[250px]"
                                />
                                 
                            
                        </div>
                    </div>
                </div>
            </footer>
            {/*----- End Footer -----*/}
        </React.Fragment>
    )
}

export default FooterAgc
