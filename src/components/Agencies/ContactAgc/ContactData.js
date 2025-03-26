import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

//---- Start Contact Data -----

const handlesendEmail = () => {
    window.open("mailto: juliafunesaragon@gmail.com");
    };

    // en mobile, phone debería ser un link para llamar

    const handleCall = () => {
        if (window.innerWidth < 900) {
          window.open("tel:+5493512737199");
        } else {
          alert("You can only call from a mobile device, thanks!");
        }
    };


export const ContactData = [
    {
        Bg_color: "bg-[#ffffff]",
        icon: <FaPhoneAlt/>,
        name: "PHONE",
        contact: "+54 9 351 2737 199",
        key: "phone",
        hoverTitle: "Call me",
        link: handleCall
    },
    {
        Bg_color: "bg-[#ffffff]",
        icon: <FaEnvelope/>,
        name: "MAIL",
        contact: "juliafunesaragon@gmail.com",
        key: "mail",
        hoverTitle: "Send me an email",
        link: handlesendEmail
    },
   
]

export const EspContactData = [
    {
        Bg_color: "bg-[#ffffff]",
        icon: <FaPhoneAlt/>,
        name: "CEL.",
        contact: "+54 9 351 2737 199",
        key: "phone",
        hoverTitle: "Llamame",
        link: handleCall
    },
    {
        Bg_color: "bg-[#ffffff]",
        icon: <FaEnvelope/>,
        name: "MAIL",
        contact: "juliafunesaragon@gmail.com",
        key: "mail",
        hoverTitle: "Enviame un email",
        link: handlesendEmail
    },
   
]