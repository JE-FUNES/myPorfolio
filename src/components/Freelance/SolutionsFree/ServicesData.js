
import { FaHtml5, FaCreditCard, FaPaintbrush, FaWordpress, FaSellsy, FaGoogle, FaHeadSideCough, FaPaypal, FaInternetExplorer, FaGoogleWallet, FaArrowDownWideShort } from "react-icons/fa6";
import { FaJsSquare, FaAd, FaGooglePlusG, FaCartPlus } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { BsCartCheck } from "react-icons/bs";
import { MdBuild } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { RiCodeBoxLine } from "react-icons/ri";

import diseno from '../../../assets/Image/diseno-web.webp';
import desarrollo from '../../../assets/Image/desarrollo.webp';
import hosting from '../../../assets/Image/hosting.webp';
import seguridad from '../../../assets/Image/seguridad.webp';
import seotech from '../../../assets/Image/seotech.webp';
import comercio from '../../../assets/Image/comercio.webp';

//---- Start Services Data -----
export const ServicesData = [
    {
        delay: 7,
        delayM: 3,
        Bg_color: "bg-[#f8fafc]",
        key: "webdesign",
        Logo: <FaWordpress />,
        Heding: "Professional Web Design",
        imgDetail: diseno,
        Detail2: "Web design is the first impression users have of a brand. I focus on creating visually appealing and functional sites that reflect the client's identity. I use tools like Figma to create interactive prototypes before implementation. Each design is tailored to the client's brand aesthetic and values, ensuring a seamless and engaging user experience (UX).",
        Detail3: "TECHNOLOGIES and PLATFORMS: HTML5, CSS3, and JavaScript for creating responsive interfaces. React.js for interactive and dynamic interfaces. Tailwind CSS for streamlined design and compatibility across all devices. WordPress and Wix for custom designs that meet the need for easy content management.",
        Detail:
            "Visually stunning sites aligned with your brand—and your client's—to maximize conversions and credibility.",
    },
    {
        delay: 8,
        delayM: 3,
        Bg_color: "bg-[#fef2f2]",
        key: "development",
        Logo: <FaJsSquare />,
        Heding: "Custom Web Development",
        imgDetail: desarrollo,
        Detail2: "Web development goes beyond design. The goal is not only for the site to look good, but also for it to function correctly. I implement custom solutions for clients who need dynamic pages, with integration into third-party systems or databases.",
        Detail3: "Technologies and platforms: React.js for interactive and dynamic applications. Node.js for backend development. PHP for WordPress customization and adaptation. PostgreSQL for database management. Express.js as a backend framework. Shopify, Tiendanube, etc. for custom e-commerce platforms. Integration with PayPal, MercadoPago, and Stripe for online payment solutions.",
        Detail:
            "Features tailored to your client's—and your agency's—needs, ensuring scalability and optimal performance.",
    },
    {
        delay: 9,
        delayM: 0,
        Bg_color: "bg-[#f7fee7]", 
        key: "seo",
        Logo: <FaGoogle />,
        Heding: "Technical SEO and Tracking Setup",
        imgDetail: seotech,
        Detail2: "I focus on optimizing websites for search engines, ensuring they rank well. I manage the configuration of meta tags, pixels, and tools needed to improve the measurement and performance of advertising campaigns.",
        Detail3: "Technologies and platforms: Google Tag Manager for managing tags and improving conversion tracking. Google Search Console for monitoring site performance and fixing errors. Meta Pixel for tracking user activity on the website. Meta tags for on-page SEO optimization.",
        Detail:
            "Optimization with meta tags, pixels, Google Tag Manager, and Search Console for measurement and improved performance.",
    },
    {
        delay: 10,
        delayM: 0,
        Bg_color: "bg-[#ecfeff]",
        key: "hosting",
        Logo: <FaArrowDownWideShort />,
        Heding: "Domain and Hosting Management",
        imgDetail: hosting,
        Detail2: "Custom domain registration and setup of reliable, fast, and secure hosting servers. I also handle specialized hosting solutions for platforms like Wix and WordPress, as well as dedicated servers for larger projects.",
        Detail3: "Technologies and platforms: Domain registration through platforms such as Nic.ar, GoDaddy, donWeb, Google Domains, and more. CPanel for hosting and database management. Amazon Web Services (AWS) and dedicated servers. Bluehost and HostGator for hosting on easy-to-access platforms like WordPress.",
        Detail:
            "Reliable infrastructure to ensure speed, stability, and uninterrupted availability.",
    },
    {
        delay: 11,
        delayM: 0,
        Bg_color: "bg-[#ecfeff]",
        key: "security",
        Logo: <FaHeadSideCough />,
        Heding: "Data Protection and SSL Certificates",
        imgDetail: seguridad,
        Detail2: "Data protection is essential to maintaining your customers' trust. I set up SSL certificates to ensure all site data is encrypted and protected.",
        Detail3: "Technologies and platforms: SSL Certificates from Let's Encrypt and Comodo to ensure site security. Implementation of HTTPS for encryption on all site pages.",
        Detail:
            "Security and trust with SSL encryption and best practices in data protection to avoid risks.",
    },
    {
        delay: 12,
        delayM: 0,
        Bg_color: "bg-[#fffbeb]",
        key: "ecommerce",
        Logo: <FaPaypal />,
        Heding: "Ecommerce and Online Sales Strategies",
        imgDetail: comercio,
        Detail2: "I offer my experience to provide comprehensive ecommerce solutions, from online store creation to payment system integration and inventory management. I set up both self-service ecommerce platforms—for quick solutions—and specialized marketplaces developed with code. I also manage accounts on national and international platforms, such as MercadoLibre, for example.",
        Detail3: "Technologies and platforms: Shopify and Tiendanube for custom online stores. WooCommerce on WordPress for e-commerce integrated with content management systems. MercadoPago, PayPal, and Stripe integration for online payments. Google Analytics for performance and sales analysis. Facebook Shops and Instagram Shopping for direct sales from social media.",
        Detail:"Conversion-optimized stores, integrated with secure payments and analytics tools.",
    },
];

