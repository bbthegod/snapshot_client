/**
 *
 * ChatPage
 *
 */
import React, { useEffect, useState } from 'react';
import newChatIcon from '../../../images/newchat.svg';
import useStyles from './styles';
import ListItem from './components/ListItem';
import Avatar from '../../components/Avatar';
import ChatInput from '../../components/ChatInput';
import ChatItemReply from './components/ChatItemReply';
import ChatItemSend from './components/ChatItemSend';

interface Props {}

export default function ChatPage(props: Props) {
  const classes = useStyles();
  const [value, setValue] = useState('');
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.box}>
          <div className={classes.left}>
            <div className={classes.leftHeader}>
              <div className={classes.leftHeaderBox}>
                _.tungnt
                <img src={newChatIcon} alt="new chat" className={classes.newChat} />
              </div>
            </div>
            <div className={classes.leftContent}>
              {[1, 2, 3, 4].map(item => (
                <ListItem user={null} active={item % 2 === 0} />
              ))}
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.rightHeader}>
              <div className={classes.rightHeaderBox}>
                <Avatar
                  user={{ id: '21', username: 'asd', avatar: undefined }}
                  className={classes.avatar}
                  size="small"
                />
                <div className={classes.nameBox}>
                  <div className={classes.rightHeaderName}>minhduyen_3108</div>
                  <div className={classes.rightHeaderActive}>Hoạt động 1 giờ trước</div>
                </div>
                <svg
                  aria-label="info"
                  fill="#262626"
                  height="24"
                  viewBox="0 0 48 48"
                  width="24"
                  className={classes.newChat}
                >
                  <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z" />
                  <circle clip-rule="evenodd" cx="24" cy="14.8" fill-rule="evenodd" r="2.6" />
                  <path d="M27.1 35.7h-6.2c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h6.2c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z" />
                  <path d="M24 35.7c-.8 0-1.5-.7-1.5-1.5V23.5h-1.6c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5H24c.8 0 1.5.7 1.5 1.5v12.2c0 .8-.7 1.5-1.5 1.5z" />
                </svg>
              </div>
            </div>
            <div className={classes.contentWrapper}>
              <div className={classes.content}>
                <ChatItemReply user={null} content={null} />
                <ChatItemSend user={null} content={null} />
              </div>
            </div>
            <div className={classes.chatWrapper}>
              <ChatInput value={value} onChange={e => setValue(e)} onSubmit={() => {}} disabled={value === ''} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
