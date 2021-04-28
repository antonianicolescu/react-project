import React from "react";
import {
  Wrapper,
  Container,
  Logo,
  Navigation,
  Link,
  Icon,
  MenuToggle,
} from "./Header.style";
import logo from "../img/Logo.jpg";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Logo to="/">
          <img src={logo} alt="Logo" />
        </Logo>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/aboutme">About</Link>
          <Link to="/contact">Contact</Link>
          <MenuToggle>
            <Icon icon={faBars} />
          </MenuToggle>
        </Navigation>
      </Container>
    </Wrapper>
  );
};
