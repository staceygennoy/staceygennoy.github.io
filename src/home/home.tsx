import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import styles from './home.module.scss';

export const Home: FunctionComponent = () => {
  return (
    <div className={classNames('container', 'border ', styles.border)}>
      <h1 className={styles.header}>Home</h1>
      <h2>Something Else</h2>
      <button className="btn btn-custom-color">Test</button>
    </div>
  );
};
