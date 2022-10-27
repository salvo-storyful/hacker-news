import MainMenu from './components/MainMenu';
import Body from './components/Body';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import './styles/styles.css';

function App() {
  const [storyType, setStoryType] = useState('newStories');

  return (
    <div className='App'>
      <MainMenu />
      <Navbar bg='light' variant='light'>
        <Container>
          <Nav>
            <Button
              className='story-type-selector'
              variant='secondary'
              onClick={() => setStoryType('newStories')}
            >
              Latest
            </Button>
            <Button
              className='story-type-selector'
              variant='secondary'
              onClick={() => setStoryType('bestStories')}
            >
              Best
            </Button>
            <Button
              className='story-type-selector'
              variant='secondary'
              onClick={() => setStoryType('topStories')}
            >
              Top
            </Button>
          </Nav>
        </Container>
      </Navbar>
      <Body storyType={storyType} />
      <Footer />
    </div>
  );
}

export default App;
