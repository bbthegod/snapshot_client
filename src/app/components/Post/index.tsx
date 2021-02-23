import React, { useState, useEffect, useRef } from 'react';
import { request } from 'utils/request';
import { useHistory } from 'react-router-dom';
import { HOST } from 'utils/url';
import timeSince from 'utils/timesince';
import useStyles from './styles';
import Avatar from '../Avatar';
import MiniComment from '../MiniComment';
import more from '../../../images/more.svg';
import like from '../../../images/like.svg';
import unlike from '../../../images/unlike.svg';
import commentIcon from '../../../images/comment.svg';

interface Props {
  data: any;
}

export function Post(props: Props) {
  const { data } = props;
  const [content, setContent] = useState('');
  const classes = useStyles();
  const history = useHistory();
  const [seeMore, setSeeMore] = useState(true);
  const [liked, setLiked] = useState(data.isUserLiked);
  const [trimmed, setTrimmed] = useState<string[]>([]);
  const inputRef = useRef(document.createElement('input'));
  useEffect(() => {
    const array: string[] = data.caption.split('\n');
    setTrimmed(array);
  }, [data.caption]);
  function likeComment() {
    request({
      method: 'POST',
      url: `/like`,
      data: { postId: data._id },
    }).then(result => {
      if (result) {
        setLiked(result.status);
      }
    });
  }
  function comment() {
    request({
      method: 'POST',
      url: `/comment/${data._id}`,
      data: { content: content },
    });
  }
  console.log(data);
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Avatar id={data.author.avatar ? data.author._id : null} alt="avatar" className={classes.avatar} />
        <div className={classes.nameWrapper}>
          <p className={classes.name}>{data.author.username}</p>
          <img src={more} alt="more" className={classes.more} />
        </div>
      </div>
      <img src={`${HOST}/post/${data.author._id}/${data._id}/original.jpg`} alt="imgPost" className={classes.imgPost} />
      <div className={classes.likeWrapper}>
        <img src={liked ? like : unlike} alt="like" className={classes.like} onClick={likeComment} />
        <img src={commentIcon} alt="comment" className={classes.like} onClick={() => inputRef.current.focus()} />
      </div>
      <div className={classes.likeCount}>
        {data.likes > 0 && <p className={classes.liekCountText}>{data.likes} lượt thích</p>}
      </div>
      <div className={classes.commentWrapper}>
        <div className={classes.captionsWrapper}>
          <span className={classes.username}>
            {data.name}&nbsp;
            <span className={classes.fistLine}>
              {trimmed && trimmed[0] && trimmed[0]}
              <span onClick={() => setSeeMore(false)} className={classes.seeMore}>
                {trimmed && trimmed[1] && seeMore && '...thêm'}
              </span>
            </span>
          </span>
          <pre className={classes.afterLine}>{trimmed && trimmed[1] && !seeMore && trimmed[1]}</pre>
          <div className={classes.seeAllCommentsWrapper}>
            {data.comments > 3 && (
              <p
                className={classes.seeAllComments}
                onClick={() => {
                  history.push(`/p/${data._id}`);
                }}
              >
                Xem tất cả {data.comments} bình luận
              </p>
            )}
          </div>
          {data.commentList.map(item => (
            <MiniComment data={item} key={item._id} />
          ))}
          <div className={classes.timestampWapper}>
            <p className={classes.timestamp}>{timeSince(data.createdAt)}</p>
          </div>
        </div>
      </div>
      <div className={classes.typeAreWapper}>
        <form
          onSubmit={e => {
            e.preventDefault();
            comment();
          }}
        >
          <input
            type="text"
            className={classes.input}
            placeholder="Thêm bình luận"
            ref={inputRef}
            onChange={e => {
              setContent(e.target.value);
            }}
            value={content}
          />
        </form>
      </div>
    </div>
  );
}
