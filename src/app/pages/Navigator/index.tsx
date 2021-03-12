import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import useOutsideClick from 'utils/useOutsideClick';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigatorSlice } from './slice';
import { selectNavigator } from './slice/selectors';
import useStyles from './styles';
import NotificationBox from '../../components/NotificationBox';
import SearchBox from '../../components/SearchBox';
import AvatarBox from '../../components/AvatarBox';
import Snackbar from '../../components/Snackbar';
import Avatar from '../../components/Avatar';
import home from '../../../images/home.svg';
import homeActive from '../../../images/home-active.svg';
import noti from '../../../images/noti.svg';
import notiActive from '../../../images/noti-active.svg';

export default function Navigator() {
  const [avatarDropdown, setAvatarDropdown] = useState(false);
  const [notiDropdown, setNotiDropdown] = useState(false);
  const [search, setSearch] = useState('');
  //======================================
  const { actions } = useNavigatorSlice();
  const { searchData, loading, snackbar, message } = useSelector(selectNavigator);
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const refSearch = useRef(document.createElement('div'));
  const refNoti = useRef(document.createElement('div'));
  const refUser = useRef(document.createElement('div'));
  const avatar = localStorage.getItem('avatar');
  const id = localStorage.getItem('id');
  const path = history.location.pathname.split('/');
  //======================================
  useEffect(() => {
    if (search !== '') {
      dispatch(actions.search(search));
    }
  }, [actions, dispatch, search]);
  useOutsideClick(refNoti, () => {
    setNotiDropdown(false);
  });
  useOutsideClick(refUser, () => {
    setAvatarDropdown(false);
  });
  useOutsideClick(refSearch, () => {
    setSearch('');
  });
  return (
    <>
      <nav className={classes.root}>
        <div className={classes.logoBox}>
          <p className={classes.logo} onClick={() => history.push('/')}>
            SnapShot
          </p>
        </div>
        <div className={classes.searchBox}>
          <input
            className={classes.search}
            placeholder="Tìm kiếm"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        {search !== '' && searchData && !loading && <SearchBox data={searchData} setSearch={setSearch} />}
        <div className={classes.iconBox}>
          <img
            alt="home"
            src={path[1] === '' ? homeActive : home}
            className={classes.home}
            onClick={() => history.push('/')}
          />
          <div className={classes.dropdownWapper} onClick={() => setNotiDropdown(!notiDropdown)} ref={refNoti}>
            <img alt="noti" src={notiDropdown ? notiActive : noti} className={classes.centerIcon} />
            {notiDropdown && <NotificationBox />}
          </div>
          <div className={classes.dropdownWapper} ref={refUser} onClick={() => setAvatarDropdown(!avatarDropdown)}>
            <Avatar id={avatar ? id : null} alt="avatar" className={classes.avatar} size="small" />
            {path[1] === 'u' && (
              <div className={classes.avatarCircle} onClick={() => setAvatarDropdown(!avatarDropdown)} />
            )}
            {avatarDropdown && <AvatarBox setAvatarDropdown={setAvatarDropdown} />}
          </div>
        </div>
      </nav>
      {snackbar && <Snackbar onClose={() => dispatch(actions.closeSnackBar())} content={message} />}
    </>
  );
}
