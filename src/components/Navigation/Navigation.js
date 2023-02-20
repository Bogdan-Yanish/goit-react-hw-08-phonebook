import { StyledLink, StyledHomeIcon, NavigationList } from './Navigation.styled';
import { useAuth } from 'components/Hooks/useAuth';
import { IconButton } from '@mui/material';

export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <nav>
            <NavigationList>
            <StyledLink to="/">
                <IconButton
                    size="small"
                    edge="start"
                    color="inherit"
                    aria-label="home"
                >
                    <StyledHomeIcon/>
                </IconButton>
            </StyledLink>
            {isLoggedIn && (
                <StyledLink to="/Contacts">
                    My Contacts
                </StyledLink>
            )}
            </NavigationList>
        </nav>
        
    );
};