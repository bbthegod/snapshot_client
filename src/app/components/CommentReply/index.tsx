/**
 *
 * CommentReply
 *
 */
import React, { useState } from 'react';
import { request } from 'utils/request';
import timeSince from 'utils/timesince';
import useStyles from './styles';
import like from '../../../images/like.svg';
import unlike from '../../../images/unlike.svg';
import Avatar from '../Avatar';
import CommentMoreDialog from '../CommentMoreDialog';
import more from '../../../images/more.svg';

interface Props {
  data: any;
  focus: any;
  commentId: any;
  remove: any;
}

export default function CommentReply(props: Props) {
  const { data } = props;
  const classes = useStyles();
  const [hoverMore, setHoverMore] = useState(false);
  const [hideMore, setHideMore] = useState(true);
  const [liked, setLiked] = useState(data.isUserLiked);
  const username = localStorage.getItem('username');
  function likeComment() {
    request({
      method: 'POST',
      url: `/commentReplyLike`,
      data: { commentId: data._id },
    }).then(result => {
      if (result) {
        setLiked(result.status);
      }
    });
  }
  return (
    <div className={classes.root}>
      <div className={classes.left} onMouseEnter={() => setHoverMore(true)} onMouseLeave={() => setHoverMore(false)}>
        <Avatar id={data.userId.avatar ? data.userId._id : null} alt="avatar" className={classes.avatar} size="small" />
        <div className={classes.contentWrapper}>
          <div className={classes.name}>{data.userId.username}</div>
          {data.mention && <div className={classes.mention}>{data.mention}</div>}
          {data.content}
          <div className={classes.reaction}>
            <div className={classes.time}>{timeSince(data.createdAt)}</div>
            {(data.likes > 0 || liked) && (
              <div className={classes.likeCount}>{liked ? data.likes + 1 : data.likes} lượt thích</div>
            )}
          </div>
          <div className={classes.commentWrapper}>
            <div
              className={classes.likeCount}
              style={{ width: '100%' }}
              onClick={() => props.focus(data.userId.username, props.commentId)}
            >
              Trả lời
            </div>
          </div>
        </div>
        {hoverMore && username === data.userId.username && (
          <img src={more} alt="more" className={classes.more} onClick={() => setHideMore(false)} />
        )}
      </div>
      <img src={liked ? like : unlike} alt="like" className={classes.like} onClick={likeComment} />
      {!hideMore && (
        <CommentMoreDialog
          remove={() => {
            props.remove(data._id);
            setHideMore(true);
          }}
          onClose={() => setHideMore(true)}
        />
      )}
    </div>
  );
}
