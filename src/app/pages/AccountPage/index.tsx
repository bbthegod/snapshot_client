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
import AccountChangePassword from '../../components/AccountChangePassword';
import useStyles from './styles';

interface Props {}

export function AccountPage(props: Props) {
  const classes = useStyles();
  const [tab, setTab] = useState(1);
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
            <div className={tab === 1 ? classes.leftItemActive : classes.leftItem} onClick={() => setTab(1)}>
              Chỉnh sửa trang cá nhân
            </div>
            <div className={tab === 2 ? classes.leftItemActive : classes.leftItem} onClick={() => setTab(2)}>
              Đổi mật khẩu
            </div>
          </div>
          <div className={classes.right}>
            {tab === 1 && (
              <AccountEditUser
                original={user}
                user={userInfo}
                setUser={setUserInfo}
                onSubmit={() => dispatch(actions.update(userInfo))}
                onChangeAvatar={file => dispatch(actions.avatar({ img: file }))}
                onRemoveAvatar={() => dispatch(actions.removeAvatar())}
              />
            )}
            {tab === 2 && <AccountChangePassword user={user} onSubmit={data => dispatch(actions.password(data))} />}
          </div>
        </div>
      </div>
    </div>
  );
}
