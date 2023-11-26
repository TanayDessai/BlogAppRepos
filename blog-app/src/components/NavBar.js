// NavbarComponent.js
import React,{useState} from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = ({onSearch}) => {

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
      onSearch(searchQuery);
    };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Blogs</Navbar.Brand>
        <Form className="d-flex">
          <FormControl
            type="text"
            placeholder="Search..."
            className="me-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button variant="outline-primary" onClick={handleSearch}>
            Search
          </Button>
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto">
            <Link to="/add" className="nav-link">
              <Button variant="outline-success">ADD POST</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
