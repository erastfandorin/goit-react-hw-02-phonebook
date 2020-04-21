import { connect } from 'react-redux';
import * as contactAction from '../../redux/contactsActions';
import * as contactsSelectors from '../../redux/contactsSelectors';
import ContactList from './ContactList';

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
  filteredContacts: contactsSelectors.getFilteredContacts(state),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(contactAction.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
