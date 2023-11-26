import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled(Navbar)`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledBrand = styled(Navbar.Brand)`
  font-family: "Poppins";
  font-size: 24px;
  font-weight: bold;
`;

const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
`;

const StyledButton = styled(Button)`
  margin-left: 10px;
`;

const NavBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <StyledNavbar bg="light" expand="lg">
      <Container>
        <StyledBrand href="/">Blogs..</StyledBrand>
        <StyledForm className="d-flex">
          <FormControl
            type="text"
            placeholder="Search..."
            className="me-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <StyledButton variant="outline-primary" onClick={handleSearch}>
            Search
          </StyledButton>
        </StyledForm>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto">
            <Link to="/add" className="nav-link">
              <Button variant="outline-success">ADD POST</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default NavBar;
