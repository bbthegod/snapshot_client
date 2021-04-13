/**
 *
 * Comment
 *
 */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { request } from 'utils/request';
import timeSince from 'utils/timesince';
import useStyles from './styles';
import Avatar from '../../../../components/Avatar';
import like from '../../../../../images/like.svg';
import unlike from '../../../../../images/unlike.svg';
import more from '../../../../../images/more.svg';
import CommentMoreDialog from './components/CommentMoreDialog';
import Edit from './components/Edit';

interface Props {
  data: any;
  focus: any;
  remove: any;
  editComment: any;
}

export default function Comment(props: Props) {
  const { data, editComment } = props;
  const classes = useStyles();
  const history = useHistory();
  const [hoverMore, setHoverMore] = useState(false);
  const [hideMore, setHideMore] = useState(true);
  const [hideEdit, setHideEdit] = useState(true);
  const [liked, setLiked] = useState(data.isUserLiked);
  const username = localStorage.getItem('username');
  function likeComment() {
    request({
      method: 'POST',
      url: `/commentLike`,
      data: { commentId: data._id },
    }).then(result => {
      if (result) {
        setLiked(result.status);
      }
    });
  }
  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <div className={classes.left} onMouseEnter={() => setHoverMore(true)} onMouseLeave={() => setHoverMore(false)}>
          <Avatar user={data.userId} className={classes.avatar} size="small" />
          <div className={classes.contentWrapper}>
            <div className={classes.name} onClick={() => history.push(`/u/${data.userId.username}`)}>
              {data.userId.username}
            </div>
            {data.content}
            <div className={classes.reaction}>
              <div className={classes.time}>{timeSince(data.createdAt)}</div>
              {(data.likes > 0 || liked) && (
                <div className={classes.likeCount}>{liked ? data.likes + 1 : data.likes} lượt thích</div>
              )}
              <div className={classes.likeCount} onClick={() => props.focus(data.userId.username, data._id)}>
                Trả lời
              </div>
            </div>
          </div>
          {hoverMore && username === data.userId.username && (
            <img src={more} alt="more" className={classes.more} onClick={() => setHideMore(false)} />
          )}
        </div>
        <img src={liked ? like : unlike} alt="like" className={classes.like} onClick={likeComment} />
      </div>
      {!hideMore && (
        <CommentMoreDialog
          remove={() => {
            props.remove();
            setHideMore(true);
          }}
          edit={() => {
            setHideMore(true);
            setHideEdit(false);
          }}
          onClose={() => setHideMore(true)}
        />
      )}
      {!hideEdit && (
        <Edit
          onClose={() => setHideEdit(true)}
          onSubmit={content => {
            editComment(content);
            setHideEdit(true);
          }}
          caption={data.content}
        />
      )}
    </div>
  );
}
