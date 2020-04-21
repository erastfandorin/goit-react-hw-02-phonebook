import { connect } from 'react-redux';
import * as contactAction from '../redux/contactsActions';
import * as contactsSelectors from '../redux/contactsSelectors';
import App from './App';

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  addContactWithLocalhost: arrayContacts =>
    dispatch(contactAction.addContactWithLocalhost(arrayContacts)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
