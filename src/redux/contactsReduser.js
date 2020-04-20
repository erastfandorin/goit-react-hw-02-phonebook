import { combineReducers } from 'redux';
import { Type } from './contactsActions';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsReducer = (state = initialState.contacts, action) => {
  switch (action.type) {
    case Type.ADD_CONTACT:
      return [action.payload, ...state];

    case Type.ADD_CONTACT_WITH_LOCALHOST:
      return [...action.payload, ...state];

    case Type.DELETE_CONTACT:
      return state.filter(contact => contact.id !== action.payload);

    default:
      return state;
  }
};

const filterReducer = (state = initialState.filter, action) => {
  switch (action.type) {
    case Type.CHANGE_FILTER:
      return `${action.payload}`;

    default:
      return state;
  }
};

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
