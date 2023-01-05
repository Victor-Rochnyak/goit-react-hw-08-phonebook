// import styled from '@emotion/styled';
import styled from 'styled-components';
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 5px;
  max-height: 367px;
  overflow-y: auto;
  box-shadow: inset 5px 5px 10px #d1cdc7, inset -2.5px -2.5px 5px #ffffff;
  border-radius: 5px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  background-color: #d89b2a;
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 5px;
  transition: all 300ms ease 0s;
  box-shadow: #2fe6be;
  align-items: center;
  box-shadow: rgb(0 0 0) 0px 1px 5px;

  &:hover {
    color: rgb(255, 255, 255);
    background: linear-gradient(
      281deg,
      rgb(23 145 128) 0%,
      rgb(59 207 70) 100%
    );
    scale: 1.01;
    color: white;
    box-shadow: rgb(0 0 0 / 89%) 0px 7px 10px;
  }
`;

export const Button = styled.button`
  border-radius: 5px;
  border: 1px solid rgba(14, 185, 190, 0.925);
  transition: all 250ms ease 0s;
  &:hover {
    color: rgb(255, 255, 255);
    background: linear-gradient(
      281deg,
      rgb(23 145 128) 0%,
      rgb(59 207 70) 100%
    );
  }
`;
