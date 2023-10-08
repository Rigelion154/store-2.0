import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../../../features/store';
import { ICategory } from '../../../types/categoriesType';
import { ROUTES } from '../../../routes/routes';

import './side-bar.scss';

const SideBar = () => {
  const [subCategories, setSubCategories] = useState<ICategory[]>([]);
  const [activeCategoryId, setActiveCategoryId] = useState<string>('');
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const { categoriesArray, subCategoriesArray } = useSelector(
    ({ categories }: RootState) => categories,
  );

  function renderSubcategories(id: string) {
    const currentSub = subCategoriesArray.filter(
      (el) => el.ancestors[0].id === id,
    );
    setSubCategories(currentSub);
    setActiveCategoryId(id);
  }

  function handleResize(setScreen: Dispatch<SetStateAction<boolean>>) {
    if (window.innerWidth < 1300) {
      setScreen(true);
    } else {
      setScreen(false);
    }
  }

  useEffect(() => {
    handleResize(setIsSmallScreen);
    window.addEventListener('resize', () => handleResize(setIsSmallScreen));
    return () => {
      window.removeEventListener('resize', () =>
        handleResize(setIsSmallScreen),
      );
    };
  }, []);

  useEffect(() => {
    if (
      !categoriesArray.some((cat) => currentPath.includes(cat.slug['en-US']))
    ) {
      setSubCategories([]);
      setActiveCategoryId('');
    }
  }, [location.pathname]);

  console.log('aside is loading');
  return (
    <aside
      className="section aside"
      style={{
        position:
          currentPath === '/'
            ? isSmallScreen
              ? 'static'
              : 'absolute'
            : 'sticky',
      }}
    >
      <NavLink to={ROUTES.CATEGORIES} className="aside__title">
        Categories
      </NavLink>
      <ul className="aside__nav">
        {categoriesArray.map((el) => (
          <li key={el.id}>
            <NavLink
              to={`/categories/${el.key}`}
              className={({ isActive }) =>
                isActive ? 'aside__link active' : 'aside__link'
              }
              onClick={() => renderSubcategories(el.id)}
            >
              {el.slug['en-US']}
            </NavLink>
            <ul
              className={`cat__links ${
                el.id === activeCategoryId ? 'show' : ''
              }`}
            >
              {el.id === activeCategoryId &&
                subCategories &&
                subCategories.map((sub) => (
                  <NavLink key={sub.id} to={`/categories/${el.key}/${sub.key}`}>
                    {sub.slug['en-US']}
                  </NavLink>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
