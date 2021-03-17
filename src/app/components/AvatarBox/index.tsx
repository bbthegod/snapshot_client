/**
 *
 * NotificationBox
 *
 */
import React from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';
import profile from '../../../images/profile.svg';
import settings from '../../../images/settings.svg';

interface Props {
  setAvatarDropdown: any;
}

export default function AvatarBox(props: Props) {
  const classes = useStyles();
  const history = useHistory();
  const username = localStorage.getItem('username');
  return (
    <div className={classes.avatarDropdownBox}>
      <div
        className={classes.profileBox}
        onClick={() => {
          history.push(`/u/${username}`);
          props.setAvatarDropdown(false);
        }}
      >
        <img src={profile} alt="profile" className={classes.iconDropdown} />
        <p className={classes.textDropdown}>Trang cá nhân</p>
      </div>
      <div
        className={classes.settingsBox}
        onClick={() => {
          history.push(`/account`);
          props.setAvatarDropdown(false);
        }}
      >
        <img src={settings} alt="settings" className={classes.iconDropdown} />
        <p className={classes.textDropdown}>Cài đặt</p>
      </div>
      <div
        className={classes.logoutBox}
        onClick={() => {
          localStorage.clear();
          history.push('/login');
        }}
      >
        <p className={classes.textDropdown}>Đăng xuất</p>
      </div>
    </div>
  );
}
