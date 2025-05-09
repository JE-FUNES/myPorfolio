
import { FaHtml5, FaCreditCard, FaPaintbrush, FaWordpress, FaSellsy, FaGoogle, FaHeadSideCough, FaPaypal, FaInternetExplorer, FaGoogleWallet, FaArrowDownWideShort } from "react-icons/fa6";
import { FaJsSquare, FaAd, FaGooglePlusG, FaCartPlus } from "react-icons/fa";
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
        Logo: <FaWordpress />,
        Heding: "Diseño y Desarrollo Web Profesional",
        imgDetail: diseno,
        Detail: "Sitios impactantes, alineados con tu marca, que transmiten profesionalismo y generan confianza al instante.",
Detail2: "El diseño web es la primera impresión online de tu negocio. Trabajo para que sea clara, profesional, visualmente atractiva y funcional. Utilizo herramientas como Figma para diseñar previamente y asegurar que el resultado final esté alineado con tu identidad visual.",
Detail3: "Tecnologías y plataformas: HTML5, CSS3 y JavaScript para sitios responsivos. React.js para interfaces modernas e interactivas. Tailwind CSS para diseño adaptable. WordPress y Wix para autogestión sencilla, ideales para quienes quieren actualizar sus propios contenidos sin conocimientos técnicos.",

    },
    {
        delay: 8,
        delayM: 3,
        Bg_color: "bg-[#f8fafc]",
        key: "development",
        Logo: <FaJsSquare />,
        Heding: "Desarrollo Web a Medida",
        imgDetail: desarrollo,
        Detail: "Soluciones funcionales pensadas para crecer con tu negocio y adaptarse a tus necesidades específicas.",
Detail2: "El desarrollo a medida permite adaptar el sitio web a procesos y objetivos concretos. Ya sea una funcionalidad puntual, integración con un sistema externo, o una estructura más compleja, diseño cada solución pensando en su uso real y futuro.",
Detail3: "Tecnologías y plataformas: React.js para apps dinámicas. Node.js y Express.js para servidores personalizados. PHP para adaptar WordPress. Bases de datos PostgreSQL o Firebase. Ecommerce con Shopify, Tiendanube o desarrollos propios. Integraciones con medios de pago como MercadoPago, Stripe o PayPal.",
    },
    
    {
        delay: 9,
        delayM: 0,
        Bg_color: "bg-[#f8fafc]", 
        key: "ecommerce1",
        Logo: <FaSellsy />,
        Heding: "Tiendas online personalizadas",
        imgDetail: seotech,
        Detail: "Ventas 24/7 con una tienda online hecha a tu medida: clara, funcional y lista para escalar.",
Detail2: "Te acompaño desde el armado de tu tienda hasta su puesta en marcha. Diseño un ecommerce adaptado a tu negocio, que no sólo se vea bien sino que venda. Todo con panel de autogestión para que puedas actualizar productos o precios fácilmente.",
Detail3: "Tecnologías y plataformas: Shopify, Tiendanube, WooCommerce, Wix. Integración con pasarelas de pago como MercadoPago, PayPal, Stripe. Configuración de logística, emails automáticos, analítica y redes sociales. Páginas seguras con HTTPS y optimizadas para buscadores.",
    },
    
    {
        delay: 10,
        delayM: 0,
        Bg_color: "bg-[#f8fafc]", 
        key: "ecommerce2",
        Logo: <FaCartPlus />,
        Heding: "Ecommerce con panel de administración",
        imgDetail: seotech,
        Detail: "Tu tienda siempre bajo control, con un panel para gestionar productos, ventas y clientes sin depender de nadie.",
Detail2: "Desarrollo ecommerce con sistema de administración para que puedas gestionar pedidos, actualizar catálogos y ver estadísticas sin conocimientos técnicos. La tienda será tuya y completamente adaptable a tus procesos.",
Detail3: "Tecnologías y plataformas: WooCommerce, Shopify, Tiendanube, backend personalizado con CMS propios o integraciones. Configuración de pasarelas de pago, módulos de envío, informes de ventas. Integración con redes y publicidad online.",
    },
    
    {
        delay: 11,
        delayM: 0,
        Bg_color: "bg-[#f8fafc]", 
        key: "landing",
        Logo: <FaAd />,
        Heding: "Landing pages enfocadas en conversión",
        imgDetail: seotech,
        Detail: "Páginas que convierten visitas en clientes, con diseño estratégico y llamados a la acción efectivos.",
Detail2: "Las landing pages están diseñadas para campañas de marketing específicas. Capturan la atención y motivan una acción: agendar, comprar, consultar. Creo diseños centrados en objetivos concretos y medibles.",
Detail3: "Tecnologías y plataformas: HTML, CSS y React para velocidad y optimización. Google Tag Manager y Meta Pixel para medir resultados. Formularios con integración a CRMs o email marketing. Diseño responsive y adaptable a cada campaña o producto.",
    },
    
    {
        delay: 12,
        delayM: 0,
        Bg_color: "bg-[#f8fafc]", 
        key: "emails",
        Logo: <FaHtml5 />,
        Heding: "Diseño de emails para campañas",
        imgDetail: seotech,
        Detail: "Emails visuales y efectivos para promocionar productos, lanzar campañas o fidelizar clientes.",
Detail2: "El diseño de emails publicitarios requiere una estructura clara y un mensaje directo. Creo piezas atractivas, adaptadas a celulares y compatibles con todos los clientes de correo, para que tu campaña se vea bien en cualquier bandeja de entrada.",
Detail3: "Tecnologías y plataformas: Mailchimp, Doppler, MailerLite. Diseño con HTML responsivo. Integración con formularios, automatizaciones, landing pages o redes sociales. Optimización para evitar filtros de spam y mejorar tasas de apertura y clics.",
    },
    
    {
        delay: 13,
        delayM: 0,
        Bg_color: "bg-[#f8fafc]", 
        key: "existing",
        Logo: <FaInternetExplorer />,
        Heding: "Rediseño y optimización de sitios existentes",
        imgDetail: seotech,
        Detail: "Actualizá tu web con diseño moderno, mejor rendimiento y más conversiones sin empezar desde cero.",
Detail2: "Un rediseño web mejora no solo la estética, también la estructura, velocidad y experiencia de usuario. Evalúo tu sitio actual, con foco en lo que ya funciona y en lo que puede optimizarse para que realmente te represente.",
Detail3: "Acciones habituales: renovación del diseño, reorganización del contenido, mejora de velocidad, incorporación de nuevos elementos (blogs, formularios, botones, SEO, etc.). Reestructuración de navegación y diseño mobile-first para mejor desempeño.",
    },
    {
        delay: 14,
        delayM: 0,
        Bg_color: "bg-[#f8fafc]", 
        key: "seo",
        Logo: <FaGoogle />,
        Heding: "SEO y Configuración de Seguimiento",
        imgDetail: seotech,
        Detail: "Herramientas activadas para saber quién visita tu web, cómo llega y qué tan bien está posicionada.",
Detail2: "Configuro correctamente las herramientas de seguimiento y medición para mejorar el SEO y saber qué funciona en tu sitio. Así podés tomar decisiones basadas en datos reales.",
Detail3: "Herramientas: Google Tag Manager, Google Search Console, Meta Pixel. Configuración de eventos, conversión y seguimiento. Implementación de metatags, sitemap.xml, robots.txt. Asesoría SEO básica on-page.",
    },
    {
        delay: 15,
        delayM: 0,
        Bg_color: "bg-[#f8fafc]",
        key: "hosting",
        Logo: <FaArrowDownWideShort />,
        Heding: "Gestión de Dominios y Hosting",
        imgDetail: hosting,
        Detail: "Desde el dominio hasta el servidor: tu web siempre online, rápida y segura, sin dolores de cabeza.",
Detail2: "Me encargo del registro de tu dominio, la elección del hosting ideal según tu proyecto y la configuración completa para que tu sitio esté disponible sin interrupciones.",
Detail3: "Plataformas: Nic.ar, GoDaddy, donWeb, Google Domains. Hosting con CPanel, Bluehost, Hostinger o servidores dedicados. Asesoría para migraciones o renovaciones, configuración de correos corporativos y backups automáticos.",
    },
    {
        delay: 16,
        delayM: 0,
        Bg_color: "bg-[#f8fafc]",
        key: "security",
        Logo: <FaHeadSideCough />,
        Heding: "Protección de Datos y Certificados SSL",
        imgDetail: seguridad,
        Detail: "Tranquilidad para vos y tus clientes: tu sitio con cifrado seguro y buenas prácticas de protección.",
Detail2: "Instalo y configuro certificados SSL (candadito verde) para proteger datos sensibles. Esto también mejora tu posicionamiento en Google y transmite más confianza al usuario.",
Detail3: "Certificados de Let’s Encrypt, Comodo y otros. Configuración de HTTPS en todo el sitio. Redirecciones forzadas y actualización de enlaces. Revisión de formularios y datos sensibles para asegurar que todo esté protegido.",
    },
    {
        delay: 17,
        delayM: 0,
        Bg_color: "bg-[#f8fafc]",
        key: "branding",
        Logo: <FaPaintbrush/>,
        Heding: "Branding complementario",
        imgDetail: comercio,
        Detail: "Extiendo tu identidad visual a redes, emails, ecommerce y todo lo que tus clientes ven online.",
Detail2: "Diseño piezas digitales coherentes con tu marca, desde banners hasta diseños para tiendas o correos. Un buen branding refuerza la confianza y el recuerdo de marca en cada punto de contacto.",
Detail3: "Piezas habituales: diseños para Instagram, portadas de Facebook, banners para tiendas online, imágenes de productos, carruseles, emails con identidad visual. Trabajo alineado a tu logo y paleta de colores. Opcional: rediseño de identidad si necesitás renovarte.",
    },
    
    {
        delay: 18,
        delayM: 0,
        Bg_color: "bg-[#f8fafc]", 
        key: "platforms",
        Logo: <FaGooglePlusG />,
        Heding: "Integraciones con plataformas",
        imgDetail: seotech,
        Detail: "Tu web conectada con todo: redes sociales, WhatsApp, campañas y servicios externos.",
Detail2: "Realizo las integraciones necesarias para que tu sitio esté conectado a los canales que ya usás: WhatsApp, redes sociales, CRM, email marketing, mapas, pasarelas de pago, etc.",
Detail3: "Integraciones comunes: WhatsApp Business API, formularios conectados a Mailchimp, Doppler, CRMs como Hubspot, links a redes sociales, YouTube, Google Maps, medios de pago. También configuración de píxeles de seguimiento para campañas publicitarias.",
    },
];
//---- End Services Data -----
