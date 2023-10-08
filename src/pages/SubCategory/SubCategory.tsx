import React from 'react';
import { useParams } from 'react-router-dom';

const SubCategory = () => {
  const { slug } = useParams();
  // 0:""
  // 1:"categories"
  // 2:"smartphones"
  // 3:"samsung"
  return (
    <div>
      {/*{path.split('/').map((el, i, array) => (*/}
      {/*  <Link to={`/${array[i - 1]}${el}`}>{el}</Link>*/}
      {/*))}*/}
      {slug}
    </div>
  );
};

export default SubCategory;
