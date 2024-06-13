import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col md={4} className="footer-col">
            <h5>Company</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida.
            </p>
          </Col>
          <Col md={4} className="footer-col">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#hero">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} className="footer-col">
            <h5>Follow Us</h5>
            <ul className="list-unstyled social-links">
              <li><a href="https://facebook.com"><FaFacebook /></a></li>
              <li><a href="https://twitter.com"><FaTwitter /></a></li>
              <li><a href="https://instagram.com"><FaInstagram /></a></li>
              <li><a href="https://linkedin.com"><FaLinkedin /></a></li>
            </ul>
          </Col>
        </Row>
        <Row className="text-center mt-4">
          <Col>
            <p className="mb-0">© {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
