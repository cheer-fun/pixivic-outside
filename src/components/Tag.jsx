import React from 'react';
import classes from '../card.css';

export default function Tag({ name }) {
    return (
      <div
        className={classes.tag}
        onClick={() => { window.open(`https://sharemoe.net/keywords?tag=${name}`); }}>
        <span>{name}</span>
      </div>
    );
}
