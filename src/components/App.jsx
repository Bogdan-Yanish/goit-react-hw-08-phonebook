import React, {useState} from "react";
import { nanoid } from "nanoid";
import { useLocalStorage } from "./Hooks/UseLocalStorage";

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
      alert(`${name} is already in contacts.`);
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
    </Container>
  )
}






