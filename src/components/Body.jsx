import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from 'react-bootstrap/Pagination';
import { useState } from 'react';

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
  const [maxItem, setMaxItem] = useState(0);
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMaxItem = async () => {
    fetch(`https://hacker-news.firebaseio.com/v0/maxitem.json`)
      .then((response) => response.json())
      .then((data) => setMaxItem(data));
  };

  useEffect(() => {
    getMaxItem();
    console.log(maxItem);
    // if (maxItem >= 1) {
    //   while (stories.length < 1) {
    //     let i = 0;
    //     let itemId = maxItem - i;
    //     fetch(`https://hacker-news.firebaseio.com/v0/item/${itemId}.json`)
    //       .then((response) => response.json())
    //       .then((data) => {
    //         if (data.type === 'story') {
    //           setStories([...stories, data]);
    //         }
    //         console.log(i);
    //         i++;
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   }
    // }
    fetch(`https://hacker-news.firebaseio.com/v0/item/${maxItem}.json`)
      .then((response) => response.json())
      .then((data) => {
        setStories([...stories, data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [maxItem]);

  useEffect(() => {
    console.log(stories);
  }, [stories]);

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
