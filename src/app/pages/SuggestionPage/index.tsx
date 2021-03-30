/**
 *
 * SuggestionPage
 *
 */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useSuggestionPageSlice } from './slice';
import { selectSuggestionPage } from './slice/selectors';
import Avatar from '../../components/Avatar';
import useStyles from './styles';

interface Props {}

export function SuggestionPage(props: Props) {
  const classes = useStyles();
  const history = useHistory();
  const { actions } = useSuggestionPageSlice();
  const { suggests } = useSelector(selectSuggestionPage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.get());
  }, [actions, dispatch]);
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.box}>
          {suggests.map((item, index) => (
            <div className={classes.item}>
              <div className={classes.avatarWrapper}>
                <Avatar user={item.avatar} className={classes.avatar} size="medium" />
              </div>
              <div className={classes.infomationWrapper}>
                <div className={classes.username} onClick={() => history.push(`/u/${item.username}`)}>
                  {item.username}
                </div>
                <div className={classes.name}>{item.name}</div>
                <div className={classes.content}>Đề xuất cho bạn</div>
              </div>
              <div className={classes.buttonWrapper}>
                <button className={classes.button} onClick={() => dispatch(actions.follow(item._id))}>
                  Theo dõi
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