export const EspServicesData = [
    {
        delay: 7,
        delayM: 3,
        Bg_color: "bg-[#f8fafc]",
        key: "webdesign",
        Logo: <FiMonitor />,
        Heding: "Sitio Web desde cero",
        
        Detail: "Creación de tu sitio web profesional o comercial, con diseño a medida, adaptable a móviles y orientado a resultados. Con o sin panel autogestionable.",

    },
    {
        delay: 8,
        delayM: 3,
        Bg_color: "bg-[#f8fafc]",
        key: "development",
        Logo: <BsCartCheck />,
        Heding: "Tiendas Online",
        
        Detail: "Diseño de ecommerce en plataformas como Tiendanube o Shopify. Gestión de productos, medios de pago y optimización de la experiencia de compra.",
    },
    
    {
        delay: 9,
        delayM: 0,
        Bg_color: "bg-[#f8fafc]", 
        key: "ecommerce1",
        Logo: <MdBuild />,
        Heding: "Rediseño y Optimización",
        
        Detail: "¿Tu web actual no da resultados? Me encargo de renovarla, mejorar su estética, rendimiento, indexación en Google y adaptación a móviles.",
    },
    
    {
        delay: 10,
        delayM: 0,
        Bg_color: "bg-[#f8fafc]", 
        key: "ecommerce2",
        Logo: <AiOutlineThunderbolt />,
        Heding: "Landing Pages que convierten",
        
        Detail: "Desarrollo de páginas de aterrizaje con estructura estratégica, enfocadas en objetivos específicos como ventas, contactos o campañas publicitarias.",
    },
    
    {
        delay: 11,
        delayM: 0,
        Bg_color: "bg-[#f8fafc]", 
        key: "landing",
        Logo: <RiCodeBoxLine />,
        Heding: "Soluciones Personalizadas",
        Detail: "Desarrollo de funcionalidades específicas para empresas más grandes: sistemas internos, intranet, flujos de trabajo y más. Hecho con React.js.",
    },  
   
    {
        delay: 12,
        delayM: 0,
        Bg_color: "bg-[#f8fafc]",
        key: "branding",
        Logo: <FaPaintbrush/>,
        Heding: "Branding y Diseño Gráfico",
        
        Detail: "Extiendo la identidad visual de tu marca a redes sociales, emails, tienda online, web y todo lo que tus clientes ven, para lograr una armonía gráfica.",
    },
    
   
];
//---- End Services Data -----
