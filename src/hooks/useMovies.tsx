import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {MovieDBMoviesResponse, Movie} from '../interfaces/movieInterface';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([]);
  const [peliculasPopulares, setPeliculasPopulares] = useState<Movie[]>([]);

  const getMovies = async () => {
    const respNowPlaying = await movieDB.get<MovieDBMoviesResponse>(
      '/now_playing',
    );
    const respPopular = await movieDB.get<MovieDBMoviesResponse>('/popular');

    setPeliculasEnCine(respNowPlaying.data.results);

    setPeliculasPopulares(respPopular.data.results);

    setIsLoading(false);
  };

  useEffect(() => {
    // no_playing
    getMovies();
  }, []);

  return {
    peliculasEnCine,
    isLoading,
    peliculasPopulares,
  };
};
