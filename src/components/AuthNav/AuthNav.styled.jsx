import styled from 'styled-components';
// import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  
  &.active {
  
    color: ${p => p.theme.colors.muted};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.muted};
    
  }
`;
export const Navigation = styled.div`
  display: flex;
  transform: translateY(313px);
  justify-content: space-evenly;
`;
