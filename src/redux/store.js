import { configureStore } from '@reduxjs/toolkit';
import contactsReduser from './contactsReduser';

const store = configureStore({
  reducer: { phoneBook: contactsReduser },
});

export default store;
