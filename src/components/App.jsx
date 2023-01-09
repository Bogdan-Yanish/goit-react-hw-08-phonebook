import React, {Component} from "react";
import { nanoid } from "nanoid";

import { Container } from "./Container/Container";
import { Section } from "./Section/Section";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./Contact/ContactList/ContactList";

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''   
  }

componentDidMount() {
  const contactsList = JSON.parse(localStorage.getItem('contacts'));
  if (contactsList) {
    this.setState({contacts: contactsList});
  }
}

componentDidUpdate(_, prevState) {
  if (
    prevState.contacts !== this.state.contacts
      ) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
}

handleChange = event => {
  const { name, value } = event.target;
  this.setState({ [name]: value });
};

addContact = (name, number) => {
  const contactsList = [...this.state.contacts];
  if (contactsList.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
  } else {
      this.setState(({ contacts }) => ({
      contacts: [...contacts, {id:nanoid(), name, number}],
    }));
}
};

deleteContact = contactId =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));

filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
        contact.name
        .toLowerCase()
        .includes(filter.toLocaleLowerCase())
      );
    };

render() {
  return (
    <Container>
        <Section title="Phonebook">
            <ContactForm 
              onSubmit={this.addContact}
            />
        </Section>

        {!!this.state.contacts.length && (
            <Section title="Contacts">
              <Filter 
                filter={this.state.filter}
                handleChange={this.handleChange}/>
              <ContactList 
                contacts={this.filteredContacts()}
                handleDelete={this.deleteContact} />
            </Section>
        )}
    </Container>
  )
}
}





