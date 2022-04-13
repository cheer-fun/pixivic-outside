import React from 'react';
import classes from './Card/card.css';

export default function Tag({ name }) {
    return (
      <div
        className={classes.tag}
        onClick={() => { window.open(`https://pixivic.com/keywords?tag=${name}`); }}>
        <span>{name}</span>
      </div>
    );
}
