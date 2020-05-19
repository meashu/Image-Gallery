import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID vHxXoBxgfQ5YiQknJGCUE7jBq6EgDP7SeqAgRaPLg5U', //this is provided by unsplash
  },
});
