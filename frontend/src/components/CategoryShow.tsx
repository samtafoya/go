/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';

export type Category = {
  id: number;
  category: string;
};

export const CategoryShow = (props: any) => {
  const [category, setCategory] = useState<Category>();

  useEffect(() => {
    setCategory({ id: props.match.params.id, category: 'drama' });
  }, []);

  return (
    <>
      <h2>Category: {category?.id}</h2>
    </>
  );
};
