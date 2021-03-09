/**
 *
 * AccountPage
 *
 */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAccountPageSlice } from './slice';
import { selectAccountPage } from './slice/selectors';
import AccountEditUser from '../../components/AccountEditUser';
import useStyles from './styles';

interface Props {}

export function AccountPage(props: Props) {
  const classes = useStyles();
  const { actions } = useAccountPageSlice();
  const { user } = useSelector(selectAccountPage);
  const [userInfo, setUserInfo] = useState(user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.get());
  }, [actions, dispatch]);
  useEffect(() => {
    setUserInfo(user);
  }, [user]);
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.box}>
          <div className={classes.left}>
            <div className={classes.leftItemActive}>Chỉnh sửa trang cá nhân</div>
            <div className={classes.leftItem}>Đổi mật khẩu</div>
          </div>
          <div className={classes.right}>
            <AccountEditUser
              original={user}
              user={userInfo}
              setUser={setUserInfo}
              onSubmit={() => dispatch(actions.update(userInfo))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
