const axios = require('axios');
const baseUrl = 'https://hacker-news.firebaseio.com/v0';

export const getMaxItem = async () => {
  fetch(baseUrl + `/maxitem.json`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getTopStories = async () => {
  fetch(baseUrl + `/topstories.json`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getBestStories = async () => {
  fetch(baseUrl + `/beststories.json`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

// export const getNewStories = async () => {
//   fetch(baseUrl + `/newstories.json`)
//     .then((response) => response.json())
//     .then((data) => {
//       return data;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

export async function getNewStories() {
  try {
    const response = await axios.get(baseUrl + `/newstories.json`);
    console.log('response  ', response);
    return response.data;
  } catch (error) {
    return [];
  }
}
