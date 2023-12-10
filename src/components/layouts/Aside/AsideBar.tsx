import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../features/store';
import { NavLink, useLocation } from 'react-router-dom';
import { setActiveCategory } from '../../../features/categories/categoriesSlice';

import styles from './AsideBar.module.scss';

const AsideBar = () => {
  const dispatch: AppDispatch = useDispatch();
  const { categoriesArray, activeSubCategory, activeCategoryId } = useSelector(
    ({ categories }: RootState) => categories,
  );
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    if (
      !categoriesArray.some((category) =>
        currentPath.includes(category.slug['en-US']),
      )
    ) {
      dispatch(setActiveCategory(''));
    }
  }, [location.pathname]);

  return (
    <div className={styles.container}>
      <NavLink
        to="/categories"
        className={({ isActive }) =>
          isActive
            ? `${styles.aside__title} ${styles.active}`
            : styles.aside__title
        }
      >
        Categories
      </NavLink>
      <div className={styles.links}>
        {categoriesArray.map((category) => (
          <div key={category.id}>
            <ul>
              <li>
                <NavLink
                  to={`/categories/${category.key}`}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.aside__link} ${styles.active}`
                      : styles.aside__link
                  }
                  onClick={() => {
                    dispatch(setActiveCategory(category.id));
                  }}
                >
                  {category.key}
                </NavLink>
              </li>
              {activeCategoryId === category.id &&
                activeSubCategory &&
                activeSubCategory.map((sub) => (
                  <li key={sub.id}>
                    <NavLink
                      to={`/categories/${category.key}/${sub.key}`}
                      className={({ isActive }) =>
                        isActive
                          ? `${styles.sub__link} ${styles.active}`
                          : styles.sub__link
                      }
                    >
                      {sub.key}
                    </NavLink>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AsideBar;
