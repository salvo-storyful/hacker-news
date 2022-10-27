import React from 'react';
import { useSelector } from 'react-redux';
import NewStoriesService from '../../services/newStoriesService';
import BestStoriesService from '../../services/bestStoriesService';
import TopStoriesService from '../../services/topStoriesService';
import Card from 'react-bootstrap/Card';
import newsPlaceholder from '../../assets/news-placeholder.png';
import loading from '../../assets/loading.gif';

export function Stories({ currentPage, storyType }) {
  /* NOTES:

  I couldn't find the time to improve this API call
  for the stories service. Ideally, one would only call
  the service for the page they need to load and would
  only load the amount of stories needed for one page.
  However, after trying several methods including 
  moving the pagination inside each of the service file
  where the API calls take place in order to only query 
  for 12 stories at the time, I decided to let it go and
  spend the rest of my very limited time building
  other things.
  This explains why pages are loading so slow, because
  the following 3 services are loading 3 x 500 stories
  all at the same time.
  */

  NewStoriesService();
  BestStoriesService();
  TopStoriesService();

  // storyType === 'newStories' && NewStoriesService();
  // storyType === 'bestStories' && BestStoriesService();
  // storyType === 'topStories' && TopStoriesService();

  const stories = useSelector((state) => {
    switch (storyType) {
      case 'newStories':
        //NewStoriesService();
        return state.newStories.stories;
      case 'bestStories':
        //BestStoriesService();
        return state.bestStories.stories;
      case 'topStories':
        //TopStoriesService();
        return state.topStories.stories;
      default:
        break;
    }
  });

  const paginatedStories = paginate(stories, 12, currentPage);

  function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  const getDomain = (url) => {
    const originalURL = new URL(url);
    const domain = originalURL.hostname;
    return domain;
  };

  return (
    <>
      {paginatedStories.length ? (
        paginatedStories.map((story, key) => (
          <Card key={key}>
            <a target='_blank' rel='noreferrer' href={story.url}>
              <Card.Img variant='top' src={newsPlaceholder} />
              <Card.Body>
                <Card.Title>{story.title}</Card.Title>
                <Card.Text>
                  <span>
                    {story.score} {story.score === 1 ? 'point' : 'points'}
                  </span>
                  <span>{story.url && getDomain(story.url)}</span>
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
        ))
      ) : (
        <div className='loading'>
          <span className='loading-inner'>
            <img src={loading} alt='loading' />
            <p>Loading...</p>
          </span>
        </div>
      )}
    </>
  );
}
