import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  margin-top: 5em;
`;

const StyledH5 = styled.h5`
  color: #fff;
`;

const StyledTextCenter = styled.p`
  color: #fff;
  font-size: 18px;
`;

const Footer = () => {
  return (
    <StyledFooter >
      <Container>
        <Row>
          <Col md={4}>
            <StyledH5>Contact Us</StyledH5>
            <p>Email: tanaydesai@gmail.com</p>
            <p>Phone: 9373001584</p>
          </Col>
          <Col md={4}>
            <StyledH5>Follow Us</StyledH5>
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
            <StyledH5>Disclaimer</StyledH5>
            <p>This is a sample blog application. All rights reserved.</p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <StyledTextCenter>
              &copy; {new Date().getFullYear()} Your Blog App
            </StyledTextCenter>
          </Col>
        </Row>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
