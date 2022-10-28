import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

function Footer() {
  return (
    <Navbar bg='light' variant='light'>
      <Container className='footer'>
        <Nav>
          <p>Hacker News &copy; 2022 - All right reserved.</p>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;
