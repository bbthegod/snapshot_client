import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import useOutsideClick from 'utils/useOutsideClick';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigatorSlice } from './slice';
import { useChatPageSlice } from '../ChatPage/slice/index';
import { selectNavigator } from './slice/selectors';
import io from 'socket.io-client';
import { SOCKET_URL } from 'utils/url';
import NotificationBox from './components/NotificationBox';
import SearchBox from './components/SearchBox';
import AvatarBox from './components/AvatarBox';
import Snackbar from '../../components/Snackbar';
import Avatar from '../../components/Avatar';
import PostDialog from './components/PostDialog';
import home from '../../../images/home.svg';
import homeActive from '../../../images/home-active.svg';
import noti from '../../../images/noti.svg';
import post from '../../../images/post.svg';
import direct from '../../../images/direct2.svg';
import notiActive from '../../../images/noti-active.svg';
import useStyles from './styles';

const socket = io(SOCKET_URL);

export default function Navigator() {
  const [avatarDropdown, setAvatarDropdown] = useState(false);
  const [notiDropdown, setNotiDropdown] = useState(false);
  const [search, setSearch] = useState('');
  const [ramdomKey, setRamdomKey] = useState('0');
  const [file, setFile] = useState();
  //======================================
  const { actions } = useNavigatorSlice();
  const { actions: chatActions } = useChatPageSlice();
  const { searchData, loading, snackbar, message, notifications, postSuccess } = useSelector(selectNavigator);
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const refSearch = useRef(document.createElement('div'));
  const refNoti = useRef(document.createElement('div'));
  const refUser = useRef(document.createElement('div'));
  const username = localStorage.getItem('username');
  const avatar = localStorage.getItem('avatar');
  const id = localStorage.getItem('id');
  const path = history.location.pathname.split('/');
  //======================================
  socket.on('new room', () => dispatch(chatActions.get({})));
  useEffect(() => {
    if (search !== '') {
      dispatch(actions.search(search));
    }
  }, [actions, dispatch, search]);

  useEffect(() => {
    if (postSuccess) {
      window.location.reload();
    }
  }, [postSuccess]);

  useEffect(() => {
    socket.emit('login', {
      command: 1000,
      token: localStorage.getItem('token'),
    });
    socket.emit('check', { token: localStorage.getItem('token') });
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    dispatch(actions.getNoti());
  }, [actions, dispatch, notiDropdown]);
  useOutsideClick(refNoti, () => {
    setNotiDropdown(false);
  });
  useOutsideClick(refUser, () => {
    setAvatarDropdown(false);
  });
  useOutsideClick(refSearch, () => {
    setSearch('');
  });

  function upload(event) {
    setFile(event.target.files[0]);
  }
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
        {search !== '' && <SearchBox loading={loading} data={searchData} setSearch={setSearch} />}
        <div className={classes.iconBox}>
          <img
            alt="home"
            src={path[1] === '' ? homeActive : home}
            className={classes.home}
            onClick={() => history.push('/')}
          />
          <label htmlFor="inputPost">
            <img alt="post" src={post} className={classes.centerIcon} onClick={() => {}} />
          </label>
          <input
            id="inputPost"
            type="file"
            style={{ display: 'none' }}
            onChange={event => upload(event)}
            accept="image/png, image/jpeg, image/jpg"
            multiple={false}
            key={ramdomKey}
          />
          <img alt="direct" src={direct} className={classes.centerIcon} onClick={() => history.push('/direct')} />
          <div className={classes.dropdownWapper} onClick={() => setNotiDropdown(!notiDropdown)} ref={refNoti}>
            <img alt="noti" src={notiDropdown ? notiActive : noti} className={classes.centerIcon} />
            {notiDropdown && <NotificationBox loading={loading} notifications={notifications} />}
          </div>
          <div className={classes.dropdownWapper} ref={refUser} onClick={() => setAvatarDropdown(!avatarDropdown)}>
            <Avatar user={{ username, avatar: avatar === 'true', _id: id }} className={classes.avatar} size="small" />
            {path[1] === 'u' && (
              <div className={classes.avatarCircle} onClick={() => setAvatarDropdown(!avatarDropdown)} />
            )}
            {avatarDropdown && <AvatarBox setAvatarDropdown={setAvatarDropdown} />}
          </div>
        </div>
      </nav>
      {snackbar && <Snackbar onClose={() => dispatch(actions.closeSnackBar())} content={message} />}
      {file && (
        <PostDialog
          onClose={() => {
            setFile(undefined);
            setRamdomKey(Math.random().toString(36));
          }}
          file={file}
          onPost={data => dispatch(actions.post(data))}
        />
      )}
    </>
  );
}
