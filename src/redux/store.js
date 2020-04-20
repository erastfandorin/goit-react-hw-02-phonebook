import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import contactsReduser from './contactsReduser';

const rootReducer = combineReducers({
  phoneBook: contactsReduser,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
