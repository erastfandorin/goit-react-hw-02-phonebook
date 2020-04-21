import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as contactsActions from './contactsActions';

const contactsReducer = createReducer([{ id: 1, name: 'lol', number: '999' }], {
  [contactsActions.addContact]: (state, action) => [action.payload, ...state],
  [contactsActions.addContactWithLocalhost]: (state, action) => [
    ...action.payload,
    ...state,
  ],
  [contactsActions.deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const filterReducer = createReducer('', {
  [contactsActions.changeFilter]: (state, action) => `${action.payload}`,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
