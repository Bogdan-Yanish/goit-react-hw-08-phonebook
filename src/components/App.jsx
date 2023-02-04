import React from "react";
import { Container } from "./Container/Container";
import { Section } from "./Section/Section";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./Contact/ContactList/ContactList";
import { useSelector } from "react-redux";
import { getContacts } from "redux/selectors";

export const App = () => {
  
  const contactsData = useSelector(getContacts);
  
  return (
    <Container>
        <Section title="Phonebook">
            <ContactForm/>
        </Section>

        {!!contactsData.length && (
            <Section title="Contacts">
              <Filter />
              <ContactList/>
            </Section>
        )}
    </Container>
  )
}






