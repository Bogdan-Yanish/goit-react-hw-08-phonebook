import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { Form, FormInput, FormLabel, Btn } from './ContactForm.styled';

export const ContactForm = () => {
    const contactsData = useSelector(selectContacts);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChangeForm = event => {
        const {name, value} = event.currentTarget;
        switch (name) {
            case 'name':
                setName(value);                
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        
        if (contactsData.findIndex(contact => name === contact.name) !== -1) {
            alert(`${name} is already in contacts.`)
            setName('');
        } else {
            dispatch(addContact({ name, number }));
            resetForm();
        }
    };

    const resetForm = () => {
        setName('');
        setNumber('');
    }

    return (
            <Form onSubmit={handleSubmit}>
                <FormLabel>Name</FormLabel>
                <FormInput
                    value={name}
                    onChange={handleChangeForm}
                    name="name"
                    type="text"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <FormLabel>Number</FormLabel>
                <FormInput
                    value={number}
                    onChange={handleChangeForm}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                <Btn type="submit">Add Contact</Btn>
            </Form>
            
        
    )
}



