/**
 *
 * FeedPage
 *
 */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useFeedPageSlice } from './slice';
import { selectFeedPage } from './slice/selectors';
import { Post } from 'app/pages/FeedPage/components/Post';
import { UserSuggestion } from 'app/pages/FeedPage/components/UserSuggestion';
import useStyles from './styles';

interface Props {}

export function FeedPage(props: Props) {
  const classes = useStyles();
  const history = useHistory();
  const { actions } = useFeedPageSlice();
  const { posts, suggests } = useSelector(selectFeedPage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.get());
    dispatch(actions.getSuggestion({ query: { skip: 0, limit: 10 } }));
  }, [actions, dispatch]);
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.postWrapper}>
          {posts.map(item => (
            <Post
              key={item._id}
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
            <UserSuggestion data={item} content="Gợi ý cho bạn" follow={() => dispatch(actions.follow(item._id))} />
          ))}
        </div>
      </div>
    </div>
  );
}
