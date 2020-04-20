import { connect } from 'react-redux';
import * as contactAction from '../../redux/contactsActions';
import ContactList from './ContactList';

const mapStateToProps = state => ({
  contacts: state.phoneBook.contacts,
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(contactAction.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
