import React from 'react';
import { useParams } from 'react-router-dom';

const SubCategory = () => {
  const { slug } = useParams();
  console.log(slug);
  return <div>{slug}</div>;
};

export default SubCategory;
