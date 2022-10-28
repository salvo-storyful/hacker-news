import MainMenu from './components/MainMenu';
import Body from './components/Body';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import './styles/styles.css';
import Dropdown from 'react-bootstrap/Dropdown';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

function App() {
  TimeAgo.setDefaultLocale(en.locale);
  TimeAgo.addLocale(en);
  const [storyType, setStoryType] = useState('newStories');
  const [sortBy, setSortBy] = useState('newFirst');

  return (
    <div className='App'>
      <MainMenu />
      <Navbar bg='light' variant='light'>
        <Container>
          <Nav className='top-nav'>
            <span className='menu-label'>Filter by:</span>
            <Dropdown>
              <Dropdown.Toggle
                id='dropdown-button-dark-example1'
                variant='secondary'
              >
                {storyType === 'newStories' && 'Latest'}
                {storyType === 'bestStories' && 'Best'}
                {storyType === 'topStories' && 'Top & Jobs'}
              </Dropdown.Toggle>

              <Dropdown.Menu variant='dark'>
                <Dropdown.Item onClick={() => setStoryType('newStories')}>
                  Latest
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setStoryType('bestStories')}>
                  Best
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setStoryType('topStories')}>
                  Top & Jobs
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <span className='menu-label'>Sort by:</span>
            <Dropdown>
              <Dropdown.Toggle
                id='dropdown-button-dark-example1'
                variant='secondary'
              >
                {sortBy === 'newFirst' && 'New stories'}
                {sortBy === 'oldFirst' && 'Old stories'}
                {sortBy === 'highFirst' && 'High score'}
                {sortBy === 'lowFirst' && 'Low score'}
              </Dropdown.Toggle>

              <Dropdown.Menu variant='dark'>
                <Dropdown.Item onClick={() => setSortBy('newFirst')}>
                  New Stories
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortBy('oldFirst')}>
                  Old Stories
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortBy('highFirst')}>
                  High score
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortBy('lowFirst')}>
                  Low score
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
      <Body storyType={storyType} sortBy={sortBy} />
      <Footer />
    </div>
  );
}

export default App;
