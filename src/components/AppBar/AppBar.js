import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'components/Hooks/useAuth';
import { Header, HeaderContainer} from './AppBar.styled';


export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <HeaderContainer>
        <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </HeaderContainer>
    </Header>
  );
};