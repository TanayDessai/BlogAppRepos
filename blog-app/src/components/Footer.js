import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: tanaydesai@gmail.com</p>
            <p>Phone: 9373001584</p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <div>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={30} style={{ marginRight: 10 }} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={30} style={{ marginRight: 10 }} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={30} />
              </a>
            </div>
          </Col>
          <Col md={4}>
            <h5>Disclaimer</h5>
            <p>This is a sample blog application. All rights reserved.</p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <p className="text-center">
              &copy; {new Date().getFullYear()} Your Blog App
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
