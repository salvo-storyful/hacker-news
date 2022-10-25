import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from 'react-bootstrap/Pagination';
import { useState } from 'react';
import {
  getMaxItem,
  getTopStories,
  getBestStories,
  getNewStories,
} from '../api/storiesApi';

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

function Body() {
  const [maxItem, setMaxItem] = useState(getMaxItem);
  const [topStories, setTopStories] = useState(getTopStories);
  const [bestStories, setBestStories] = useState(getBestStories);
  const [newStories, setNewStories] = useState(getNewStories);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  // getMaxItem();
  // getTopStories();
  // getBestStories();
  // getNewStories();
  // }, []);

  // useEffect(() => {
  //   console.log('maxItem: ', maxItem);
  //   console.log('topStories', topStories);
  //   console.log('bestStories', bestStories);
  //   console.log('newStories', newStories);
  // }, [maxItem, topStories, bestStories, newStories]);
  console.log('newStories', newStories);

  return (
    <Container>
      <Row>
        <Col sm={1}>sm=1</Col>
        <Col sm={10}>sm=8</Col>
        <Col sm={1}>sm=1</Col>
      </Row>
      <Row>
        <Col>
          <Pagination>
            <Pagination.First />
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
            <Pagination.Last />
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
}

export default Body;
