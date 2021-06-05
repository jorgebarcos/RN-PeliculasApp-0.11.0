import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'd214c4adf14394c99fcc204b4a33410f',
    language: 'es-ES',
  },
});

export default movieDB;
