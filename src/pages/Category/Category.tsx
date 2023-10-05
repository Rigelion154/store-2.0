import React from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
  const { current } = useParams();
  console.log(current);
  return <div>{current}</div>;
};

export default Category;
