import React, {Component} from "react";
import { nanoid } from "nanoid";

import { Container } from "./Container/Container";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./Contact/ContactList";

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }

handleChange = event => {
  const { name, value } = event.target;
  this.setState({ [name]: value });
};

addContact = (name, number) => {
  const contactsList = [...this.state.contacts];
  //   this.setState(({ contacts }) => ({
  //   contacts: [...contacts, {id:nanoid(), name, number}],
  // }));
    
  if (contactsList.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
  } else {
      this.setState(({ contacts }) => ({
      contacts: [...contacts, {id:nanoid(), name, number}],
    }));
}
}

// handleIsContact = name => {
//   const { contacts } = this.state;
//   const isContact = contacts.find(contact => contact.name === name);
//   isContact && alert(`${name} is already in contacts.`);
//   return isContact;
// };

HandleDeleteContact = contactId =>
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
        <h1>Phonebook</h1>
        <ContactForm 
        onSubmit={this.addContact}
        />

        <h2>Contacts</h2>

        <Filter 
        filter={this.state.filter}
        handleChange={this.handleChange}/>

        <ContactList 
        contacts={this.filteredContacts()}
        handleDelete={this.HandleDeleteContact} />
    </Container>
    
    
  )
}
}



