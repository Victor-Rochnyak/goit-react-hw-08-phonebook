// import styled from '@emotion/styled';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderLink = styled(NavLink)`
  color: #000000;
  margin-right: 10px;
  text-decoration: none;
  &.active {
    
    color: ${p => p.theme.colors.muted};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.muted};
    
  }
`;

export const Nav = styled.nav``;
