import project_1 from '../../assets/Image/project-1.jpg'
import project_11 from '../../assets/Image/project-11.jpg'
import project_2 from '../../assets/Image/project-2.jpg'
import project_3 from '../../assets/Image/project-3.jpg'
import project_4 from '../../assets/Image/project-4.jpg'
import project_7 from '../../assets/Image/project-7.jpg'
import project_8 from '../../assets/Image/project-8.jpg'
import project_5 from '../../assets/Image/landingPage.jpg'

const insertVideo = () => {
    return (

<iframe width="560" height="315" src="https://www.youtube.com/embed/Vkr1_01egnU?si=PioZvQzMX8vAVIX-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    )
};


//---- Start Projects Data -----
export const PortfolioData = [
    {
        img: project_11,
        key: "project_11",
        list: "WEB DEVELOPMENT",
        Heding: "U.S.A. Courier Web Software",
        Detail:
        "I´m actually designing and developing a website for U.S.A. courier companies, which is a private project for Ascar Software. The website is being developed with React.js. It will be a website with a lot of functionalities, such as tracking, payments, login of multiple kinds of users, and more. The website is still in development.",
        btn: "View a little bit of the Project",
        //Project Detail
        imgDetail: "",
        videoUrl: "https://www.youtube.com/embed/Vkr1_01egnU?si=PioZvQzMX8vAVIX-",
        Type: "Web development.",
        Detail2: "This web software, under development, is for use by multiple Couriers and logistics companies in general. My task, as a front end developer, is to manage the process step by step, with functionalities that save and collect the necessary information from the database, or from Google Maps (for example), allow creating shipping orders, user types , print forms, send emails, etc.",
        Languages: "Java Script, React JS, Redux, Tailwind CSS, GraphQl, Git, AWS S3, Corel Draw, Figma, Kan Board",
        Country: "U.S.A.",
        URL: "private.",
        Finished: "in course."
    },
    {
        img: project_1,
        key: "project_1",
        list: "LANDING PAGES DESIGN",
        Heding: "Medellín Wordpress Designs",
        Detail:
            "I design landing pages for a Marketing Agency Startup, Agencia Promarketing. I design and develop services for small customers, specializing in creating stylish, modern websites, web services, authomatic emails, and payment gateways.",
        btn: "View some Projects",
        //Project Detail
        imgDetail: project_5,
        Type: "Landing Pages Design",
        Detail2: "I created 3 landing pages for the Pro Market Agency, for 3 different marketing campaigns. Each one had to have an aesthetic according to its corresponding website or style on its social network. The aesthetic was different on mobile devices than on larger screens.",
        Languages: "Wordpress, PHP, Java Script, Corel Draw, Notion, Google Drive",
        Country: "Colombia",
        URL: "       https://respiralavida.com/evento-sabiduria-en-accion/ | https://conexion-angelical.com/workshop-rituales/ | https://elclub.co/mindset-workshop/",
        Finished: "finished"
    },
    {
        img: project_3,
        key: "project_3",
        list: "WEB DEVELOPMENT",
        Heding: "Bogotá Events Website ",
        Detail:
            "I designed and developed a website for a Bogotá events company, Grupo 3 creativo, Proyecto mi Butaca. The website was developed with React.js. It is a website with a lot of functionalities, such as seats reservation, payments, login, and more.",
        btn: "View Project",
        //Project Detail
        imgDetail: "project_3",
        videoUrl:"https://www.youtube.com/embed/21o1_15-LQA?si=weeGMGiHkPtMDD8M",
        Type: "Web development.",
        Detail2: "As part of the front end development team of this project, I have participated in the creation of the user registry, their login and access through Google account, the details of the events, the registration and selection of seats, purchase of tickets, payment, etc",
        Languages: "Java Script, React JS, Redux, Tailwind CSS, GitHub, Corel Draw, Figma, Trello",
        Country: "Colombia",
        URL: "https://www.mibutaca2023.vercel.app",
        Finished: "Finished"
    },
    {
        img: project_2,
        key: "project_2",
        list: "WEB DEVELOPMENT",
        Heding: "Videogames Website",
        Detail:
            "I designed and developed a website for a videogames company, for practice in the Henry bootcamp. It is a website with a lot of functionalities, such as catalog, details, contact form, admin panel, login, and more.",
        btn: "View Project",
        //Project Detail
        imgDetail: "",
        videoUrl: "https://www.youtube.com/embed/gIKcj3LtzNI?si=GeBI18tB480AjjcC",
        Type: "Web development.",
        Detail2: "I have done this project alone, without a team, both front end and back end. For this project I have been recognized and praised, both by teachers and bootcamp authorities, as well as by fellow students.",
        Languages: "Java Script, React JS, Redux, CSS, Node Js, Express, Sequelize, GitHub, Corel Draw, Gif Animator",
        Country: "Argentina",
        URL: "no url",
        Finished: "Finished"
    },
    {
        img: project_4,
        key: "project_4",
        list: "WEB DEVELOPMENT",
        Heding: "Rick & Morty Website",
        Detail:
        // en ingles: Diseñe  y desarrollé un sitio web como práctica en el bootcamp de Henry. El sitio web fue desarrollado con React.js. Es un sitio web con muchas funcionalkeyades, como catálogo, detalles, formulario de contacto, panel administrador, login y más.
            "I designed and developed a website for practice in the Henry bootcamp. The website was developed with React.js. It is a website with a lot of functionalities, such as catalog, details, favourites, contact form, login, and more.",
        btn: "View Project",
        //Project Detail
        imgDetail: "",
        videoUrl: "https://www.youtube.com/embed/6ijuyxgBk7o?si=66fM-2AXf0btETTa",
        Type: "Web development.",
        Detail2: "I have done this project alone, without a team, both front end and back end. This project was chosen in 1st place in the competition held at the bootcamp, being the most voted for by classmates.",
        Languages: " Java Script, React JS, Redux, CSS, Node Js, Express, Sequelize, GitHub, Corel Draw, Gif Animator",
        Country: "Argentina",
        URL: "no url",
        Finished: "Finished"
    },
    {
        img: project_7,
        key: "project_7",
        list: "EFFECT DEVELOPMENT",
        Heding: "Clock Animation JS+HTML+CSS",
        Detail:
        // en ingles: Diseñe  y desarrollé un sitio web como práctica en el bootcamp de Henry. El sitio web fue desarrollado con React.js. Es un sitio web con muchas funcionalkeyades, como catálogo, detalles, formulario de contacto, panel administrador, login y más.
            "I adjusted the code, personalized and change de original design and colors. The project was developed with JS, HTML, and CSS.",
        btn: "View Project",
        //Project Detail
        imgDetail: insertVideo,
        Type: "Web development.",
        Detail2: "This web software, under development, is for use by multiple Couriers and logistics companies in general. My task, as a front end developer, is to manage the process step by step, with functionalities that save and collect the necessary information from the database, or from Google Maps (for example), allow creating shipping orders, user types , print forms, send emails, etc.",
        Languages: "Java Script, React JS, Redux, Tailwind CSS, GraphQl, Git, AWS S3, Corel Draw, Figma, Kan Board",
        Country: "U.S.A.",
        URL: "private.",
        Finished: "in course."
    },
    {
        img: project_8,
        key: "project_8",
        list: "FUNCTIONALITY DEVELOPMENT",
        Heding: "Calculator JS+HTML+CSS",
        Detail:
        // en ingles: Diseñe  y desarrollé un sitio web como práctica en el bootcamp de Henry. El sitio web fue desarrollado con React.js. Es un sitio web con muchas funcionalkeyades, como catálogo, detalles, formulario de contacto, panel administrador, login y más.
            "I developed a calculator for an existing e-commerce website. The project was developed with JS, HTML, and CSS and implemented in Tienda Nube.",
        btn: "View Project",
        //Project Detail
        imgDetail: insertVideo,
        Type: "Web development.",
        Detail2: "This web software, under development, is for use by multiple Couriers and logistics companies in general. My task, as a front end developer, is to manage the process step by step, with functionalities that save and collect the necessary information from the database, or from Google Maps (for example), allow creating shipping orders, user types , print forms, send emails, etc.",
        Languages: "Java Script, React JS, Redux, Tailwind CSS, GraphQl, Git, AWS S3, Corel Draw, Figma, Kan Board",
        Country: "U.S.A.",
        URL: "private.",
        Finished: "in course."
    },
];

