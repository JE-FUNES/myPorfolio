import {
  SUBMIT_CONTACT_FORM,
  GET_CONTACTS,
  DELETE_CONTACTS,
} from "./actionTypes.js";

import axios from "axios";


// Formulario de Contacto ( createContact controller, createContactHandler)

export const submitContactForm = (formData) => {
  const url = "https://my-portfolio-server-gamma-ruby.vercel.app/submit/contact";

  return async function (dispatch) {
    try {
      const response = await axios.post(url, formData);

      dispatch({
        type: SUBMIT_CONTACT_FORM,
        payload: response.data,
      });

      return response.data;
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };
};


// get contacts se comunicará con http:localhost:3001/submit/contact para traer toda la información de los contactos

export const getContacts = () => {
  const url = "https://my-portfolio-server-gamma-ruby.vercel.app/submit/contact";
  return async function (dispatch) {
    try {
      const contacts = await axios.get(url);
      dispatch({
        type: GET_CONTACTS,
        payload: contacts.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// delete contacts se comunicará con http:localhost:3001/submit/contact para borrar un contacto por su id

export const deleteContacts = (id) => {
  const url = `https://my-portfolio-server-gamma-ruby.vercel.app/submit/contact/${id}`;
  return async function (dispatch) {
    try {
      await axios.delete(url);
      return dispatch({
        type: DELETE_CONTACTS,
      });
    } catch (error) {
      console.log(error);
      alert("The contact could not be deleted");
    }
  };
};
