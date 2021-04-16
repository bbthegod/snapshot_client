/**
 *
 * FeedPage
 *
 */
import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useFeedPageSlice } from './slice';
import { selectFeedPage } from './slice/selectors';
import { Post } from 'app/pages/FeedPage/components/Post';
import { UserSuggestion } from 'app/pages/FeedPage/components/UserSuggestion';
import useStyles from './styles';

interface Props {}

let duplicated: string[] = [];

export function FeedPage(props: Props) {
  const classes = useStyles();
  const history = useHistory();
  const { actions } = useFeedPageSlice();
  const { posts, suggests, out } = useSelector(selectFeedPage);
  const outOfPost = useMemo(() => out, [out]);
  const ref = useRef(document.createElement('div'));
  const dispatch = useDispatch();

  const listenToScroll = useCallback(() => {
    if (!outOfPost) {
      const bottom = ref.current.clientHeight === window.innerHeight + window.scrollY;
      if (bottom) {
        dispatch(actions.get({ duplicated }));
      }
    }
  }, [actions, dispatch, outOfPost]);

  useEffect(() => {
    dispatch(actions.get({ duplicated: [] }));
    dispatch(actions.getSuggestion({ query: { skip: 0, limit: 10 } }));
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actions, dispatch]);

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, [listenToScroll]);

  useEffect(() => {
    if (posts) {
      const newArr: string[] = [];
      posts.forEach(item => {
        newArr.push(item._id);
      });
      duplicated = Array.from(new Set([...duplicated, ...newArr]));
    }
  }, [posts]);

  return (
    <div className={classes.root} ref={ref}>
      <div className={classes.wrapper}>
        <div className={classes.postWrapper}>
          {posts.map((item, index) => (
            <Post
              key={index}
              data={item}
              report={(object, reasons) => dispatch(actions.report({ object, reasons, id: item._id }))}
              follow={() => dispatch(actions.follow(item.author._id))}
            />
          ))}
        </div>
        <div className={classes.suggestWrapper}>
          <div className={classes.suggestHeader}>
            <div className={classes.suggestText1}>Gợi ý cho bạn</div>
            <div className={classes.suggestText2} onClick={() => history.push('/suggest')}>
              Xem tất cả
            </div>
          </div>
          {suggests.map(item => (
            <UserSuggestion
              data={item}
              content="Gợi ý cho bạn"
              follow={() => dispatch(actions.follow(item._id))}
              key={item._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
