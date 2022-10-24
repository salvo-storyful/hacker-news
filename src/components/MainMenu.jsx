import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../logo.png';
import Nav from 'react-bootstrap/Nav';

function MainMenu() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='/'>
          <img
            alt=''
            src={logo}
            width='30'
            height='30'
            className='d-inline-block align-top'
          />{' '}
          Hacker News
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Nav.Link href='#'>
            <Navbar.Text>Log in / Sign up</Navbar.Text>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainMenu;
