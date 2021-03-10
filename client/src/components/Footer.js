import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy; MERN Library {new Date().getFullYear()} by Samuel Nayo
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer;

