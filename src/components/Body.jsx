import Container from 'react-bootstrap/Container';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NewStories } from '../features/stories/NewStories';
import { BestStories } from '../features/stories/BestStories';
import { TopStories } from '../features/stories/TopStories';

function Body({ storyType, sortBy }) {
  return (
    <Container className='stories-grid'>
      {storyType === 'newStories' && <NewStories sortBy={sortBy} />}
      {storyType === 'bestStories' && <BestStories sortBy={sortBy} />}
      {storyType === 'topStories' && <TopStories sortBy={sortBy} />}
    </Container>
  );
}

export default Body;
