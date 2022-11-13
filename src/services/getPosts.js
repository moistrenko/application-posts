import axios from 'axios';

async function getPosts(currentPage, limit) {
  return await axios
    .get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _page: currentPage,
        _limit: limit,
      },
    })
    .then((e) => {
      const totalPage = Math.ceil(e.headers['x-total-count'] / limit);
      const data = e.data;

      return {
        totalPage,
        data,
      };
    })
    .catch((error) => {
      console.error(error);
    });
}

export default getPosts;
