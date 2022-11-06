/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';

export type Category = {
  id: number;
  category: string;
};

export const Categories = (props: any) => {
  const [categories, setCategories] = useState<Category[]>();
  // const history = useHistory();
  // console.log(history);
  const { path, url } = useRouteMatch();

  useEffect(() => {
    setCategories([
      { id: 1, category: 'drama' },
      { id: 2, category: 'comedy' },
      { id: 3, category: 'horror' },
    ]);
  }, []);

  return (
    <>
      <h2>Categories</h2>
      <ul>
        {categories?.map((m) => {
          return (
            <li key={m.id}>
              <Link to={`${path}/${m.category}`}>{m.category}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
