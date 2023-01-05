import styled from '@emotion/styled';

export const AppBarBox = styled.header`
  position: relative;
  padding: 5px 0;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;

  /* height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; */

  ::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    background-color: #ffffff;
  }
`;
