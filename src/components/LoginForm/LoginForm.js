import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import { Form, FormInput, FormLabel, Btn } from '../ContactForm/ContactForm.styled';
import { Section } from "components/Section/Section";
import { Container } from "components/Container/Container";
import { SectionRegister } from "components/RegisterForm/RegisterForm.styled";


export const LoginForm = () => {
    const dispatch = useDispatch();
  
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        dispatch(
        logIn({
            email: form.elements.email.value,
            password: form.elements.password.value,
        })
    );
        form.reset();
    };

    return (
        <Container>
            <SectionRegister>
            <Section title="">
            <Form onSubmit={handleSubmit} autoComplete="off">
                <FormLabel>
                    {/* Email */}
                    <FormInput 
                    type="email" 
                    name="email" 
                    placeholder="Enter your email..."
                    required
                    />
                </FormLabel>
                <FormLabel>
                    {/* Password */}
                    <FormInput 
                    type="password" 
                    name="password" 
                    placeholder="Enter your password..."
                    required
                    />
                </FormLabel>
                <Btn type="submit">Log In</Btn>
            </Form>
            </Section>
            </SectionRegister>
        </Container>
        
    );
};