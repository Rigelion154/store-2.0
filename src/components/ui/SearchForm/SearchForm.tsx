import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CiSearch } from 'react-icons/ci';

import { ROUTES } from '../../../routes/routes';
import { MasterData } from '../../../types/productsType';

import { getFilteredProducts } from '../../../services/Products/getFilteredProducts';
import { AppDispatch, RootState } from '../../../features/store';
import { setIsOpen } from '../../../features/userApi/userSlice';
import { setSearchedProducts } from '../../../features/products/productsSlice';

import styles from './SearchForm.module.scss';

const SearchForm = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { isOpen } = useSelector((state: RootState) => state.user);
  const [searchWord, setSearchWord] = useState('');
  const [products, setProducts] = useState<MasterData[]>([]);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isOpen) dispatch(setIsOpen());
    const productsArray = await getFilteredProducts({ search: searchWord });
    dispatch(setSearchedProducts(productsArray));
    setProducts([]);
    navigate(ROUTES.SEARCH);
    setSearchWord('');
  };

  const burgerHandler = () => {
    if (isOpen) dispatch(setIsOpen());
    setSearchWord('');
    dispatch(setSearchedProducts([]));
    setProducts([]);
  };

  const handleSearch = async () => {
    const productsArray = await getFilteredProducts({ search: searchWord });
    setProducts(productsArray);
  };

  useEffect(() => {
    if (searchWord) handleSearch().catch();
  }, [searchWord]);

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={(e) => submitHandler(e)}>
        <button type="submit" className={styles.button}>
          <CiSearch color="var(--color-text-primary)" size={25} />
        </button>
        <input
          className={styles.input}
          type="text"
          placeholder="Search for anything..."
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
      </form>
      {products.length > 0 && (
        <div className={styles.products}>
          {products.map((el) => (
            <Link
              to={`/categories/${el.masterVariant.attributes[2].value}/${
                el.key.split('_')[0]
              }/${el.slug['en-US']}`}
              key={el.id}
              onClick={burgerHandler}
            >
              {el.masterVariant.sku}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchForm;
