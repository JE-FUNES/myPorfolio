import {
  SUBMIT_CONTACT_FORM,
  GET_CONTACTS,
} from "./actionTypes";

const initialState = {
  contacts: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {

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
