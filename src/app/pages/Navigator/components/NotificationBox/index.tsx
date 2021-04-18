/**
 *
 * NotificationBox
 *
 */
import React from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';
import Avatar from '../../../../components/Avatar';
import Loading from '../../../../components/Loading';
import timeSince from '../../../../../utils/timesince';

interface Props {
  notifications: any;
  loading: any;
}

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
        if (item.objects.type === 'follow') {
          return (
            <div
              className={classes.item}
              onClick={() => {
                history.push(`/p/${item.objects.postId}`);
              }}
            >
              <Avatar user={item.objects.fromUser} className={classes.avatar} size="small" />
              <div className={classes.text}>
                <span className={classes.link}>{item.objects.fromUser.username}</span>
                đã bắt đầu theo dõi bạn.
                <span className={classes.time}>{timeSince(item.createdAt)}</span>
              </div>
            </div>
          );
        } else if (item.objects.type === 'like') {
          return (
            <div
              className={classes.item}
              onClick={() => {
                history.push(`/p/${item.objects.postId}`);
              }}
            >
              <Avatar user={item.objects.fromUser} className={classes.avatar} size="small" />
              <div className={classes.text}>
                <span className={classes.link}>{item.objects.fromUser.username}</span>
                thích bài viết của bạn.
                <span className={classes.time}>{timeSince(item.createdAt)}</span>
              </div>
            </div>
          );
        } else if (item.objects.type === 'comment') {
          return (
            <div
              className={classes.item}
              onClick={() => {
                history.push(`/p/${item.objects.postId}`);
              }}
            >
              <Avatar user={item.objects.fromUser} className={classes.avatar} size="small" />
              <div className={classes.text}>
                <span className={classes.link}>{item.objects.fromUser.username}</span>
                đã bình luận về bài viết của bạn.
                <span className={classes.time}>{timeSince(item.createdAt)}</span>
              </div>
            </div>
          );
        } else if (item.objects.type === 'commentLike') {
          return (
            <div
              className={classes.item}
              onClick={() => {
                history.push(`/p/${item.objects.postId}`);
              }}
            >
              <Avatar user={item.objects.fromUser} className={classes.avatar} size="small" />
              <div className={classes.text}>
                <span className={classes.link}>{item.objects.fromUser.username}</span>
                thích bình luận của bạn.
                <span className={classes.time}>{timeSince(item.createdAt)}</span>
              </div>
            </div>
          );
        } else if (item.objects.type === 'nsfw') {
          return (
            <div
              className={classes.item}
              onClick={() => {
                history.push(`/p/${item.objects.postId}`);
              }}
            >
              <div className={classes.text}>
                Bài viết gần đây của bạn có thể vi phạm cộng đồng, chúng tôi sẽ xem xét lại bài viết này sớm nhất.
                <span className={classes.time}>{timeSince(item.createdAt)}</span>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
