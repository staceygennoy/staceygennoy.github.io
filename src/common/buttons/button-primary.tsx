import classNames from 'classnames';
import React, { FunctionComponent, ButtonHTMLAttributes } from 'react';
import styles from './button-primary.module.css';

export const ButtonPrimary: FunctionComponent<ButtonHTMLAttributes<HTMLButtonElement>> = props => {
  // Children is the contents of the Button component.
  // The contents of the Button component won't be displayed
  // if you forget to add the {children} inside the element.
  const { className, children, ...rest } = props;
  return (
    <button className={classNames(className, 'btn btn-primary', styles.button)} {...rest}>
      {children}
    </button>
  );
};
