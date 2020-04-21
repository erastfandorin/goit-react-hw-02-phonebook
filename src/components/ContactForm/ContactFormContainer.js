import { connect } from 'react-redux';
import * as contactAction from '../../redux/contactsActions';
import * as contactsSelectors from '../../redux/contactsSelectors';
import ContactForm from './ContactForm';

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  addContact: newContact => dispatch(contactAction.addContact(newContact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
