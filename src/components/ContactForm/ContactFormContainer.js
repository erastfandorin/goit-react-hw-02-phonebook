import { connect } from 'react-redux';
import * as contactAction from '../../redux/contactsActions';
import ContactForm from './ContactForm';

const mapStateToProps = state => ({
  contacts: state.phoneBook.contacts,
});

const mapDispatchToProps = dispatch => ({
  addContact: newContact => dispatch(contactAction.addContact(newContact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
