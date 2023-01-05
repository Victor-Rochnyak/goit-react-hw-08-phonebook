// import styled from '@emotion/styled';
import styled from 'styled-components';
export const Label = styled.label`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  margin-left: 3px;
  background-color: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  border-image: initial;
  border-bottom: 2px solid rgb(22, 69, 197);
  outline: none;
  /* text-align: center; */

  ::placeholder {
    text-align: start;
    color: #c24712;
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
