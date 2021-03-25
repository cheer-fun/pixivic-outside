import React from 'react';
import classnames from 'classnames';
import { replaceSmallImg } from '../../utils/index';
import classes from './card.css';

export default function Card({ imagesUrl }) {
  return (
    <div
      style={{ background: `center / contain no-repeat url(${replaceSmallImg(imagesUrl)})` }}
      className={classnames(classes.cardLayout)} />
  );
}
