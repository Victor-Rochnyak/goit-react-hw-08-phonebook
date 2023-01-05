import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'Hooks/useAuth';

import { AppHeader } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <AppHeader>
        <Navigation />
      </AppHeader>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </>
  );
};
