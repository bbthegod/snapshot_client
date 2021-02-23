/**
 *
 * SignupPage
 *
 */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useSignupPageSlice } from './slice';
import { selectSignupPage } from './slice/selectors';
import useStyles from './styles';
import fb from '../../../images/facebook.svg';
import emailIcon from '../../../images/email.svg';

interface Props {}

export function SignupPage(props: Props) {
  const [validation, setValidation] = useState(false);
  const [email, setEmail] = useState('nguyenthanhtung13399@gmail.com');
  const [name, setName] = useState('nguyen thanh tung');
  const [username, setUsername] = useState('_.tungnt');
  const [password, setPassword] = useState('123');
  const [code, setCode] = useState('');
  //======================================
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { actions } = useSignupPageSlice();
  const { loading } = useSelector(selectSignupPage);
  //======================================
  useEffect(() => {
    if (localStorage.getItem('token')) {
      history.push('/');
    }
  }, [history]);
  //======================================
  function login() {
    history.push('/login');
  }
  function signup() {
    dispatch(actions.signup({ email, username, name, password }));
    setValidation(true);
  }
  function active() {
    dispatch(actions.active({ email, code }));
  }
  function resend() {
    dispatch(actions.resend({ email }));
  }
  //======================================
  return (
    <div className={classes.root}>
      <div className={classes.paper}>
        {!validation ? (
          <>
            <h1 className={classes.logo}>SnapShot</h1>
            <div className={classes.inputArea}>
              <div className={classes.buttonBox}>
                <button className={classes.signupButton}>
                  <img src={fb} alt="facebook logo" className={classes.fbLogo} />
                  <span className={classes.signupWithFb} style={{ color: '#FFFFFF' }}>
                    Đăng nhập bằng Facebook
                  </span>
                </button>
              </div>
              <div className={classes.inputBox}>
                <input
                  type="text"
                  placeholder="Số di động hoặc email"
                  className={classes.input}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className={classes.inputBox}>
                <input
                  type="text"
                  placeholder="Tên đầy đủ"
                  className={classes.input}
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className={classes.inputBox}>
                <input
                  type="text"
                  placeholder="Tên người dùng"
                  className={classes.input}
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
              <div className={classes.inputBox}>
                <input
                  type="text"
                  placeholder="Mật khẩu"
                  className={classes.input}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div className={classes.buttonBox}>
                <button className={classes.button} disabled={loading} onClick={signup}>
                  Đăng ký
                </button>
              </div>
              <div className={classes.policyBox}>
                <p className={classes.policy}>
                  Bằng cách đăng ký, bạn đồng ý với Điều khoản, Chính sách dữ liệu và Chính sách cookie của chúng tôi.
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={classes.validateHeaderWapper}>
              <img src={emailIcon} alt="email" className={classes.validateIcon} />
              <div className={classes.validateHeaderTop}>Nhập mã xác nhận</div>
              <div className={classes.validateHeaderBottom}>
                Nhập mã xác nhận mà chúng tôi đã gửi đến địa chỉ {email}.
                <button className={classes.validateButton} onClick={resend}>
                  Gửi lại mã
                </button>
              </div>
            </div>
            <div className={classes.validateFooterWapper}>
              <div className={classes.inputBox}>
                <input
                  type="text"
                  placeholder="Mã xác nhận"
                  className={classes.input}
                  value={code}
                  onChange={e => setCode(e.target.value)}
                />
              </div>
              <button className={classes.validateButtonSend} disabled={code.length < 6} onClick={active}>
                Tiếp
              </button>
            </div>
          </>
        )}
      </div>
      <div className={classes.signupBox}>
        <p className={classes.signupText}>
          Bạn đã có tài khoản? &nbsp;
          <span className={classes.signup} onClick={login}>
            Đăng Nhập
          </span>
        </p>
      </div>
    </div>
  );
}
