// import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filterContacts.map(contact => (
        <li
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '350px',
            justifyContent: 'space-between',
          }}
          key={contact.id}
          contact={contact}
        >
          <p>
            {contact.name}: {contact.number}
          </p>
          <button
            style={{
              padding: '5px',
              width: '100px',
              height: '30px',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
