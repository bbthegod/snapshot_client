import React, { useEffect, useState, useRef } from 'react';
import { HOST } from 'utils/url';
import timeSince from 'utils/timesince';
import { useSelector, useDispatch } from 'react-redux';
import { usePostDetailSlice } from './slice';
import { selectPostDetail } from './slice/selectors';
import Comment from '../../components/Comment';
import PostDetailDialog from '../../components/PostDetailDialog';
import nasmall from '../../../images/nasmall.jpg';
import more from '../../../images/more.svg';
import like from '../../../images/like.svg';
import unlike from '../../../images/unlike.svg';
import commentIcon from '../../../images/comment.svg';
import addIcon from '../../../images/add.svg';
import useStyles from './styles';
import copy from 'copy-to-clipboard';

interface Props {
  match: any;
}

export function PostDetail(props: Props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');
  const [commentId, setCommentId] = useState();
  const [status, setStatus] = useState(0);
  const [limit, setLimit] = useState(12);
  const { actions } = usePostDetailSlice();
  const { data, postFailures, following, comments, liked, count } = useSelector(selectPostDetail);
  const dispatch = useDispatch();
  const inputRef = useRef(document.createElement('input'));
  const username = localStorage.getItem('username');
  useEffect(() => {
    if (props.match.params.post) {
      dispatch(actions.get(props.match.params.post));
    }
  }, [actions, dispatch, props.match.params.post]);
  useEffect(() => {
    if (props.match.params.post) {
      dispatch(actions.getComment({ id: props.match.params.post, query: { skip: 0, limit } }));
    }
  }, [actions, dispatch, props.match.params.post, limit]);
  function follow() {
    dispatch(actions.follow(data.author._id));
  }
  function likePost() {
    dispatch(actions.like(data._id));
  }
  function comment() {
    if (status === 0) {
      dispatch(actions.comment({ postId: data._id, content: removeMention(content), mention: getMention(content) }));
    } else if (status === 1) {
      dispatch(actions.commentReply({ commentId, content: removeMention(content), mention: getMention(content) }));
      setStatus(0);
    }
    setContent('');
  }
  function removeMention(string) {
    const a = string.split(' ');
    if (a[0][0] === '@') {
      a.shift();
      return a.join(' ');
    }
    return string;
  }
  function getMention(string) {
    const a = string.split(' ')[0];
    if (a[0] === '@') {
      return a;
    }
    return null;
  }
  return data && comments && !postFailures ? (
    <div className={classes.root}>
      <div className={classes.paper}>
        <img src={`${HOST}/post/${data.author._id}/${data._id}/original.jpg`} alt="postimg" className={classes.image} />
        <div className={classes.side}>
          <div className={classes.header}>
            <img
              src={data.author.avatar ? `${HOST}/avatar/${data.author._id}/medium.jpg` : nasmall}
              alt="avatar"
              className={classes.avatar}
            />
            <div className={classes.nameWrapper}>
              <div className={classes.name}>
                <div className={classes.nameText}>{data.author.username}</div>
                {username !== data.author.username && (
                  <div className={classes.followBox}>
                    <span className={classes.dot}>•</span>
                    <div
                      style={following ? {} : { color: '#0095F6', cursor: 'pointer' }}
                      onClick={() => {
                        if (!following) follow();
                      }}
                    >
                      {following ? 'Đang theo dõi' : 'Theo dõi'}
                    </div>
                  </div>
                )}
              </div>
              <img src={more} alt="more" className={classes.more} onClick={() => setOpen(true)} />
            </div>
          </div>

          <div className={classes.commentWrapper}>
            <div className={classes.captionWrapper}>
              <div className={classes.captionAvatarWrapper}>
                <img
                  src={data.author.avatar ? `${HOST}/avatar/${data.author._id}/medium.jpg` : nasmall}
                  alt="avatar"
                  className={classes.avatar}
                />
              </div>
              <div className={classes.contentWrapper2}>
                <div className={classes.captionName}>{data.author.username}</div>
                {data.caption}
                <div className={classes.captionReaction}>
                  <div className={classes.captionTime}>{timeSince(data.createdAt)}</div>
                </div>
              </div>
            </div>
            {comments.map(item => (
              <Comment
                data={item}
                key={item._id}
                remove={() => dispatch(actions.remove(item._id))}
                focus={(username, id) => {
                  inputRef.current.focus();
                  setStatus(1);
                  setCommentId(id);
                  setContent('@' + username + ' ');
                }}
              />
            ))}
            {count > comments.length && (
              <div className={classes.moreWrapper}>
                <img src={addIcon} alt="add" className={classes.moreComment} onClick={() => setLimit(limit + 12)} />
              </div>
            )}
          </div>
          <div style={{ height: 110 }}>
            <div className={classes.reaction}>
              <img src={liked ? like : unlike} alt="like" className={classes.like} onClick={likePost} />
              <img src={commentIcon} alt="comment" className={classes.like} />
            </div>

            <div className={classes.likeCounter}>{liked ? data.likes + 1 : data.likes} lượt thích</div>
            <div className={classes.time}>{timeSince(data.createdAt)}</div>
          </div>
          <div className={classes.typeWrapper}>
            <form
              onSubmit={e => {
                e.preventDefault();
                comment();
              }}
            >
              <input
                placeholder="Thêm bình luận..."
                type="text"
                ref={inputRef}
                className={classes.input}
                onChange={e => {
                  setContent(e.target.value);
                }}
                onFocus={() => setStatus(0)}
                value={content}
              />
              <span className={classes.post} onClick={comment}>
                Đăng
              </span>
            </form>
          </div>
        </div>
      </div>
      {open && (
        <PostDetailDialog
          setOpen={() => setOpen(false)}
          report={(object, reasons) => {
            dispatch(actions.report({ object, reasons }));
            setOpen(false);
            alert('Cảm ơn bạn đã báo cáo cho chúng tôi.');
          }}
          unfollow={() => {
            if (following) {
              dispatch(actions.follow(data.author._id));
            }
            setOpen(false);
          }}
          copy={() => {
            copy(`${window.location.origin}/p/${data._id}`);
            setOpen(false);
            alert('Đã sao chép liên kết vào bộ nhớ tạm.');
          }}
        />
      )}
    </div>
  ) : (
    <div className={classes.notFoundWrapper}>
      <h2 className={classes.notFound1}>Rất tiếc, trang này hiện không khả dụng.</h2>
      <h2 className={classes.notFound2}>Liên kết bạn theo dõi có thể bị hỏng hoặc trang này có thể đã bị gỡ.</h2>
    </div>
  );
}
