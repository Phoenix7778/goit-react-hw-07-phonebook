import { ContactsForm } from './contactsForm/ContactsForm';
import { ContactsList } from './contactsList/ContactsList';
import { Filter } from './contactsFilter/ContactsFilter';

export const App = () => {
  return (
    <div
      style={{
        padding: '15px',
      }}
    >
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};
