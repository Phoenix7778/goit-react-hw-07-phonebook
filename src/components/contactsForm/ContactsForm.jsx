import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addNewContact } from 'redux/operations';
import { Label, Input, Button } from './ContactsForm.styled';

export const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
    }
  };

  const onSubmit = event => {
    event.preventDefault();

    const exist = contacts.find(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    exist
      ? alert(`${name} is already in contacts`)
      : dispatch(addNewContact({ name, number }));
    onReset();
  };

  const onReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid black',
        width: '500px',
        padding: '20px',
        gap: '20px',
      }}
      action=""
      onSubmit={onSubmit}
    >
      <Label htmlFor="" name="name">
        Name
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={onChange}
          required
        />
      </Label>

      <Label htmlFor="" name="number">
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={onChange}
          required
        />
      </Label>

      <Button type="submit" onSubmit={onSubmit}>
        Add contact
      </Button>
    </form>
  );
};

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
