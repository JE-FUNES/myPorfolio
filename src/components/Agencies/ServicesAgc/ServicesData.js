
import { FaHtml5, FaAws, FaGitlab, FaDatabase, FaCreditCard, FaPaintbrush, FaWordpress, FaSellsy, FaGoogle, FaHeadSideCough, FaPaypal, FaInternetExplorer, FaGoogleWallet, FaArrowDownWideShort } from "react-icons/fa6";
import { FaCss3, FaReact, FaJsSquare, FaAd, FaGooglePlusG } from "react-icons/fa";
import diseno from '../../../assets/Image/diseno-web.webp';
import desarrollo from '../../../assets/Image/desarrollo.webp';
import hosting from '../../../assets/Image/hosting.webp';
import seguridad from '../../../assets/Image/seguridad.webp';
import seotech from '../../../assets/Image/seotech.webp';
import comercio from '../../../assets/Image/comercio.webp';

//---- Start Services Data -----
export const ServicesData = [
    {
        delay: 10,
        Bg_color: "bg-[#f8fafc]",
        key: "webdesign",
        Logo: <FaWordpress />,
        Heding: "Professional Web Design",
        imgDetail: diseno,
        Detail2: "Web design is the first impression users have of a brand. I focus on creating visually appealing and functional sites that reflect the client's identity. I use tools like Figma to create interactive prototypes before implementation. Each design is tailored to the client's brand aesthetic and values, ensuring a seamless and engaging user experience (UX).",
        Detail3: "TECHNOLOGIES and PLATFORMS: HTML5, CSS3, and JavaScript for creating responsive interfaces. React.js for interactive and dynamic interfaces. Tailwind CSS for streamlined design and compatibility across all devices. WordPress and Wix for custom designs that meet the need for easy content management.",
        Detail:
            "Visually stunning sites aligned with your brand—and your client's—to maximize conversions and credibility... see more",
    },
    {
        delay: 12,
        Bg_color: "bg-[#fef2f2]",
        key: "development",
        Logo: <FaJsSquare />,
        Heding: "Custom Web Development",
        imgDetail: desarrollo,
        Detail2: "Web development goes beyond design. The goal is not only for the site to look good, but also for it to function correctly. I implement custom solutions for clients who need dynamic pages, with integration into third-party systems or databases.",
        Detail3: "Technologies and platforms: React.js for interactive and dynamic applications. Node.js for backend development. PHP for WordPress customization and adaptation. PostgreSQL for database management. Express.js as a backend framework. Shopify, Tiendanube, etc. for custom e-commerce platforms. Integration with PayPal, MercadoPago, and Stripe for online payment solutions.",
        Detail:
            "Features tailored to your client's—and your agency's—needs, ensuring scalability and optimal performance... see more",
    },
    {
        delay: 14,
        Bg_color: "bg-[#f7fee7]", 
        key: "seo",
        Logo: <FaGoogle />,
        Heding: "Technical SEO and Tracking Setup",
        imgDetail: seotech,
        Detail2: "I focus on optimizing websites for search engines, ensuring they rank well. I manage the configuration of meta tags, pixels, and tools needed to improve the measurement and performance of advertising campaigns.",
        Detail3: "Technologies and platforms: Google Tag Manager for managing tags and improving conversion tracking. Google Search Console for monitoring site performance and fixing errors. Meta Pixel for tracking user activity on the website. Meta tags for on-page SEO optimization.",
        Detail:
            "Optimization with meta tags, pixels, Google Tag Manager, and Search Console for measurement and improved performance... see more",
    },
    {
        delay: 16,
        Bg_color: "bg-[#ecfeff]",
        key: "hosting",
        Logo: <FaArrowDownWideShort />,
        Heding: "Domain and Hosting Management",
        imgDetail: hosting,
        Detail2: "Custom domain registration and setup of reliable, fast, and secure hosting servers. I also handle specialized hosting solutions for platforms like Wix and WordPress, as well as dedicated servers for larger projects.",
        Detail3: "Technologies and platforms: Domain registration through platforms such as Nic.ar, GoDaddy, donWeb, Google Domains, and more. CPanel for hosting and database management. Amazon Web Services (AWS) and dedicated servers. Bluehost and HostGator for hosting on easy-to-access platforms like WordPress.",
        Detail:
            "Reliable infrastructure to ensure speed, stability, and uninterrupted availability... see more",
    },
    {
        delay: 18,
        Bg_color: "bg-[#ecfeff]",
        key: "security",
        Logo: <FaHeadSideCough />,
        Heding: "Data Protection and SSL Certificates",
        imgDetail: seguridad,
        Detail2: "Data protection is essential to maintaining your customers' trust. I set up SSL certificates to ensure all site data is encrypted and protected.",
        Detail3: "Technologies and platforms: SSL Certificates from Let's Encrypt and Comodo to ensure site security. Implementation of HTTPS for encryption on all site pages.",
        Detail:
            "Security and trust with SSL encryption and best practices in data protection to avoid risks... see more",
    },
    {
        delay: 20,
        Bg_color: "bg-[#fffbeb]",
        key: "ecommerce",
        Logo: <FaPaypal />,
        Heding: "Ecommerce and Online Sales Strategies",
        imgDetail: comercio,
        Detail2: "I offer my experience to provide comprehensive ecommerce solutions, from online store creation to payment system integration and inventory management. I set up both self-service ecommerce platforms—for quick solutions—and specialized marketplaces developed with code. I also manage accounts on national and international platforms, such as MercadoLibre, for example.",
        Detail3: "Technologies and platforms: Shopify and Tiendanube for custom online stores. WooCommerce on WordPress for e-commerce integrated with content management systems. MercadoPago, PayPal, and Stripe integration for online payments. Google Analytics for performance and sales analysis. Facebook Shops and Instagram Shopping for direct sales from social media.",
        Detail:"Conversion-optimized stores, integrated with secure payments and analytics tools... see more",
    },
];

