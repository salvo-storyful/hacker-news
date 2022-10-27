import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from 'react-bootstrap/Pagination';
import { NewStories } from '../features/stories/NewStories';

function Body() {
  const totalStories = 500;
  const storiesperPage = 12;
  const totalPages =
    Math.floor(totalStories / storiesperPage) +
    (totalStories % storiesperPage && +1);

  const [currentPage, setCurrentPage] = useState(1);
  const [navigationButtons, setNavigationButtons] = useState([]);

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
    <Container className='stories-grid'>
      <Row>
        <NewStories currentPage={currentPage} />
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
    </Container>
  );
}

export default Body;
