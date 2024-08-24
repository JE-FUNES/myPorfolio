import {
  SUBMIT_CONTACT_FORM,
  GET_CONTACTS,
  CHOOSE_LANGUAGE,
} from "./actionTypes";

const initialState = {
  contacts: [],
  language: "en",
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {

    case CHOOSE_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };

        case SUBMIT_CONTACT_FORM:
      return {
        ...state,
        contactFormSubmitted: true,
        contactFormData: action.payload,
      };

   
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };                

    default:
      return state;
  }
}
