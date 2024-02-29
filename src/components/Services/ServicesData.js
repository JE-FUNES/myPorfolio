import { MdComputer } from "react-icons/md";
import { FiTriangle } from "react-icons/fi";
import { BsColumns, BsDistributeVertical, BsGlobe2 } from "react-icons/bs";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2"

//---- Start Services Data -----
export const ServicesData = [
    {
        Bg_color: "bg-[#c084fc]",
        key: "ebdesign",
        Logo: <HiOutlineDevicePhoneMobile />,
        Heding: "Web Design",
        Detail:
            "Design of Web Pages and Landing pages tailored to your Needs and Budget. Responsive design for all devices. Single page or multi-page design.",
    },
    {
        Bg_color: "bg-[#4ade80]",
        key: "development",
        Logo: <MdComputer />,
        Heding: "Development",
        Detail:
            "Development of Web Pages and Landing pages that comply with the required actions. JavaScript, React, HTML5, CSS3, Tailwind CSS, etc.",
    },
    {
        Bg_color: "bg-[#fb923c]", 
        key: "seo",
        Logo: <FiTriangle />,
        Heding: "SEO Marketing & Positioning",
        Detail:
            "The pages comply with Google standards, favoring natural positioning in the top positions of searches. Google Analytics, Google Search Console, Google Tag Manager.",
    },
    {
        Bg_color: "bg-[#f472b6]",
        key: "hosting",
        Logo: <BsColumns />,
        Heding: "Domain registration & Hosting",
        Detail:
            "If you don't have them, I take care of the hiring and start-up. If you already have them, I take care of the migration and start-up.",
    },
    {
        Bg_color: "bg-[#2dd4bf]",
        key: "security",
        Logo: <BsDistributeVertical />,
        Heding: "Security",
        Detail:
            "Security protocols for your website: SSL certificate, through which Google will know that your site is secure, so it will appear in searches.",
    },
    {
        Bg_color: "bg-[#fcd34d]",
        key: "ecommerce",
        Logo: <BsGlobe2 />,
        Heding: "E-commerce & Marketplaces",
        Detail:
            "Creation of online stores and integration with Mercado Libre, Tienda Nube, Amazon, eBay, etc. Payment gateways and shipping methods.",
    },
];
//---- End Services Data -----
