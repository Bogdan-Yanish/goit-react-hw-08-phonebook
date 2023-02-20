import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'components/Hooks/useAuth';
import { StyledUserMenu, StyledUserName, LogoutBtn } from './UserMenu.styled';
import { IconButton } from '@mui/material';


export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <StyledUserMenu>
            <StyledUserName>Welcome, {user.name}!</StyledUserName>
                <IconButton
                    size="small"
                    edge="start"
                    color="inherit"
                    aria-label="home"
                    onClick={() => dispatch(logOut())}
                >
                    <LogoutBtn/>
                </IconButton>
        </StyledUserMenu>
    );
};