import React, {useState} from "react";
import { nanoid } from "nanoid";
import { useLocalStorage } from "./Hooks/UseLocalStorage";
import toast, { Toaster } from 'react-hot-toast';

import { Container } from "./Container/Container";
import { Section } from "./Section/Section";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./Contact/ContactList/ContactList";

export const App = () => {
  
  const [contacts, setcontacts] = useLocalStorage('contacts', []);
  const [filter, setfilter] = useState('');

  const handleChange = event => {
    setfilter(event.target.value);
};

  const addContact = (name, number) => {
    const contactsList = [...contacts];
    
    if (contactsList.findIndex(contact => name === contact.name) !== -1) {
      toast(`${name} is already in contacts.`, {
        duration: 3000,
        style: {
        border: '1px solid transparent',
        padding: '16px',
        color: 'red',
        width: '300px',
    },
  });
      
    } else {
      contactsList.push({ id:nanoid(), name, number });
    }

    setcontacts(contactsList);
};

  const deleteContact = contactId =>
    setcontacts(contacts.filter(contact => contact.id !== contactId));

  const filteredContacts = () => {
    return contacts.filter(contact =>
        contact.name
        .toLowerCase()
        .includes(filter.toLocaleLowerCase())
      );
    };


  return (
    <Container>
        <Section title="Phonebook">
            <ContactForm 
              onSubmit={addContact}
            />
        </Section>

        {!!contacts.length && (
            <Section title="Contacts">
              <Filter 
                filter={filter}
                handleChange={handleChange}
                />
              <ContactList 
                contacts={filteredContacts()}
                handleDelete={deleteContact} />
            </Section>
        )}

        <Toaster 
          position="top-center"/>

    </Container>
  )
}






