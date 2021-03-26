import React from 'react';
import classnames from 'classnames';
import { replaceSmallImg } from '../../utils/index';
import classes from './card.css';

export default function Card({ imagesUrl }) {
  return (
    <div
      style={{ backgroundImage: `url(${replaceSmallImg(imagesUrl)})` }}
      className={classnames(classes.cardLayout)} />
  );
}
