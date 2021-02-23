/**
 *
 * MiniComment
 *
 */
import React, { useState } from 'react';
import { request } from 'utils/request';
import useStyles from './styles';
import like from '../../../images/like.svg';
import unlike from '../../../images/unlike.svg';

interface Props {
  data: any;
}

export default function MiniComment(props: Props) {
  const classes = useStyles();
  const [liked, setLiked] = useState(props.data.isUserLiked);
  function likeComment() {
    request({
      method: 'POST',
      url: `/commentLike`,
      data: { commentId: props.data._id },
    }).then(result => {
      if (result) {
        setLiked(result.status);
      }
    });
  }
  return (
    <div className={classes.root}>
      <p className={classes.contentWrapper}>
        {props.data.userId.username}&nbsp;
        <span className={classes.content}>{props.data.content}</span>
      </p>
      <img src={liked ? like : unlike} alt="like" className={classes.like} onClick={likeComment} />
    </div>
  );
}
