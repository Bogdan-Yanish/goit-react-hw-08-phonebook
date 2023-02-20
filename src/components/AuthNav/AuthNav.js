import { StyledLink } from "./AuthNav.styled";

export const AuthNav = () => {
    return (
      <nav>
        <StyledLink to="/register">Sign Up</StyledLink>
        <StyledLink to="/login">Log In</StyledLink>
      </nav>
    );
  };