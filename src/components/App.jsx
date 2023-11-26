import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { ContactList } from '../components/ContactList/ContactList';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Section } from '../components/Section/Section';
import { Filter } from '../components/Filter/Filter';

import css from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmit = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const enterContact = contacts.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );

    enterContact
      ? alert(`${name} is already in contact`)
      : setContacts([contact, ...contacts]);
  };

  const onChange = e => {
    setFilter(e.target.value);
  };

  const findContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
    setFilter('');
  };

  return (
    <div className={css.container}>
      <Section title="Phonebook">
        <ContactForm onSubmit={formSubmit}/>
      </Section>

      <Section title="Contacts">
        {contacts.length > 0 ? (
          <Filter filter={filter} onChange={onChange} />
        ) : (
          <p>Contact list is empty.</p>
        )}
        <ContactList contacts={findContacts()} deleteContact={deleteContact} />
      </Section>
    </div>
  );
};

export default App;