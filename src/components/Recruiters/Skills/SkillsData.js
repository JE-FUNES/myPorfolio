import { FaHtml5, FaAws, FaGitlab, FaDatabase, FaCreditCard, FaPaintbrush, FaWordpress } from "react-icons/fa6";
import { FaCss3, FaReact, FaJsSquare, FaAd } from "react-icons/fa";
import javascriptNode from '../../../assets/Image/JavaScript-Node.webp'
import wordpress from '../../../assets/Image/WordPress-PHP.webp'
import aws from '../../../assets/Image/AWS.webp'
import bases from '../../../assets/Image/databases-Express-Docker-REST-APIs.webp'

import grafico from '../../../assets/Image/graphictechnologies-video-animatedGIFs.webp'
import seo from '../../../assets/Image/SEO-GoogleTag-GoogleSearch-Pixels.webp'
import html from '../../../assets/Image/HTML-CSS-Tailwind-MUI Material.webp'
import react from '../../../assets/Image/React-Redux-GraphQL.webp'

import ecommerce from '../../../assets/Image/ecommerce.webp'
import gitlab from '../../../assets/Image/gitlab.webp'


export const SkillsData = [
    {
        Bg_color: "bg-[#fdf4ff]",
        Logo: <FaJsSquare />,
        Heding: "JavaScript | Node.js",
        key: "JavaScript",
        Detail1: "I have been using these languages ​​since 2023.",
        Detail2: "JavaScript is one of the most important programming languages ​​for web development. I've worked with JavaScript in front- and back-end applications, using Node.js to create efficient servers, RESTful APIs, and automation tools. In projects such as interactive web applications, I've relied on frameworks and libraries such as React.js, Express, and Node.js. In the MY PROJECTS section, you can see which projects I've used this language in.",
        imgDetail: javascriptNode,
    },
    {
        Bg_color: "bg-[#a855f7]",
        Logo: <FaAd />,
        Heding: "S.E.O. | Google Tag Manager | Google Search | Pixels",
        key: "MarketingDigital",
        Detail1: "I have been doing this type of configuration since 2017.",
        Detail2: "I'm familiar with SEO best practices to improve website visibility in search engines. I use Google Tag Manager to manage tags without editing code, Google Search Console to analyze and improve search performance, and Facebook Pixels to track user interactions with advertising campaigns.",
        imgDetail: seo,
    },
    {
        Bg_color: "bg-[#fae8ff]",
        Logo: <FaWordpress />,
        Heding: "Wordpress | PHP",
        key: "WORDPRESS",
        Detail1: "Development on this platform - and on Wix - since 2023.",
        Detail2: "WordPress is one of the most popular content management platforms, and I specialize in its development, customization, and optimization. I've worked with PHP to create custom themes and plugins, enhance website functionality, and ensure performance. I've also used WordPress to develop e-commerce, blogs, and corporate websites.",
        imgDetail: wordpress,
    },
    {
        Bg_color: "bg-[#c084fc]",
        Logo: <FaHtml5 />,
        Heding: "HTML | CSS | MUI material | Tailwind",
        key: "HTML",
        Detail1: "My experience with these languages ​​dates back almost to the arrival of the Internet in Argentina, back in 1997 (approx.).",
        Detail2: "I have a solid foundation in HTML5 and CSS3, creating structured and styled websites with a focus on accessibility and performance. I've used Tailwind CSS on several projects to quickly create custom, responsive layouts, leveraging its predefined utilities and classes. I've implemented MUI Material components, leveraging the ready-to-use, customizable UI in React, creating modern web applications with a great user experience.",
        imgDetail: html,
    },
    {
        Bg_color: "bg-[#f5d0fe]",
        Logo: <FaAws />,
        Heding: "Amazon Web Services",
        key: "AWS",
        Detail1: "I used this platform in one of the projects I participated in as a front-end developer, in 2023.",
        Detail2: "AWS offers a flexible and scalable cloud infrastructure. I have experience using S3, Lambda, and API Gateway services to develop and deploy a secure and scalable web application.",
        imgDetail: aws,
    },
    {
        Bg_color: "bg-[#d8b4fe]",
        Logo: <FaReact />,
        Heding: "React JS | Redux | Graph QL",
        key: "ReactJS",
        Detail1: "I have been using these technologies since 2023.",
        Detail2: "I have developed dynamic and highly interactive web applications using React.js, managing application state with Redux. Additionally, in some projects, I have used GraphQL to perform more efficient database queries, optimizing application performance and improving the user experience.",
        imgDetail: react,
    },
    {
        Bg_color: "bg-[#f0abfc]",
        Logo: <FaDatabase />,
        Heding: "Data Bases | Express | Docker | REST API",
        key: "DataBases",
        Detail1: "I have been using these technologies since 2023.",
        Detail2: "I work with relational databases (PostgreSQL) to manage data storage and retrieval. I use Express as a framework for Node.js, facilitating the creation of RESTful servers and APIs with efficient routing and middleware. With Docker, I created containers that allowed an application to be deployed consistently in different environments, facilitating continuous integration. I have worked with external APIs, generating robust endpoints that enable interaction between front-end and back-end applications.",
        imgDetail: bases,
    },
    {
        Bg_color: "bg-[#e9d5ff]",
        Logo: <FaGitlab />,
        Heding: "GitLab | Scrum",
        key: "GitLab",
        Detail1: "I have been using these platforms since 2023.",
        Detail2: "I use GitLab for source code management and team collaboration. I'm familiar with continuous integration (CI/CD) and project management. As for Scrum, I have experience using this agile methodology, participating in sprints to ensure the continuous delivery of quality products and meeting deadlines.",
        imgDetail: gitlab,
    },
    {
        Bg_color: "bg-[#e879f9]",
        Logo: <FaPaintbrush />,
        Heding: "Graphic Technologies | Video | Animated Gifs",
        key: "GraphicTechnologies",
        Detail1: "I have been doing general graphic design since 2007.",
        Detail2: "I have extensive experience creating visual content for websites, including the design and optimization of images, videos, and animated GIFs. I've worked with editing tools such as Adobe Photoshop, Illustrator, and Corel Draw to create high-quality artwork that enhances the user experience.",
        imgDetail: grafico,
    },
    {
        Bg_color: "bg-[#f3e8ff]",
        Logo: <FaCreditCard />,
        Heding: "Online Stores | Payment Gateways",
        key: "E-CommerceTechnologies",
        Detail1: "Development on this type of platform since 2017.",
        Detail2: "I have experience creating and managing e-commerce platforms, integrating payment platforms such as Stripe, PayPal, and MercadoPago. I'm responsible for implementing secure payment systems, designing intuitive checkout flows, and optimizing conversion rates on online sales sites.",
        imgDetail: ecommerce,
    },
];

