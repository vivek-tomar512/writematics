import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Element } from "react-scroll";
import "./Hero.css";

const Hero = () => {
  return (
    <Element name="hero">
      <div className="hero-section">
        <Container>
          <Row className="align-items-center text-center">
            <Col>
              <h1 className="hero-title">Welcome to Our WriteMatics</h1>
              <p className="hero-subtitle">We are glad to have you here</p>
              <Button variant="primary" size="lg">
                Get Started
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </Element>
  );
};

export default Hero;
