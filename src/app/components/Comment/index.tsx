/**
 *
 * Comment
 *
 */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { request } from 'utils/request';
import serialize from 'utils/serialize';
import timeSince from 'utils/timesince';
import useStyles from './styles';
import Avatar from '../Avatar';
import like from '../../../images/like.svg';
import unlike from '../../../images/unlike.svg';
import more from '../../../images/more.svg';
import CommentReply from '../CommentReply';
import CommentMoreDialog from '../CommentMoreDialog';
// import

interface Props {
  data: any;
  focus: any;
  remove: any;
}

export default function Comment(props: Props) {
  const { data } = props;
  const classes = useStyles();
  const history = useHistory();
  const [hide, setHide] = useState(true);
  const [hoverMore, setHoverMore] = useState(false);
  const [hideMore, setHideMore] = useState(true);
  const [liked, setLiked] = useState(data.isUserLiked);
  const [comments, setCommets] = useState<any[]>([]);
  const username = localStorage.getItem('username');
  useEffect(() => {
    if (data.numberOfComments > 0) {
      request({
        method: 'GET',
        url: `/commentReply/${data._id}?${serialize({ skip: 0, limit: 10 })}`,
      }).then(result => {
        if (result && result.data) {
          setCommets(result.data);
        }
      });
    }
  }, [data._id, data.numberOfComments]);
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
  function removeComment(id) {
    request({
      method: 'DELETE',
      url: `/commentReply/${id}`,
    }).then(result => {
      if (result) {
        request({
          method: 'GET',
          url: `/commentReply/${data._id}?${serialize({ skip: 0, limit: 10 })}`,
        }).then(result => {
          if (result && result.data) {
            setCommets(result.data);
          }
        });
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
      {data.numberOfComments > 0 && (
        <div className={classes.commentReplyWrapper}>
          <div className={classes.hideWrapper}>
            <div className={classes.hideDivider} />
            <div className={classes.hide} onClick={() => setHide(!hide)}>
              {hide ? 'Hiện' : 'Ẩn'} câu trả lời
            </div>
          </div>
          {!hide &&
            comments.map(item => (
              <CommentReply data={item} focus={props.focus} commentId={data._id} remove={id => removeComment(id)} />
            ))}
        </div>
      )}
      {!hideMore && (
        <CommentMoreDialog
          remove={() => {
            props.remove();
            setHideMore(true);
          }}
          onClose={() => setHideMore(true)}
        />
      )}
    </div>
  );
}