export const EspSkillsData = [
    {
        Bg_color: "bg-[#fdf4ff]",
        Logo: <FaJsSquare />,
        Heding: "JavaScript | Node.js",
        key: "JavaScript",
        Detail1: "Utilizo estos lenguajes desde el año 2023.",
        Detail2: "JavaScript es uno de los lenguajes de programación más importantes para el desarrollo web. He trabajado con JavaScript en aplicaciones frontend y backend, utilizando Node.js para crear servidores eficientes, APIs RESTful y herramientas de automatización. En proyectos como aplicaciones web interactivas, me he apoyado en frameworks y bibliotecas como React.js, Express y Node.js. En la sección MIS PROYECTOS podrás ver en cuáles de ellos he utilizado este lenguaje. ",
        imgDetail: javascriptNode,
    },
    {
        Bg_color: "bg-[#a855f7]",
        Logo: <FaAd />,
        Heding: "S.E.O. | Google Tag Manager | Google Search | Pixels",
        key: "MarketingDigital",
        Detail1: "Realizo este tipo de configuraciones desde el año 2017.",
        Detail2: "Conozco las mejores prácticas de SEO para mejorar la visibilidad de los sitios web en los motores de búsqueda. Utilizo Google Tag Manager para gestionar etiquetas sin necesidad de editar el código, Google Search Console para analizar y mejorar el rendimiento de búsqueda, y Facebook Pixels para rastrear las interacciones de los usuarios en campañas publicitarias.",
        imgDetail: seo,
    },
    {
        Bg_color: "bg-[#fae8ff]",
        Logo: <FaWordpress />,
        Heding: "Wordpress | PHP",
        key: "WORDPRESS",
        Detail1: "Desarrollo en ésta plataforma - y en la de Wix - desde el año 2023.",
        Detail2: "WordPress es una de las plataformas de gestión de contenido más populares y me especializo en su desarrollo, personalización y optimización. He trabajado con PHP para crear temas y plugins personalizados, mejorar la funcionalidad de sitios web y asegurar su rendimiento. Además, he utilizado WordPress para desarrollar e-commerce, blogs y sitios corporativos.",
        imgDetail: wordpress,
    },
    {
        Bg_color: "bg-[#c084fc]",
        Logo: <FaHtml5 />,
        Heding: "HTML | CSS | MUI material | Tailwind",
        key: "HTML",
        Detail1: "Mi experiencia con estos lenguajes se remonta casi a la llegada de internet a la Argentina, allá por 1997 (aprox.).",
        Detail2: "Tengo una sólida base en HTML5 y CSS3, creando sitios web estructurados y estilizados con un enfoque en la accesibilidad y el rendimiento. He utilizado Tailwind CSS en varios proyectos, para crear diseños personalizados y responsivos rápidamente, aprovechando sus utilidades y clases predefinidas. He implementado componentes de MUI Material aprovechando la interfaz de usuario listas para usar y personalizables en React, creando aplicaciones web modernas y con una excelente experiencia de usuario.",
        imgDetail: html,
    },
    {
        Bg_color: "bg-[#f5d0fe]",
        Logo: <FaAws />,
        Heding: "Amazon Web Services",
        key: "AWS",
        Detail1: "He utilizado esta plataforma en uno de los proyectos en los que participé como frontend developer, en el año 2023.",
        Detail2: "AWS ofrece una infraestructura en la nube flexible y escalable. Tengo experiencia usando servicios S3, Lambda y API Gateway para desarrollar y desplegar una aplicación web segura y escalable. ",
        imgDetail: aws,
    },
    {
        Bg_color: "bg-[#d8b4fe]",
        Logo: <FaReact />,
        Heding: "React JS | Redux | Graph QL",
        key: "ReactJS",
        Detail1: "Utilizo estas tecnologías desde el año 2023.",
        Detail2: "He desarrollado aplicaciones web dinámicas y altamente interactivas utilizando React.js, gestionando el estado de la aplicación con Redux. Además, en algunos proyectos he utilizado GraphQL para hacer consultas más eficientes a las bases de datos, optimizando el rendimiento de las aplicaciones y mejorando la experiencia del usuario.",
        imgDetail: react,
    },
    {
        Bg_color: "bg-[#f0abfc]",
        Logo: <FaDatabase />,
        Heding: "Bases de Datos | Express | Docker | REST API",
        key: "DataBases",
        Detail1: "Utilizo estas tecnologías desde el año 2023.",
        Detail2: "Trabajo con bases de datos relacionales (PostgreSQL) para gestionar el almacenamiento y recuperación de datos. Utilizo Express como framework para Node.js, facilitando la creación de servidores y APIs RESTful con rutas y middleware eficientes. Con Docker he creado contenedores que permitieron desplegar una aplicación de forma consistente en diferentes entornos, facilitando la integración continua. He trabajo con APIs externas, generando endpoints robustos que permitan la interacción entre aplicaciones frontend y backend.",
        imgDetail: bases,
    },
    {
        Bg_color: "bg-[#e9d5ff]",
        Logo: <FaGitlab />,
        Heding: "GitLab | Scrum",
        key: "GitLab",
        Detail1: "Utilizo estas plataformas desde el año 2023.",
        Detail2: "Utilizo GitLab para la gestión de código fuente y la colaboración en equipos. Me familiarizo con la integración continua (CI/CD) y la gestión de proyectos. En cuanto a Scrum, tengo experiencia en el uso de esta metodología ágil, participando en sprints para garantizar la entrega continua de productos de calidad y el cumplimiento de plazos.",
        imgDetail: gitlab,
    },
    {
        Bg_color: "bg-[#e879f9]",
        Logo: <FaPaintbrush />,
        Heding: "Tecnologías Gráficas | Video | Gifs animados",
        key: "GraphicTechnologies",
        Detail1: "Realizo diseño gráfico en general desde el año 2007.",
        Detail2: "Tengo basta experiencia en la creación de contenido visual para páginas web, incluyendo el diseño y optimización de imágenes, videos y GIFs animados. He trabajado con herramientas de edición como Adobe Photoshop, Illustrator y Corel Draw para crear material gráfico de alta calidad que mejora la experiencia del usuario.",
        imgDetail: grafico,
    },
    {
        Bg_color: "bg-[#f3e8ff]",
        Logo: <FaCreditCard />,
        Heding: "Tiendas Online | Plataformas de Pago",
        key: "E-CommerceTechnologies",
        Detail1: "Desarrollo en este tipo de plataformas desde el año 2017.",
        Detail2: "Tengo experiencia en la creación y gestión de e-commerce, integrando plataformas de pago como Stripe, PayPal y MercadoPago. Me encargo de la implementación de sistemas de pago seguros, el diseño de flujos de compra intuitivos y la optimización de la conversión en sitios de venta online.",
        imgDetail: ecommerce,
    },
];