/**
 *
 * NotificationBox
 *
 */
import React from 'react';
import useStyles from './styles';

interface Props {}

export default function NotificationBox(props: Props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <div className={classes.profileBox}>
        <img src={profile} alt="profile" className={classes.iconDropdown} />
        <p className={classes.textDropdown}>Trang cá nhân</p>
      </div>
      <div className={classes.settingsBox}>
        <img src={settings} alt="settings" className={classes.iconDropdown} />
        <p className={classes.textDropdown}>Cài đặt</p>
      </div>
      <div className={classes.logoutBox}>
        <p className={classes.textDropdown}>Đăng xuất</p>
      </div> */}
    </div>
  );
}
