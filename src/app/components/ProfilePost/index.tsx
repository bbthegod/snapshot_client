/**
 *
 * ProfilePost
 *
 */

import React, { useState } from 'react';
import like from '../../../images/like.svg';
import comment1 from '../../../images/comment1.svg';
import useStyles from './styles';

export function ProfilePost(props) {
  const classes = useStyles();
  const { image, likes, comments, style } = props;
  const [hover, setHover] = useState(false);
  return (
    <div
      style={style}
      className={classes.root}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={image} alt="post" className={classes.image} />
      {hover && (
        <div className={classes.hoverWrapper}>
          <div className={classes.hover}>
            <img src={like} alt="like" className={classes.icon} />
            <p className={classes.number}>{likes}</p>
          </div>
          <div className={classes.hover} style={{ marginLeft: 30 }}>
            <img src={comment1} alt="comment" className={classes.icon} />
            <p className={classes.number}>{comments}</p>
          </div>
        </div>
      )}
    </div>
  );
}
