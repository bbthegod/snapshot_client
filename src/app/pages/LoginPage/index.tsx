/**
 *
 * LoginPage
 *
 */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLoginPageSlice } from './slice';
import { selectLoginPage } from './slice/selectors';
import useStyles from './styles';
import fb from '../../../images/facebook.svg';

interface Props {}

export function LoginPage(props: Props) {
  const [email, setEmail] = useState('nguyenthanhtung13399@gmail.com');
  const [password, setPassword] = useState('123');
  //======================================
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { actions } = useLoginPageSlice();
  const { loading } = useSelector(selectLoginPage);
  //======================================
  useEffect(() => {
    if (localStorage.getItem('token')) {
      history.push('/');
    }
  }, [history, loading]);
  //======================================
  function signup() {
    history.push('/signup');
  }
  function login() {
    dispatch(actions.login({ email, password }));
  }
  //======================================
  return (
    <div className={classes.root}>
      <div className={classes.paper}>
        <h1 className={classes.logo}>SnapShot</h1>
        <div className={classes.inputArea}>
          <div className={classes.inputBox}>
            <input
              type="text"
              placeholder="Số điện thoại, tên người dùng hoặc email"
              className={classes.input}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.inputBox}>
            <input
              type="password"
              placeholder="Mật khẩu"
              className={classes.input}
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className={classes.buttonBox}>
            <button className={classes.button} onClick={() => login()} disabled={loading}>
              Đăng nhập
            </button>
          </div>
          <div className={classes.dividerBox}>
            <div className={classes.divider1st}>
              <hr className={classes.hr} />
            </div>
            <div className={classes.divider2nd}>Hoặc</div>
            <div className={classes.divider3rd}>
              <hr className={classes.hr} />
            </div>
          </div>
          <div className={classes.fbLoginBox}>
            <img src={fb} alt="facebook logo" className={classes.fbLogo} />
            <span className={classes.loginWithFb}>Đăng nhập bằng Facebook</span>
          </div>
          <div className={classes.forget}>
            <span className={classes.fbLoginText}>Quên mật khẩu</span>
          </div>
        </div>
      </div>
      <div className={classes.signupBox}>
        <p className={classes.signupText}>
          Bạn không có tài khoản? &nbsp;
          <span className={classes.signup} onClick={signup}>
            Đăng ký
          </span>
        </p>
      </div>
    </div>
  );
}
