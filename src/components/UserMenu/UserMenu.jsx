import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'Hooks/useAuth'; 

import { UserMenuBox, Salut, BtnLogOut } from "./UserMenu.styled";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuBox>
      <Salut>Welcome, {user.name}</Salut>
      <BtnLogOut type="button" onClick={() => dispatch(logOut())}>
        Logout
      </BtnLogOut>
    </UserMenuBox>
  );
};
