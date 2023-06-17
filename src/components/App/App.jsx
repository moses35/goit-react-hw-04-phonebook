import { useEffect, useState } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container } from 'components/App/App.styled';
import { nanoid } from 'nanoid';
import initialContacts from 'initialContacts.json';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('Phonebook')) ?? initialContacts;
  });
  const [filter, setFilter] = useState('');

  const formSubmitHandler = data => {
    duplicatedContact(data);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizaFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizaFilter)
    );
  };

  const duplicatedContact = data => {
    const normalizaName = data.name.toLocaleLowerCase();

    //check for duplicate name
    const result = contacts.find(
      contact => normalizaName === contact.name.toLocaleLowerCase()
    );

    //checking if find() return 'object'
    if (typeof result === 'object') {
      window.alert(result.name + ' is already in contacts');
    } else {
      data.id = nanoid();

      setContacts(prevContacts => {
        return [...prevContacts, data];
      });
    }
  };

  const deleteConatact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  useEffect(() => {
    localStorage.setItem('Phonebook', JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        {contacts.length > 0 ? (
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={deleteConatact}
          />
        ) : (
          <p>No contacts</p>
        )}
      </div>
    </Container>
  );
};
