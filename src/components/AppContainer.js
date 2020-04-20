import { connect } from 'react-redux';
import * as contactAction from '../redux/contactsActions';
import App from './App';

const mapStateToProps = state => ({
  contacts: state.phoneBook.contacts,
  filter: state.phoneBook.filter,
});

const mapDispatchToProps = dispatch => ({
  addContact: newContact => dispatch(contactAction.addContact(newContact)),
  addContactWithLocalhost: arrayContacts =>
    dispatch(contactAction.addContactWithLocalhost(arrayContacts)),
  deleteContact: id => dispatch(contactAction.deleteContact(id)),
  changeFilter: findValue => dispatch(contactAction.changeFilter(findValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
