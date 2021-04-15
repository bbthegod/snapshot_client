/**
 *
 * ChatPage
 *
 */
import React, { useEffect, useRef, useState, useCallback } from 'react';
// import { useHistory } from 'react-router-dom';
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
let renderCount = 0;
interface Props {}

const socket = io(SOCKET_URL);

export default function ChatPage(props: Props) {
  renderCount += 1;
  console.log(renderCount);
  //=============================================
  const classes = useStyles();
  // const history = useHistory();
  const { actions } = useChatPageSlice();
  const { chats, searchData } = useSelector(selectChatPage);
  const dispatch = useDispatch();
  const [chatMessage, setChatMessage] = useState<any[]>([]);
  const [room, setRoom] = useState<any>();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [skip, setSkip] = useState(0);
  const [currentMessage, setCurrentMessage] = useState('');
  const [out, setOut] = useState(false);
  const id = localStorage.getItem('id');
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  const ref = useRef(document.createElement('div'));
  const limit = 10;

  const sock = useCallback(() => {
    socket.on('return message', message => {
      setChatMessage(oldArray => [...oldArray, message]);
      scrollToBottom();
    });
  }, []);

  useEffect(() => {
    dispatch(actions.get({}));
  }, [actions, dispatch]);

  useEffect(() => {
    sock();
  }, [sock]);

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
  function getMoreMessage(sk) {
    if (!out) {
      setSkip(sk);
      request({
        method: 'POST',
        url: `/message?skip=${sk}&limit=${limit}`,
        data: { id: currentMessage },
      }).then(result => {
        if (result && !result.messages.length) return setOut(true);
        if (result && result.messages) {
          const newArr = result.messages.reverse();
          setChatMessage([...newArr, ...chatMessage]);
          ref.current.scrollTo(0, 600);
        }
      });
    }
  }

  function getMessage(id) {
    setOut(false);
    setChatMessage([]);
    setSkip(0);
    setRoom(undefined);
    request({
      method: 'POST',
      url: `/message?skip=${skip}&limit=${limit}`,
      data: { id },
    }).then(result => {
      if (result) {
        socket.emit('room', { room: result.chat._id });
        setRoom(result.chat);
        setChatMessage(result.messages.reverse());
        setCurrentMessage(id);
        scrollToBottom();
      }
    });
  }
  // ===========================================================================
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
                    key={item._id}
                    user={item.user}
                    current={item % 2 === 0}
                    active={item.user.isOnline}
                    subText={timeSince(item.lastTimeActive)}
                    onClick={() => {
                      getMessage(item.user._id);
                      dispatch(actions.get({}));
                    }}
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
                    </div>
                  </div>
                </div>
                <div className={classes.contentWrapper}>
                  <div
                    className={classes.content}
                    ref={ref}
                    onScroll={() => {
                      if (ref.current.scrollTop === 0 && !out) {
                        getMoreMessage(skip + 10);
                      }
                    }}
                  >
                    {chatMessage &&
                      chatMessage.map((item, index) => {
                        if (item.sender._id === id) {
                          return <ChatItemSend content={item.message} key={index} />;
                        } else {
                          return <ChatItemReply user={item.sender} content={item.message} key={index} />;
                        }
                      })}
                  </div>
                </div>
                <div className={classes.chatWrapper}>
                  <ChatInput
                    onSubmit={value => {
                      socket.emit('message', {
                        token,
                        command: 1000,
                        room: room && room._id,
                        message: value,
                      });
                    }}
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
            getMessage(id);
            setOpen(false);
          }}
        />
      )}
    </div>
  );
}
