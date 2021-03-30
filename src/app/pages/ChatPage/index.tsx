/**
 *
 * ChatPage
 *
 */
import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { request } from 'utils/request';
import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client';
import { SOCKET_URL } from 'utils/url';
import { useChatPageSlice } from './slice';
import { selectChatPage } from './slice/selectors';
import newChatIcon from '../../../images/newchat.svg';
import useStyles from './styles';
import ListItem from './components/ListItem';
import Avatar from '../../components/Avatar';
import ChatInput from './components/ChatInput';
import ChatItemReply from './components/ChatItemReply';
import ChatItemSend from './components/ChatItemSend';
import NewChatDialog from './components/NewChatDialog';
import timeSince from '../../../utils/timesince';

interface Props {}

export default function ChatPage(props: Props) {
  const classes = useStyles();
  const history = useHistory();
  const { actions } = useChatPageSlice();
  const { chats, searchData } = useSelector(selectChatPage);
  const dispatch = useDispatch();
  const [chatMessage, setChatMessage] = useState<any[]>([]);
  const [room, setRoom] = useState<any>();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [search, setSearch] = useState('');
  const [limit, setLimit] = useState(20);
  const [skip, setSkip] = useState(0);
  const id = localStorage.getItem('id');
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  const ref = useRef(document.createElement('div'));
  const socket = io(SOCKET_URL, {
    // withCredentials: true,
    // extraHeaders: {
    //   'my-custom-header': 'abcd',
    // },
  });

  useEffect(() => {
    dispatch(actions.get({ query: { skip, limit } }));
  }, [actions, dispatch]);

  useEffect(() => {
    if (search !== '') {
      dispatch(actions.search({ username: search }));
    }
  }, [actions, dispatch, search]);

  function scrollToBottom() {
    if (ref.current && ref.current.scrollHeight && ref.current.clientHeight) {
      const scroll = ref.current.scrollHeight - ref.current.clientHeight;
      ref.current.scrollTo(0, scroll);
    }
  }
  function getMessage(id) {
    request({
      method: 'POST',
      url: `/message`,
      data: { id },
    }).then(result => {
      if (result) {
        socket.emit('room', { room: result.chat._id });
        setRoom(result.chat);
        setChatMessage(result.messages);
        scrollToBottom();
      }
    });
  }
  // ===========================================================================
  socket.on('return message', message => {
    setChatMessage(oldArray => [...oldArray, message]);
    scrollToBottom();
  });
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.box}>
          <div className={classes.left}>
            <div className={classes.leftHeader}>
              <div className={classes.leftHeaderBox}>
                {username}
                <img src={newChatIcon} alt="new chat" className={classes.newChat} onClick={() => setOpen(true)} />
              </div>
            </div>
            <div className={classes.leftContent}>
              {chats &&
                chats.map(item => (
                  <ListItem
                    user={item.user}
                    current={item % 2 === 0}
                    active={item.user.isOnline}
                    subText={timeSince(item.lastTimeActive)}
                    onClick={() => getMessage(item.user._id)}
                  />
                ))}
            </div>
          </div>
          <div className={classes.right}>
            {room && (
              <>
                <div className={classes.rightHeader}>
                  <div className={classes.rightHeaderBox}>
                    <Avatar
                      user={{ id: '21', username: 'asd', avatar: undefined }}
                      className={classes.avatar}
                      size="small"
                    />
                    <div className={classes.nameBox}>
                      <div className={classes.rightHeaderName}>{room && room.user && room.user.username}</div>
                      <div className={classes.rightHeaderActive}>Đang hoạt động</div>
                    </div>
                    <svg
                      aria-label="info"
                      fill="#262626"
                      height="24"
                      viewBox="0 0 48 48"
                      width="24"
                      className={classes.newChat}
                      onClick={() => {}}
                    >
                      <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z" />
                      <circle clip-rule="evenodd" cx="24" cy="14.8" fill-rule="evenodd" r="2.6" />
                      <path d="M27.1 35.7h-6.2c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h6.2c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z" />
                      <path d="M24 35.7c-.8 0-1.5-.7-1.5-1.5V23.5h-1.6c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5H24c.8 0 1.5.7 1.5 1.5v12.2c0 .8-.7 1.5-1.5 1.5z" />
                    </svg>
                  </div>
                </div>
                <div className={classes.contentWrapper} ref={ref}>
                  {chatMessage &&
                    chatMessage.map(item => {
                      if (item.sender._id === id) {
                        return <ChatItemSend content={item.message} />;
                      } else {
                        return <ChatItemReply user={item.sender} content={item.message} />;
                      }
                    })}
                </div>
                <div className={classes.chatWrapper}>
                  <ChatInput
                    value={value}
                    onChange={e => setValue(e)}
                    onSubmit={() => {
                      socket.emit('message', {
                        token,
                        command: 1000,
                        room: room && room._id,
                        message: value,
                      });
                      setValue('');
                    }}
                    onLove={() => {
                      socket.emit('message', {
                        token,
                        command: 1000,
                        room: room && room._id,
                        message: '❤️',
                      });
                      setValue('');
                    }}
                    disabled={value === ''}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {open && (
        <NewChatDialog
          onClose={() => setOpen(false)}
          search={search}
          setSearch={e => setSearch(e)}
          data={searchData}
          getChat={id => {
            dispatch(getMessage(id));
            setOpen(false);
          }}
        />
      )}
    </div>
  );
}
