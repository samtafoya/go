/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Movie } from './Movies';

export const MovieShow = (props: any) => {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    setMovie({
      id: props.match.params.id,
      title: 'diary of a wimpy kid 1',
      runtime: 120,
    });
  }, []);

  return (
    <>
      <h2>{movie?.title}</h2>
      <table className="table table-compact table-striped">
        <thead />
        <tbody>
          <tr>
            <td>
              <strong>Id:</strong>
            </td>
            <td>{movie?.id}</td>
          </tr>
          <tr>
            <td>
              <strong>Title:</strong>
            </td>
            <td>{movie?.title}</td>
          </tr>
          <tr>
            <td>
              <strong>Runtime:</strong>
            </td>
            <td>{movie?.runtime} minutes</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
