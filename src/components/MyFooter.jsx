import React from 'react';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const MyFooter = () => {
  return (
    <footer className="bg-dark text-white">
      <Container>
        <Row className="p-3">
          <Col xs={12}>
            <Nav className="justify-content-center">
              <Nav.Item className="ms-3">
                <Nav.Link href="#" className="link-secondary p-0">
                <FaFacebook size={24}  />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="ms-3">
                <Nav.Link href="#" className="link-secondary p-0">
                <FaTwitter size={24} />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="ms-3">
                <Nav.Link href="#" className="link-secondary p-0">
                <FaInstagram  size={24}/>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="ms-3">
                <Nav.Link href="#" className="link-secondary p-0">
                <FaYoutube size={24}/>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col xs={6} md={3} className="mb-3 mt-3">
            <Nav className="flex-column">
              <Nav.Link href="#" className="p-0 link-secondary">Audio and Subtitles</Nav.Link>
              <Nav.Link href="#" className="p-0 link-secondary">Media Center</Nav.Link>
              <Nav.Link href="#" className="p-0 link-secondary">Privacy</Nav.Link>
              <Nav.Link href="#" className="p-0 link-secondary">Contact Us</Nav.Link>
            </Nav>
          </Col>
          <Col xs={6} md={3} className="mb-3 mt-3">
            <Nav className="flex-column">
              <Nav.Link href="#" className="p-0 link-secondary">Audio Description</Nav.Link>
              <Nav.Link href="#" className="p-0 link-secondary">Investor Relations</Nav.Link>
              <Nav.Link href="#" className="p-0 link-secondary">Legal Notices</Nav.Link>
            </Nav>
          </Col>
          <Col xs={6} md={3} className="mb-3 mt-3">
            <Nav className="flex-column">
              <Nav.Link href="#" className="p-0 link-secondary">Help Center</Nav.Link>
              <Nav.Link href="#" className="p-0 link-secondary">Jobs</Nav.Link>
              <Nav.Link href="#" className="p-0 link-secondary">Cookie Preferences</Nav.Link>
            </Nav>
          </Col>
          <Col xs={6} md={3} className="mb-3 mt-3">
            <Nav className="flex-column">
              <Nav.Link href="#" className="p-0 link-secondary">Gift Cards</Nav.Link>
              <Nav.Link href="#" className="p-0 link-secondary">Terms of Use</Nav.Link>
              <Nav.Link href="#" className="p-0 link-secondary">Corporate Information</Nav.Link>
            </Nav>
          </Col>
          <Col xs={12} className="text-center">
            <Button variant="secondary" className="bg-dark text-secondary">Service Code</Button>
            <p className="text-secondary mt-3">© 1997-2024 Netflix, Inc.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
