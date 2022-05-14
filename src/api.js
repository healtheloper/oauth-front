import axios from 'axios';

const baseURL = process.env.REACT_APP_SERVER;

const client = axios.create({
  baseURL,
});

const api = {
  join: async (joinBody) => {
    const response = await client.post('/join', joinBody);
    return response.data;
  },
  login: async (loginBody) => {
    const response = await client.post('/login', loginBody);
    return response.data;
  },
  createComment: async (comment, userToken) => {
    const response = await client.post('/uploadComment', comment, {
      headers: {
        Authorization: `token ${userToken}`,
      },
    });
    return response.data;
  },
  getComments: async () => {
    const response = await client.get('/comments');
    return response.data;
  },
};

export default api;
