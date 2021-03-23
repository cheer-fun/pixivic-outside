import React from 'react';
import { replaceSmallImg } from '@utils/index';
import classes from './Card/card.css';

export default function Artist({ id, name, avatar }) {
        return (
          <div
            className={classes.avatarLine}
            onClick={() => window.open(`https://sharemoe.net/artist/${id}`)}>
            <div
              style={{ backgroundImage: `url(${replaceSmallImg(avatar)})` }}
              className={classes.avatarImg} />
            <span className={classes.avatarName}>{name}</span>
          </div>
        );
}
