import React from 'react';
import { useSelector } from 'react-redux';
import NewStoriesService from '../../services/newStoriesService';
import Card from 'react-bootstrap/Card';

export function NewStories() {
  NewStoriesService();
  const stories = useSelector((state) => state.newStories.stories);

  return (
    <>
      {stories &&
        stories.map((story, key) => (
          <Card style={{ width: '25%' }} key={key}>
            <Card.Img variant='top' src='../../logo.png' />
            <Card.Body>
              <Card.Title>{story.title}</Card.Title>
              <Card.Text>{story.url}</Card.Text>
            </Card.Body>
          </Card>
        ))}
    </>
  );
}
