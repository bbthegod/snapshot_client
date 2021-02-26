/**
 *
 * ProfileMoreDialog
 *
 */
import * as React from 'react';
import useStyles from './styles';

interface Props {
  setOpen: any;
  changePassword: any;
  report: any;
  logout: any;
}

export default function ProfileSettingDialog(props: Props) {
  const classes = useStyles();
  return (
    <div className={classes.dialog}>
      <div className={classes.dialogContent}>
        <div className={classes.dialogItemWrapper1st} onClick={() => props.changePassword()}>
          <p className={classes.dialogItemText}>Đổi mật khẩu</p>
        </div>
        <div className={classes.dialogItemWrapper}>
          <p className={classes.dialogItemText}>Bảo mật và quyền riêng tư</p>
        </div>
        <div className={classes.dialogItemWrapper} onClick={() => props.report()}>
          <p className={classes.dialogItemText}>Báo cáo sự cố</p>
        </div>
        <div className={classes.dialogItemWrapper} onClick={() => props.logout()}>
          <p className={classes.dialogItemText}>Đăng xuất</p>
        </div>
        <div className={classes.dialogItemWrapperLast} onClick={() => props.setOpen()}>
          <p className={classes.dialogItemText}>Hủy</p>
        </div>
      </div>
    </div>
  );
}
