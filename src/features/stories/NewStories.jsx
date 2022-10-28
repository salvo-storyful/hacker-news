import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from 'react-bootstrap/Pagination';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';
import NewStoriesService from '../../services/newStoriesService';
import Card from 'react-bootstrap/Card';
import newsPlaceholder from '../../assets/news-placeholder.png';
import loading from '../../assets/loading.gif';
import TimeAgo from 'javascript-time-ago';

/* NOTES:

  I couldn't find the time to improve this API call
  for the stories service. Ideally, one would only 
  load the amount of stories needed for one page (eg. 12).
  However, after trying several methods including 
  moving the pagination inside each of the service file
  where the API calls take place in order to only query 
  for 12 stories at the time, I decided to let it go and
  spend the rest of my very limited time building
  other things. This explains why pages are loading so slow, 
  because each of them is loading 500 stories at the time.
  
  Finding time was my actual challenge. I spent about 
  2 hours per day, usually after a full day of work 
  when I was already very tired, Monday to Thursday and
  a few hours on Friday morning. That would make about
  10 hours to build an entire website from scratch, 
  which is not a complex task but I found it quite
  time consuming and that explains the lack of other
  features. 
  
  */

export function NewStories({ sortBy }) {
  NewStoriesService();
  const timeAgo = new TimeAgo('en-US');
  const stories = useSelector((state) => state.newStories.stories);
  const [sortedStories, setSortedStories] = useState([]);
  const totalStories = 500; // Using stories.length was causing an issue to the pagination buttons
  const storiesperPage = 12;
  const totalPages =
    Math.floor(totalStories / storiesperPage) +
    (totalStories % storiesperPage && +1);

  const [currentPage, setCurrentPage] = useState(1);
  const [navigationButtons, setNavigationButtons] = useState([]);
  const paginatedStories = paginate(sortedStories, 12, currentPage);

  function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  const getDomain = (url) => {
    const originalURL = new URL(url);
    const domain = originalURL.hostname;
    return domain;
  };

  useEffect(() => {
    switch (sortBy) {
      case 'newFirst':
        setSortedStories([...stories].sort((a, b) => b.time - a.time));
        break;
      case 'oldFirst':
        setSortedStories([...stories].sort((a, b) => a.time - b.time));
        break;
      case 'highFirst':
        setSortedStories([...stories].sort((a, b) => b.score - a.score));
        break;
      case 'lowFirst':
        setSortedStories([...stories].sort((a, b) => a.score - b.score));
        break;
      default:
        break;
    }
  }, [sortBy, stories]);

  useEffect(() => {
    let items = [];
    const position = currentPage > 3 ? currentPage - 2 : 1;
    const maxNumbers = currentPage > 3 ? currentPage + 2 : 5;
    for (let number = position; number <= maxNumbers; number++) {
      if (number <= totalPages) {
        items.push(
          <Pagination.Item
            key={number}
            active={number === currentPage}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </Pagination.Item>
        );
      }
    }
    setNavigationButtons(items);
  }, [currentPage, totalPages]);

  return (
    <>
      <Row>
        <h2>Latest stories</h2>
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
                    <span>{timeAgo.format(Date.now() - story.time)}</span>
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
      </Row>
      <Row>
        <Pagination>
          {currentPage > 2 && (
            <Pagination.First onClick={() => setCurrentPage(1)} />
          )}
          {currentPage > 1 && (
            <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} />
          )}
          {currentPage > 3 && <Pagination.Ellipsis />}
          {navigationButtons}
          {currentPage <= totalPages - 3 && <Pagination.Ellipsis />}
          {currentPage < totalPages - 1 && (
            <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} />
          )}
          {currentPage < totalPages - 2 && (
            <Pagination.Last onClick={() => setCurrentPage(totalPages)} />
          )}
        </Pagination>
      </Row>
    </>
  );
}
