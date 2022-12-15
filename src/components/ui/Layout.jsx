import React from 'react';
import PropTypes from 'prop-types';
import { Header } from './Header';
import { NavBar } from './NavBar';
import styles from './Layout.module.css';

export const Layout = ({ children }) => {
  
  return (
    <>
    <NavBar/>
    <div className={styles.mainWrapper}>
      <div className={styles.body}>
        <Header title="NutriTime" />
        <div className={styles.content}>
          {children}
        </div>
        <div className={styles.foot}></div>
      </div>
    </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.array,
};
