import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  color: white;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  
  &.active {
    text-decoration: underline;
  }

  & + & {
    margin-left: 15px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

