import React from 'react';
import PropTypes from 'prop-types';

const Contacts = ({ contacts }) => {
  return (
    <ul className='contact list'>
      {contacts.map((contact, index) => (
        <li key={index}>
          <strong>{contact.Type}:</strong> {contact.Value}
        </li>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      Type: PropTypes.string.isRequired,
      Value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Contacts;