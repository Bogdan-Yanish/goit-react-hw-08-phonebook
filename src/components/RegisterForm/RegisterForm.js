import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";

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
        <form onSubmit={handleSubmit} autoComplete="off">
            <label>
                Name
                <input 
                type="text"
                name="name"
                placeholder="Enter your name..." 
                required/>
            </label>
            <label>
                Email
                <input 
                type="email" 
                name="email"
                placeholder="Enter your email..." 
                required/>
            </label>
            <label>
                Password
                <input 
                type="password"
                name="password"
                placeholder="***more than 7 characters"
                required/>
            </label>
            <button type="submit">Register</button>
        </form>
    );
};