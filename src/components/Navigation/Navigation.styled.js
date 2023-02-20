import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Home } from '@mui/icons-material';

export const StyledLink = styled(NavLink)`
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  
  &.active {
    text-decoration: underline;
  }
`;

export const StyledHomeIcon = styled(Home)`
  color:white;
`;

export const NavigationList = styled.ul`
  display: flex;
  align-items:center;
  gap:15px;
`