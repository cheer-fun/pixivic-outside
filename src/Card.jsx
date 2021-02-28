import React from 'react';
import classnames from 'classnames';
import { replaceSmallImg } from 'utils/index';
import classes from './card.css';

export default function Card({ imagesUrl }) {
  return (
    <div
      src={replaceSmallImg(imagesUrl)}
      style={{ backgroundImage: `url(${replaceSmallImg(imagesUrl)})` }}
      alt="imagesUrl"
      className={classnames(classes.cardLayout)} />
  );
}
