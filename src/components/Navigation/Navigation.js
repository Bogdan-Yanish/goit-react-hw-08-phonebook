import { StyledLink } from './Navigation.styled';
import { useAuth } from 'components/Hooks/useAuth';

export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <nav>
            <StyledLink to="/">
                Home
            </StyledLink>
            {isLoggedIn && (
                <StyledLink to="/Contacts">
                    My Contacts
                </StyledLink>
            )}
        </nav>
    );
};