import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from 'react-bootstrap/Pagination';
import { NewStories } from '../features/stories/NewStories';

function Body() {
  const [active, setActive] = useState(1);
  const [navigationButtons, setNavigationButtons] = useState([]);

  useEffect(() => {
    let items = [];
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === active}
          onClick={() => setActive(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
    setNavigationButtons(items);
  }, [active]);
  return (
    <Container className='stories-grid'>
      <Row>
        <NewStories />
      </Row>
      <Row>
        <Pagination>
          {/* <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last /> */}

          {active > 2 && <Pagination.First />}
          {active > 1 && <Pagination.Prev />}
          {navigationButtons}
        </Pagination>
      </Row>
    </Container>
  );
}

export default Body;
