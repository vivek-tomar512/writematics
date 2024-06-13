import React from "react";
import { Element } from 'react-scroll';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

function Services() {
  return (
    <Element name="services">
      <div style={{ backgroundColor: "#c5cae9" }}>
        <h2 className="display-4 mb-3 text-center">Services</h2>
        <div className="container-fluid">
          <Row xs={1} sm={2} md={3} className="justify-content-center">
            <Col key={1} className="d-flex justify-content-center mb-4">
              <Card style={{ width: "24rem" }}>
                <Card.Img variant="top" src={img1} height={250} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col key={1} className="d-flex justify-content-center mb-4">
              <Card style={{ width: "24rem" }}>
                <Card.Img variant="top" src={img2} height={250} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col key={1} className="d-flex justify-content-center mb-4">
              <Card style={{ width: "24rem" }}>
                <Card.Img variant="top" src={img3} height={250} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col key={1} className="d-flex justify-content-center mb-4">
              <Card style={{ width: "24rem" }}>
                <Card.Img variant="top" src={img4} height={250} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col key={1} className="d-flex justify-content-center mb-4">
              <Card style={{ width: "24rem" }}>
                <Card.Img variant="top" src={img5} height={250} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col key={1} className="d-flex justify-content-center mb-4">
              <Card style={{ width: "24rem" }}>
                <Card.Img variant="top" src={img6} height={250} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </Element>
  );
}

export default Services;
