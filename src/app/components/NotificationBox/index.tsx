/**
 *
 * NotificationBox
 *
 */
import React from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';
import Avatar from '../Avatar';
import Loading from '../Loading';
import timeSince from '../../../utils/timesince';

interface Props {
  notifications: any;
  loading: any;
}
const CONST = {
  MENTION: {
    COMMENT: 1,
    COMMENT_REPLY: 2,
  },
  OTHER: {
    FOLLOW: 1001,
    MENTION: 1002,
  },
  LIKE: {
    LIKE: 2001,
    COMMENT_LIKE: 2002,
    COMMENT_REPLY_LIKE: 2003,
  },
  COMMENT: {
    COMMENT: 3001,
    COMMENT_REPLY: 3002,
  },
};

export default function NotificationBox(props: Props) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      {props.loading && (
        <div className={classes.loading}>
          <Loading />
        </div>
      )}

      {props.notifications.map(item => {
        if (item.type === CONST.OTHER.FOLLOW) {
          return (
            <div
              className={classes.item}
              onClick={() => {
                history.push(`/p/${item.postId}`);
              }}
            >
              <Avatar
                id={item.fromUserId.avatar ? item.fromUserId._id : null}
                alt="avatar"
                className={classes.avatar}
                size="small"
              />
              <div className={classes.text}>
                <span className={classes.link}>{item.fromUserId.username}</span>
                đã bắt đầu theo dõi bạn.
                <span className={classes.time}>{timeSince(item.createdAt)}</span>
              </div>
            </div>
          );
        } else if (item.type === CONST.OTHER.MENTION) {
          return (
            <div
              className={classes.item}
              onClick={() => {
                history.push(`/p/${item.postId}`);
              }}
            >
              <Avatar
                id={item.fromUserId.avatar ? item.fromUserId._id : null}
                alt="avatar"
                className={classes.avatar}
                size="small"
              />
              <div className={classes.text}>
                <span className={classes.link}>{item.fromUserId.username}</span>
                đã nhắc đến bạn trong một bình luận.
                <span className={classes.time}>{timeSince(item.createdAt)}</span>
              </div>
            </div>
          );
        } else if (item.type === CONST.LIKE.LIKE) {
          return (
            <div
              className={classes.item}
              onClick={() => {
                history.push(`/p/${item.postId}`);
              }}
            >
              <Avatar
                id={item.fromUserId.avatar ? item.fromUserId._id : null}
                alt="avatar"
                className={classes.avatar}
                size="small"
              />
              <div className={classes.text}>
                <span className={classes.link}>{item.fromUserId.username}</span>
                thích bài viết của bạn.
                <span className={classes.time}>{timeSince(item.createdAt)}</span>
              </div>
            </div>
          );
        } else if (item.type === CONST.LIKE.COMMENT_LIKE || item.type === CONST.LIKE.COMMENT_REPLY_LIKE) {
          return (
            <div
              className={classes.item}
              onClick={() => {
                history.push(`/p/${item.postId}`);
              }}
            >
              <Avatar
                id={item.fromUserId.avatar ? item.fromUserId._id : null}
                alt="avatar"
                className={classes.avatar}
                size="small"
              />
              <div className={classes.text}>
                <span className={classes.link}>{item.fromUserId.username}</span>
                thích bình luận của bạn.
                <span className={classes.time}>{timeSince(item.createdAt)}</span>
              </div>
            </div>
          );
        } else if (item.type === CONST.COMMENT.COMMENT) {
          return (
            <div
              className={classes.item}
              onClick={() => {
                history.push(`/p/${item.postId}`);
              }}
            >
              <Avatar
                id={item.fromUserId.avatar ? item.fromUserId._id : null}
                alt="avatar"
                className={classes.avatar}
                size="small"
              />
              <div className={classes.text}>
                <span className={classes.link}>{item.fromUserId.username}</span>
                đã bình luận về bài viết của bạn.
                <span className={classes.time}>{timeSince(item.createdAt)}</span>
              </div>
            </div>
          );
        } else if (item.type === CONST.COMMENT.COMMENT_REPLY) {
          return (
            <div
              className={classes.item}
              onClick={() => {
                history.push(`/p/${item.postId}`);
              }}
            >
              <Avatar
                id={item.fromUserId.avatar ? item.fromUserId._id : null}
                alt="avatar"
                className={classes.avatar}
                size="small"
              />
              <div className={classes.text}>
                <span className={classes.link}>{item.fromUserId.username}</span>
                đã trả lời bình luận của bạn.
                <span className={classes.time}>{timeSince(item.createdAt)}</span>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
