import React from 'react';
import { useSelector } from 'react-redux';
import NewStoriesService from '../../services/newStoriesService';
import Card from 'react-bootstrap/Card';
import newsPlaceholder from '../../assets/news-placeholder.png';
export function NewStories() {
  NewStoriesService();
  const stories = useSelector((state) => state.newStories.stories);
  const paginatedStories = paginate(stories, 12, 1);
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
      {paginatedStories &&
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
        ))}
    </>
  );
}
