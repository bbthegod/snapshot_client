/**
 *
 * AccountChangePassword
 *
 */
import React, { useState } from 'react';
import Avatar from '../Avatar';
import useStyles from './styles';

interface Props {
  user: any;
  onSubmit: any;
}

export default function AccountChangePassword(props: Props) {
  const { user, onSubmit } = props;
  const [password, setPassword] = useState({
    old: '',
    new: '',
    repeat: '',
  });
  const classes = useStyles();
  return (
    <>
      <div className={classes.header}>
        <div className={classes.avatarWrapper}>
          <Avatar id={user.avatar ? user._id : null} alt="avatar" className={classes.avatar} size="small" />
        </div>
        <div className={classes.nameWrapper}>
          <div className={classes.name}>{user.username}</div>
        </div>
      </div>
      <form
        className={classes.form}
        onSubmit={e => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className={classes.rightIem}>
          <div className={classes.lable}>Mật khẩu cũ</div>
          <input
            className={classes.input}
            value={user.old}
            type="password"
            onChange={e => setPassword({ ...password, ...{ old: e.target.value } })}
          />
        </div>
        <div className={classes.rightIem}>
          <div className={classes.lable}>Mật khẩu mới</div>
          <input
            className={classes.input}
            value={user.new}
            type="password"
            onChange={e => setPassword({ ...password, ...{ new: e.target.value } })}
          />
        </div>
        <div className={classes.rightIem}>
          <div className={classes.lable}>Xác nhận mật khẩu mới</div>
          <input
            className={classes.input}
            value={user.repeat}
            type="password"
            onChange={e => setPassword({ ...password, ...{ repeat: e.target.value } })}
          />
        </div>
        <div className={classes.rightIem}>
          <div className={classes.lable}></div>
          <button
            className={password.old !== '' ? classes.buttonDisabled : classes.button}
            type="submit"
            disabled={password.old !== ''}
          >
            Đổi mật khẩu
          </button>
        </div>
        <div className={classes.rightIem}>
          <div className={classes.lable}></div>
          <div className={classes.forget}>Quên mật khẩu?</div>
        </div>
      </form>
    </>
  );
}
