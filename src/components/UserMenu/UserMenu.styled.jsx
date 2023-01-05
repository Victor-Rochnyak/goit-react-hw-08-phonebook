// import styled from '@emotion/styled';
import styled from 'styled-components';

export const UserMenuBox = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
`;

export const Salut = styled.p`
  color: #1b1919;
  
`;

export const BtnLogOut = styled.button`
font-size: 15px;
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #a12424;
  /* transition: color 300ms ease-out; */
  /* margin-left: 50px; */
  
  :hover {
    color: ${p=>p.theme.colors.muted}
    
  }
`;
