import React, { useState, useEffect, useRef } from 'react';
import copy from 'copy-to-clipboard';
import { request } from 'utils/request';
import { useHistory } from 'react-router-dom';
import { HOST } from 'utils/url';
import timeSince from 'utils/timesince';
import useStyles from './styles';
import Avatar from '../../../../components/Avatar';
import MiniComment from './components/MiniComment';
import PostDialog from './components/PostDialog';
import PostInput from './components/PostInput';
import more from '../../../../../images/more.svg';
import like from '../../../../../images/like.svg';
import unlike from '../../../../../images/unlike.svg';
import commentIcon from '../../../../../images/comment.svg';
import saveIcon from '../../../../../images/save.svg';
import savedIcon from '../../../../../images/saved.svg';

interface Props {
  data: any;
  report: any;
  follow: any;
}

export function Post(props: Props) {
  const { data } = props;
  //================================================================
  const [content, setContent] = useState('');
  const [open, setOpen] = useState(false);
  const [seeMore, setSeeMore] = useState(true);
  const [numberOfComments, setNumberOfComments] = useState(-1);
  const [comments, setCommets] = useState<string[]>([]);
  const [liked, setLiked] = useState(data.isUserLiked);
  const [saved, setSaved] = useState(data.isSavedPost);
  const [trimmed, setTrimmed] = useState<string[]>([]);
  //================================================================
  const classes = useStyles();
  const history = useHistory();
  const inputRef = useRef(document.createElement('textarea'));
  //================================================================

  useEffect(() => {
    const array: string[] = data.caption.split('\n');
    setTrimmed(array);
  }, [data.caption]);

  useEffect(() => {
    if (data.comments) {
      request({
        method: 'GET',
        url: `/comment/${data._id}?limit=3`,
      }).then(result => {
        if (result) {
          setCommets(result.data);
          setNumberOfComments(result.count);
        }
      });
    }
  }, [data._id, data.comments]);
  //================================================================
  function likePost() {
    request({
      method: 'POST',
      url: `/like`,
      data: { postId: data._id },
    }).then(result => {
      if (result) setLiked(result.status);
    });
  }

  function save() {
    request({
      method: 'POST',
      url: `/savedPost/`,
      data: { postId: data._id },
    }).then(result => {
      if (result) setSaved(result.status);
    });
  }

  function comment() {
    if (content !== '') {
      request({
        method: 'POST',
        url: `/comment/${data._id}`,
        data: { content: content },
      }).then(result => {
        request({
          method: 'GET',
          url: `/comment/${data._id}?limit=3`,
        }).then(result => {
          if (result) {
            setCommets(result.data);
            setNumberOfComments(result.count);
          }
        });
      });
      setContent('');
    }
  }
  //================================================================
  return (
    <>
      <div className={classes.root}>
        <div className={classes.header}>
          <Avatar user={data.author} className={classes.avatar} size="small" />
          <div className={classes.nameWrapper}>
            <div className={classes.nameBox}>
              <p className={classes.name} onClick={() => history.push(`/u/${data.author.username}`)}>
                {data.author.username}
              </p>
            </div>
            <img src={more} alt="more" className={classes.more} onClick={() => setOpen(true)} />
          </div>
        </div>
        <img
          src={`${HOST}/post/${data.author._id}/${data._id}/original.jpg`}
          alt="post"
          className={classes.imgPost}
          onDoubleClick={() => {
            if (!liked) {
              likePost();
            }
          }}
        />
        <div className={classes.likeWrapper}>
          <img src={liked ? like : unlike} alt="like" className={classes.like} onClick={() => likePost()} />
          <img src={commentIcon} alt="comment" className={classes.like} onClick={() => inputRef.current.focus()} />
          <img src={saved ? savedIcon : saveIcon} alt="save" className={classes.save} onClick={() => save()} />
        </div>
        <div className={classes.likeCount}>
          {(data.likes > 0 || (data.likes === 0 && liked)) && (
            <p className={classes.liekCountText}>{liked ? data.likes + 1 : data.likes} lượt thích</p>
          )}
        </div>
        <div className={classes.commentWrapper}>
          <div className={classes.captionsWrapper}>
            {data.caption && (
              <span className={classes.username}>
                {data.author.username}&nbsp;
                <span className={classes.fistLine}>
                  {trimmed && trimmed[0] && trimmed[0]}
                  <span onClick={() => setSeeMore(false)} className={classes.seeMore}>
                    {trimmed && trimmed[1] && seeMore && '...thêm'}
                  </span>
                </span>
              </span>
            )}
            <pre className={classes.afterLine}>{trimmed && trimmed[1] && !seeMore && trimmed[1]}</pre>
            <div className={classes.seeAllCommentsWrapper}>
              {numberOfComments > 3 && numberOfComments !== -1 && (
                <p className={classes.seeAllComments} onClick={() => history.push(`/p/${data._id}`)}>
                  Xem tất cả {numberOfComments} bình luận
                </p>
              )}
            </div>
            {comments ? comments.map((item, index) => <MiniComment data={item} key={index} />) : null}
            <div className={classes.timestampWapper}>
              <p className={classes.timestamp}>{timeSince(data.createdAt)}</p>
            </div>
          </div>
        </div>
        <form
          onSubmit={e => {
            e.preventDefault();
            comment();
          }}
        >
          <PostInput
            inputRef={inputRef}
            value={content}
            onChange={e => setContent(e)}
            disabled={content === ''}
            onSubmit={() => comment()}
          />
        </form>
      </div>
      {open && (
        <PostDialog
          setOpen={() => setOpen(false)}
          report={(object, reasons) => {
            props.report(object, reasons);
            setOpen(false);
            alert('Cảm ơn bạn đã báo cáo cho chúng tôi.');
          }}
          unfollow={() => {
            setOpen(false);
            props.follow();
          }}
          goTo={() => history.push(`/p/${data._id}`)}
          copy={() => {
            copy(`${window.location.origin}/p/${data._id}`);
            setOpen(false);
            alert('Đã sao chép liên kết vào bộ nhớ tạm.');
          }}
        />
      )}
    </>
  );
}
