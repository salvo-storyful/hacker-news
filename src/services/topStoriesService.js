import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateStories } from '../features/stories/updateStoriesSlice';

export default async function TopStoriesService() {
  const dispatch = useDispatch();

  useEffect(() => {
    let url = 'https://hacker-news.firebaseio.com/v0/topstories.json';
    const headers = new Headers();
    const params = {
      method: 'GET',
      headers: headers,
    };

    fetch(url, params)
      .then(function (response) {
        if (response.status !== 200) {
          console.log('Status code: ' + response.status);
          return;
        }
        response.json().then(function (data) {
          dispatch(updateStories(data));
        });
      })
      .catch(function (err) {
        console.log('Error: ', err);
      });
  }, [dispatch]);
}
