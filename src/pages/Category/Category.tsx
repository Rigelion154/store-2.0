import React from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
  const { current } = useParams();
  return <div>{current}</div>;
};

export default Category;
