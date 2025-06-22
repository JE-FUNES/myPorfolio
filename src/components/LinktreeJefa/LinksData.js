import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export const Links = [
  {
    title: "Necesito una Página Web",
    label: "Diseño y Desarrollo Web para Empresas y Comercios",
    background: "cyan-900",
    url: "https://www.jefa-web.com.ar/paginas_y_sitios_web_para_empresas_y_profesionales",
  },
  {
    title: "Cursos y Recursos",
    label: "Pensados para Mujeres que Aprenden y Emprenden",
    background: "amber-600",
    url: "https://www.jefa-web.com.ar/cursos_y_recursos",
  },
  {
    title: "Tengo una Agencia de Marketing",
    label: "Servicios especiales para este rubro",
    background: "red-900",
    url: "https://www.jefa-web.com.ar/diseno_y_desarrollo_web_para_agencias_de_marketing",
  },
  {
    title: "Busco un Desarrollador Frontend",
    label: "Mi Portfolio + CV",
    background: "fuchsia-900",
    url: "https://www.jefa-web.com.ar/portfolio-frontend-developer",
  },
];

export const Redes = [
    {
        key: "whatsapp",
        img: <FaWhatsapp />,
        background: "green-500",
        url: "https://wa.me/+5493512737199"
    },
    {
        key: "instagram",
        img: <FaInstagram />,
        background: "fuchsia-500",
        url: "https://instagram.com/jefa.web"
    },
    {
        key: "linkedin",
        img: <FaLinkedin />,
        background: "cyan-500",
        url: "https://linkedin.com/in/je-funes"
    },
]