import { ReactElement } from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import SpaLinkComponent from "../spa-link/spa-link.component.tsx";

export default function NavComponent(): ReactElement {
  return (
    <Navbar bg="light" data-bs-theme="light" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">Animatiop</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar" />

        <Navbar.Collapse id="navbar">
          <Nav className="ms-auto">
            <SpaLinkComponent to="/home">Home</SpaLinkComponent>

            <SpaLinkComponent to="/offers">Offers</SpaLinkComponent>

            <SpaLinkComponent to="/categories">Categories</SpaLinkComponent>

            <SpaLinkComponent to="/search">Search</SpaLinkComponent>

            <SpaLinkComponent to="/history">History</SpaLinkComponent>

            <SpaLinkComponent to="/blog">Blog</SpaLinkComponent>

            <SpaLinkComponent to="/profile">Profile</SpaLinkComponent>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
