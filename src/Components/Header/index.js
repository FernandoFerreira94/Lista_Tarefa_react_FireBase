import React from "react";
import { Link } from "react-router-dom";
import { Ablack, Ared, Nav } from "./styled";

export default function Header() {
  return (
    <header>
      <Nav>
        <Nav>
          <span>Logo</span>
        </Nav>
        <Nav>
          <Ablack to="/">Homi</Ablack>
          <Ared to="/register">Register</Ared>
        </Nav>
      </Nav>
    </header>
  );
}
