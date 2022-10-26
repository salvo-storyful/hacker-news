import MainMenu from './components/MainMenu';
import Body from './components/Body';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styles/styles.css';

function App() {
  return (
    <div className='App'>
      <MainMenu />
      <Navbar bg='light' variant='light'>
        <Container>
          <Nav className='me-auto'>
            <Nav.Link href='#new'>New</Nav.Link>
            <Nav.Link href='#past'>Past</Nav.Link>
            <Nav.Link href='#comments'>Comments</Nav.Link>
            <Nav.Link href='#ask'>Ask</Nav.Link>
            <Nav.Link href='#show'>Show</Nav.Link>
            <Nav.Link href='#job'>Job</Nav.Link>
            <Nav.Link href='#submit'>Submit</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
