/**
 *
 * ProfileMoreDialog
 *
 */
import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import useOutsideClick from 'utils/useOutsideClick';
import useStyles from './styles';

interface Props {
  setOpen: any;
  changePassword: any;
  report: any;
  logout: any;
}

export default function ProfileSettingDialog(props: Props) {
  const classes = useStyles();
  const history = useHistory();
  const ref = useRef(document.createElement('div'));
  useOutsideClick(ref, () => {
    props.setOpen();
  });
  return (
    <div className={classes.root}>
      <div className={classes.wrapper} ref={ref}>
        <div className={classes.item} onClick={() => history.push('/account/password')}>
          <p className={classes.text}>Đổi mật khẩu</p>
        </div>
        <div className={classes.item} onClick={() => props.logout()}>
          <p className={classes.text}>Đăng xuất</p>
        </div>
        <div className={classes.item} onClick={() => props.setOpen()}>
          <p className={classes.text}>Hủy</p>
        </div>
      </div>
    </div>
  );
}
