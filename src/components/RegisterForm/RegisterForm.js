import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";
import { Form, FormInput, FormLabel, Btn } from '../ContactForm/ContactForm.styled';
import { Section } from "components/Section/Section";
import { Container } from "components/Container/Container";
import { SectionRegister } from "./RegisterForm.styled";

export const RegisterForm = () => {
    const dispatch = useDispatch();
  
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        console.log(form.elements.name.value);
        dispatch(
        register({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
        })
        );
        form.reset();
    };
  
    return (
        <Container>
        <SectionRegister>
        <Section title="Registration Form">
        <Form onSubmit={handleSubmit} autoComplete="off">
            <FormLabel>
                {/* Name */}
                <FormInput 
                type="text"
                name="name"
                placeholder="Name *" 
                required/>
            </FormLabel>
            <FormLabel>
                {/* Email */}
                <FormInput 
                type="email" 
                name="email"
                placeholder="Email *" 
                required/>
            </FormLabel>
            <FormLabel>
                {/* Password */}
                <FormInput 
                type="password"
                name="password"
                placeholder="Password (more than 7 characters) *"
                required/>
            </FormLabel>
            <Btn type="submit">Sign Up</Btn>
        </Form>
        </Section>
        </SectionRegister>
        </Container>
    );
};