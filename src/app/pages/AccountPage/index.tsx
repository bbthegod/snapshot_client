/**
 *
 * AccountPage
 *
 */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useAccountPageSlice } from './slice';
import { selectAccountPage } from './slice/selectors';
import AccountEditUser from './components/AccountEditUser';
import AccountChangePassword from './components/AccountChangePassword';
import useStyles from './styles';

interface Props {
  match: any;
}

export function AccountPage(props: Props) {
  const classes = useStyles();
  const [tab, setTab] = useState(1);
  const { actions } = useAccountPageSlice();
  const { user } = useSelector(selectAccountPage);
  const [userInfo, setUserInfo] = useState(user);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(actions.get());
    if (props.match.params.index === 'edit') {
      setTab(1);
    } else if (props.match.params.index === 'password') {
      setTab(2);
    }
  }, [actions, dispatch, props.match.params.index]);
  useEffect(() => {
    setUserInfo(user);
  }, [user]);
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.box}>
          <div className={classes.left}>
            <div
              className={tab === 1 ? classes.leftItemActive : classes.leftItem}
              onClick={() => history.push('/account/edit')}
            >
              Chỉnh sửa trang cá nhân
            </div>
            <div
              className={tab === 2 ? classes.leftItemActive : classes.leftItem}
              onClick={() => history.push('/account/password')}
            >
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
