import { createSelector } from 'reselect';

export const getContacts = state => state.phoneBook.contacts;

export const getFilter = state => state.phoneBook.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    ),
);
