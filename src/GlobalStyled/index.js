import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family:sans-serif;
    color: #fff;
  }


body{
    background-color:#15171a;
    width: 100%;
    margin: 0 auto;
    height: 100dvh;
}

button{
  cursor: pointer;
}

a {
  text-decoration: none; 
cursor: pointer;
}



`;

export const BodyCenter = styled.body`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid blue;
  height: 100dvh;
  width: 80%;
  margin: 0 auto;
`;
