import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0;
  height: 50px;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.8) 25%, #15171a);
  width: 100%;
`;

export const Ared = styled.a`
  transition: all 1s;
  cursor: pointer;
  &:hover {
    color: red;
    transform: scale(1.08);
  }
`;

export const Ablack = styled.a`
  transition: all 0.8s;
  cursor: pointer;
  &:hover {
    transform: scale(1.08);
  }
`;
