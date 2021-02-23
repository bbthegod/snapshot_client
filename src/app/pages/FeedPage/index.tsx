/**
 *
 * FeedPage
 *
 */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFeedPageSlice } from './slice';
import { selectFeedPage } from './slice/selectors';
import { Post } from 'app/components/Post';
import { UserSuggestion } from 'app/components/UserSuggestion';
import nasmall from '../../../images/nasmall.jpg';
import useStyles from './styles';

interface Props {}

export function FeedPage(props: Props) {
  const classes = useStyles();
  const { actions } = useFeedPageSlice();
  const { posts } = useSelector(selectFeedPage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.get());
  }, [actions, dispatch]);
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.postWrapper}>{posts && posts.map(item => <Post key={item._id} data={item} />)}</div>
        <div className={classes.suggestWrapper}>
          <div className={classes.suggestHeader}>
            <div className={classes.suggestText1}>Gợi ý cho bạn</div>
            <div className={classes.suggestText2}>Xem tất cả</div>
          </div>
          {[1, 2, 3].map(() => (
            <UserSuggestion
              Avatar={nasmall}
              Name="_.tungnt"
              Content="Gợi ý cho bạn"
              FollowFunction={() => {}}
              LinkFunction={() => {}}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
