import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateMaxItem } from '../features/stories/updateMaxItemSlice';

export default async function MaxItemService() {
  const dispatch = useDispatch();

  useEffect(() => {
    let url = 'https://hacker-news.firebaseio.com/v0/maxitem.json';
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
          dispatch(updateMaxItem(data));
        });
      })
      .catch(function (err) {
        console.log('Error: ', err);
      });
  }, [dispatch]);
}
