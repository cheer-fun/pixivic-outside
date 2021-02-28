import React from 'react';
import { replaceSmallImg } from 'utils/index';
import classes from '../card.css';

export default function Artist({ id, name, avatar }) {
        return (
          <div
            className={classes.avatarLine} 
            onClick={() => window.open(`https://www.sharemoe.net/artist/${id}`)}>
            <div
              style={{ backgroundImage: `url(${replaceSmallImg(avatar)})` }}
              className={classes.avatarImg} />
            <span className={classes.avatarName}>{name}</span>
          </div>
        );
}
