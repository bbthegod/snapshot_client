/**
 *
 * ProfileMoreDialog
 *
 */
import React, { useRef } from 'react';
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
  const ref = useRef(document.createElement('div'));
  useOutsideClick(ref, () => {
    props.setOpen();
  });
  return (
    <div className={classes.root}>
      <div className={classes.wrapper} ref={ref}>
        <div className={classes.item} onClick={() => props.changePassword()}>
          <p className={classes.text}>Đổi mật khẩu</p>
        </div>
        <div className={classes.item}>
          <p className={classes.text}>Bảo mật và quyền riêng tư</p>
        </div>
        <div className={classes.item} onClick={() => props.report()}>
          <p className={classes.text}>Báo cáo sự cố</p>
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