export const EspServicesData = [
    {
        delay: 10,
        Bg_color: "bg-[#f8fafc]",
        key: "webdesign",
        Logo: <FaWordpress />,
        Heding: "Diseño de Páginas Web Profesionales",
        imgDetail: diseno,
        Detail2: "El diseño web es la primera impresión que los usuarios tienen de una marca. Me enfoco en crear sitios visualmente atractivos y funcionales que reflejan la identidad del cliente. Utilizo herramientas como Figma para crear prototipos interactivos antes de la implementación. Cada diseño se adapta a la estética y valores de la marca del cliente, asegurando una experiencia de usuario (UX) fluida y atractiva.",
        Detail3: "TECNOLOGÍAS y PLATAFORMAS: HTML5, CSS3, JavaScript para la creación de interfaces responsivas. React.js para interfaces interactivas y dinámicas. Tailwind CSS para agilizar el diseño y asegurar la compatibilidad en todos los dispositivos. WordPress y Wix para diseños personalizados que se ajusten a la necesidad de gestión de contenido fácil.",
        Detail:
            "Sitios visualmente impactantes y alineados con tu marca -y la de tu cliente- para maximizar conversiones y credibilidad... ver más",
    },
    {
        delay: 12,
        Bg_color: "bg-[#fef2f2]",
        key: "development",
        Logo: <FaJsSquare />,
        Heding: "Desarrollo Web a Medida",
        imgDetail: desarrollo,
        Detail2: "El desarrollo web va más allá del diseño. El objetivo no es sólo que el sitio se vea bien, sino que también funcione correctamente. Implemento soluciones a medida para clientes que necesitan páginas dinámicas, con integración a sistemas de terceros o bases de datos.",
        Detail3: "Tecnologías y plataformas: React.js para aplicaciones interactivas y dinámicas. Node.js para el desarrollo del backend. PHP para adaptación y personalización de Wordpress. PostgreSQL para la administración de bases de datos. Express.js como framework de backend. Shopify, Tiendanube, etc. para plataformas de ecommerce personalizadas. Integración con PayPal, MercadoPago y Stripe para soluciones de pago online.",
        Detail:
            "Funcionalidades adaptadas a las necesidades de tu cliente -y las de tu agencia-, garantizando escalabilidad y rendimiento óptimo... ver más",
    },
    {
        delay: 14,
        Bg_color: "bg-[#f7fee7]", 
        key: "seo",
        Logo: <FaGoogle />,
        Heding: "SEO Técnico y Configuración de Seguimiento",
        imgDetail: seotech,
        Detail2: "Me enfoco en optimizar los sitios web para los motores de búsqueda, asegurando que estén bien posicionados. Me encargo de la configuración de metatags, píxeles y herramientas varias para mejorar la medición y el rendimiento de las campañas publicitarias.",
        Detail3: "Tecnologías y plataformas: Google Tag Manager para gestionar etiquetas y mejorar el seguimiento de conversiones. Google Search Console para monitorear el rendimiento del sitio y corregir errores. Meta Pixel para seguimiento de actividades de los usuarios en el sitio web. Metatags para optimización de SEO on-page.",
        Detail:
            "Optimización con metatags, píxeles, Google Tag Manager y Search Console para medición y mejor rendimiento... ver más",
    },
    {
        delay: 16,
        Bg_color: "bg-[#ecfeff]",
        key: "hosting",
        Logo: <FaArrowDownWideShort />,
        Heding: "Gestión de Dominios y Hosting",
        imgDetail: hosting,
        Detail2: "Registro de dominios personalizados y configuración de servidores de alojamiento confiables, rápidos y seguros. También me ocupo de soluciones de hosting especializadas en plataformas como Wix y WordPress, así como servidores dedicados para proyectos más grandes.",
        Detail3: "Tecnologías y plataformas: Registro de dominios a través de plataformas como Nic.ar, GoDaddy, donWeb, Google Domains y más. CPanel para gestión de hosting y bases de datos. Amazon Web Services (AWS) y servidores dedicados. Bluehost y HostGator para alojamiento en plataformas de fácil acceso como WordPress.",
        Detail:
            "Infraestructura confiable para asegurar velocidad, estabilidad y disponibilidad sin interrupciones... ver más",
    },
    {
        delay: 18,
        Bg_color: "bg-[#ecfeff]",
        key: "security",
        Logo: <FaHeadSideCough />,
        Heding: "Protección de Datos y Certificados SSL",
        imgDetail: seguridad,
        Detail2: "La protección de datos es fundamental para mantener la confianza de tus clientes. Configuro certificados SSL para asegurar que todos los datos del sitio estén cifrados y protegidos.",
        Detail3: "Tecnologías y plataformas: SSL Certificates de Let’s Encrypt y Comodo para garantizar la seguridad en el sitio. Implementación de HTTPS para cifrado en todas las páginas del sitio.",
        Detail:
            "Seguridad y confianza con cifrado SSL y buenas prácticas en protección de datos para evitar riesgos... ver más",
    },
    {
        delay: 20,
        Bg_color: "bg-[#fffbeb]",
        key: "ecommerce",
        Logo: <FaPaypal/>,
        Heding: "Ecommerce y Estrategias de Venta Online",
        imgDetail: comercio,
        Detail2: "Te ofrezco mi experiencia para dar soluciones completas de ecommerce, desde la creación de tiendas online hasta la integración con sistemas de pago y la gestión de inventarios. Configuro tanto plataformas de ecommerce de autogestión -para soluciones rápidas- como marketplaces especializados desarrollados con código. También gestiono cuentas en plataformas de nivel nacional o mundial como MercadoLibre por ejemplo.",
        Detail3: "Tecnologías y plataformas: Shopify y Tiendanube para tiendas online personalizadas. WooCommerce en WordPress para ecommerce integrados con sistemas de gestión de contenido. Integración de MercadoPago, PayPal y Stripe para pagos online. Google Analytics para el análisis de rendimiento y ventas. Facebook Shops e Instagram Shopping para ventas directas desde redes sociales.",
        Detail:
            "Tiendas optimizadas para conversión, integradas con pagos seguros y herramientas de analítica... ver más",
    },
];
//---- End Services Data -----
