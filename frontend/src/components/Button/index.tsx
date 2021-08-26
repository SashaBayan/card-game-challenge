import React, { Children, MouseEventHandler } from 'react';
import styles from './Button.module.css';

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<Props> = (props: Props) => {
  return <button className={styles.button} {...props} />;
};

export default Button;
