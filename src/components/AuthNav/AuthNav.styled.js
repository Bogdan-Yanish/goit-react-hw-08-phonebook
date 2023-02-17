import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  color: blue;
  &.active {
    color: red;
  }
  & + & {
    margin-left: 1rem;
  }
`;

