
import { useAuth } from 'Hooks/useAuth'; 
import React from "react";
import { HeaderLink } from "./Navigation.styled";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <HeaderLink to="/">Home</HeaderLink>
      {isLoggedIn && <HeaderLink to="/contacts">Contacts</HeaderLink>}
    </nav>
  );
};
