import styled from '@emotion/styled';

export const SectionDiv = styled.div`
  position: relative;
    height: 600px;
    width: 400px;
    border-radius: 20px;
    background: #eeeeee;
    box-shadow: 11px 11px 22px #b3b3b3, -11px -11px 22px #ffffff;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 15px;
`;

export const Div1 = styled.div`
  position: absolute;
      bottom: -300px;
      left: -100px;
      right: 0;
      height: 400px;
      width: 400px;
      border-radius: 50%;
      background: #eee;
      box-shadow: inset 5px 5px 10px #d1cdc7, inset -5px -5px 10px #ffffff;
`;

export const Div2 = styled.div`
  position: absolute;
      top: -300px;
      right: -200px;
      height: 400px;
      width: 400px;
      border-radius: 50%;
      background: #eee;
      box-shadow: inset 5px 5px 10px #d1cdc7, inset -5px -5px 10px #ffffff;
`;