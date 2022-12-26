import propTypes from 'prop-types';
import { Form, FormInput, FormLabel, Btn } from './ContactForm.styled';

export const ContactForm = ( { onSubmit } ) => {

    const handleSubmit = event => {
        event.preventDefault();
        const input = event.currentTarget;
        const { name, number } = event.target.elements;
        onSubmit(
            name.value,
            number.value
        );
        input.reset();
    };

    return (
            <Form onSubmit={handleSubmit}>
                <FormLabel>Name</FormLabel>
                <FormInput
                    name="name"
                    type="text"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <FormLabel>Number</FormLabel>
                <FormInput
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

ContactForm.propTypes = {
    onSubmit:propTypes.func.isRequired,
}

