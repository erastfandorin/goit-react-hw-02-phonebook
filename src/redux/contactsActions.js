import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('phonebook/addContact');
export const addContactWithLocalhost = createAction(
  'phonebook/addContactWithLocalhost',
);
export const deleteContact = createAction('phonebook/deleteContact');
export const changeFilter = createAction('phonebook/changeFilter');
