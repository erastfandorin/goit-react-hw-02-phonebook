export const Type = {
  ADD_CONTACT: 'ADD_CONTACT',
  ADD_CONTACT_WITH_LOCALHOST: 'ADD_CONTACT_WITH_LOCALHOST',
  DELETE_CONTACT: 'DELETE_CONTACT',
  CHANGE_FILTER: 'CHANGE_FILTER',
};

export const addContact = newContact => ({
  type: Type.ADD_CONTACT,
  payload: newContact,
});

export const addContactWithLocalhost = arrayContacts => ({
  type: Type.ADD_CONTACT_WITH_LOCALHOST,
  payload: arrayContacts,
});

export const deleteContact = id => ({
  type: Type.DELETE_CONTACT,
  payload: id,
});

export const changeFilter = findValue => ({
  type: Type.CHANGE_FILTER,
  payload: findValue,
});
