import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import styles from './home.module.css';
import { ButtonPrimary } from '../common/buttons/button-primary';

export const Home: FunctionComponent = () => {
  return (
    <div className={classNames('container', 'border ', styles.border)}>
      <h1 className={styles.header}>Home</h1>
      <h2 className={styles.foo}>Something Else</h2>
      <ButtonPrimary>Test</ButtonPrimary>
    </div>
  );
};
