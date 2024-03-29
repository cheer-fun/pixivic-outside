import React from 'react';
import { replaceSmallImg } from '@utils/index';
import classes from './Card/card.css';

export default function Artist({ id, name, avatar }) {
        return (
          <div
            className={classes.avatarLine} 
            onClick={() => window.open(`https://pixivic.com/artist/${id}`)}>
            <div
              style={{ background: `center / contain no-repeat url(${replaceSmallImg(avatar)})` }}
              className={classes.avatarImg} />
            <span className={classes.avatarName}>{name}</span>
          </div>
        );
}
