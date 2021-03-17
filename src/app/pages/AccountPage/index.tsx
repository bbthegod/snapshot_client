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
import AccountEmailAndSms from '../../components/AccountEmailAndSms';
import AccountNotificationPush from '../../components/AccountNotificationPush';
import AccountPrivacyAndSecurity from '../../components/AccountPrivacyAndSecurity';
import useStyles from './styles';

interface Props {}

export function AccountPage(props: Props) {
  const classes = useStyles();
  const [tab, setTab] = useState(4);
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
            <div className={tab === 3 ? classes.leftItemActive : classes.leftItem} onClick={() => setTab(3)}>
              Email và SMS
            </div>
            <div className={tab === 4 ? classes.leftItemActive : classes.leftItem} onClick={() => setTab(4)}>
              Thông báo đẩy
            </div>
            <div className={tab === 5 ? classes.leftItemActive : classes.leftItem} onClick={() => setTab(5)}>
              Bảo mật và quyền riêng tư
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
            {tab === 3 && <AccountEmailAndSms />}
            {tab === 4 && <AccountNotificationPush />}
            {tab === 5 && <AccountPrivacyAndSecurity />}
          </div>
        </div>
      </div>
    </div>
  );
}
