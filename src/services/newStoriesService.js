import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  updateNewStories,
  addNewStories,
} from '../features/stories/newStoriesSlice';

export default async function NewStoriesService() {
  const dispatch = useDispatch();
  let [stories, setStories] = useState(false);

  useEffect(() => {
    let url = 'https://hacker-news.firebaseio.com/v0/newstories.json';

    async function getStoryIds() {
      fetch(url, {
        method: 'get',
      })
        .then((res) => res.json())
        .then(
          await function (res) {
            setStories(res);
            dispatch(updateNewStories(res));
          }
        )
        .catch(function (err) {
          console.log('Error: ', err);
        });
    }
    getStoryIds();
  }, []);

  useEffect(() => {
    if (stories.length) {
      stories.forEach((id) => {
        let url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;

        fetch(url, {
          method: 'get',
        })
          .then((res) => res.json())
          .then(function (res) {
            dispatch(addNewStories(res));
          })
          .catch(function (err) {
            console.log('Error: ', err);
          });
      });
    }
  }, [stories]);
}
