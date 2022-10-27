import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  updateTopStories,
  addTopStories,
} from '../features/stories/topStoriesSlice';

export default async function TopStoriesService() {
  const dispatch = useDispatch();
  let [stories, setStories] = useState(false);

  useEffect(() => {
    let url = 'https://hacker-news.firebaseio.com/v0/topstories.json';
    async function getStoryIds() {
      fetch(url, {
        method: 'get',
      })
        .then((res) => res.json())
        .then(
          await function (res) {
            setStories(res);
            dispatch(updateTopStories(res));
          }
        )
        .catch(function (err) {
          console.log('Error: ', err);
        });
    }
    getStoryIds();
  }, [dispatch]);

  useEffect(() => {
    if (stories.length) {
      stories.forEach((id) => {
        let url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;

        fetch(url, {
          method: 'get',
        })
          .then((res) => res.json())
          .then(function (res) {
            dispatch(addTopStories(res));
          })
          .catch(function (err) {
            console.log('Error: ', err);
          });
      });
    }
  }, [dispatch, stories]);
}
