import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { HOST } from 'utils/url';
import useStyles from './styles';
import home from '../../../images/home.svg';
import homeActive from '../../../images/home-active.svg';
import explore from '../../../images/explore.svg';
import noti from '../../../images/noti.svg';
import profile from '../../../images/profile.svg';
import settings from '../../../images/settings.svg';
import nasmall from '../../../images/nasmall.jpg';

export default function Navigator() {
  const [avatarDropdown, setAvatarDropdown] = useState(false);
  const [notiDropdown, setNotiDropdown] = useState(false);
  //======================================
  const classes = useStyles();
  const history = useHistory();
  const avatar = localStorage.getItem('avatar');
  const id = localStorage.getItem('id');
  const username = localStorage.getItem('username');
  const path = history.location.pathname.split('/');
  //======================================
  return (
    <nav className={classes.root}>
      <div className={classes.logoBox}>
        <p
          className={classes.logo}
          onClick={() => {
            history.push('/');
          }}
        >
          SnapShot
        </p>
      </div>
      <div className={classes.searchBox}>
        <input className={classes.search} placeholder="Tìm kiếm" />
      </div>
      <div className={classes.iconBox}>
        <img
          alt="home"
          src={path[1] === '' ? homeActive : home}
          className={classes.home}
          onClick={() => {
            history.push('/');
          }}
        />
        <img alt="explore" src={explore} className={classes.centerIcon} />
        <div
          className={classes.dropdownWapper}
          onClick={() => {
            setNotiDropdown(!notiDropdown);
          }}
        >
          <img alt="noti" src={noti} className={classes.centerIcon} />
          {notiDropdown && (
            <div className={classes.avatarDropdownBox}>
              <div className={classes.profileBox}>
                <img src={profile} alt="profile" className={classes.iconDropdown} />
                <p className={classes.textDropdown}>Trang cá nhân</p>
              </div>
              <div className={classes.settingsBox}>
                <img src={settings} alt="settings" className={classes.iconDropdown} />
                <p className={classes.textDropdown}>Cài đặt</p>
              </div>
              <div className={classes.logoutBox}>
                <p className={classes.textDropdown}>Đăng xuất</p>
              </div>
            </div>
          )}
        </div>
        <div className={classes.dropdownWapper}>
          <img
            src={avatar ? `${HOST}/avatar/${id}/small.jpg` : nasmall}
            alt="avatar"
            className={classes.avatar}
            onClick={() => setAvatarDropdown(!avatarDropdown)}
          />
          {path[1] === 'u' && (
            <div className={classes.avatarCircle} onClick={() => setAvatarDropdown(!avatarDropdown)} />
          )}
          {avatarDropdown && (
            <div className={classes.avatarDropdownBox}>
              <div
                className={classes.profileBox}
                onClick={() => {
                  history.push(`/u/${username}`);
                  setAvatarDropdown(false);
                }}
              >
                <img src={profile} alt="profile" className={classes.iconDropdown} />
                <p className={classes.textDropdown}>Trang cá nhân</p>
              </div>
              <div className={classes.settingsBox}>
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
          )}
        </div>
      </div>
    </nav>
  );
}
