import React from "react";
import PropTypes from "prop-types";
import style from "./Contact.module.css";

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li>
      {contact.name}: {contact.number}
      <button className={style.buttonDelete} onClick={onDeleteContact}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  onDeleteContact: PropTypes.func.isRequired
};

export default Contact;
