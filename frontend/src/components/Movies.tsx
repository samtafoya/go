/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export type Movie = {
  id: number;
  title: string;
  runtime: number;
};

export const Movies = (props: any) => {
  const [movies, setMovies] = useState<Movie[]>();

  useEffect(() => {
    setMovies([
      { id: 1, title: 'diary of a wimpy kid 1', runtime: 120 },
      { id: 2, title: 'diary of a wimpy kid 2', runtime: 121 },
      { id: 3, title: 'diary of a wimpy kid 3', runtime: 122 },
    ]);
  }, []);

  return (
    <>
      <h2>Movies</h2>
      <ul>
        {movies?.map((m) => {
          return (
            <li key={m.id}>
              <Link to={`/movies/${m.id}`}>{m.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
