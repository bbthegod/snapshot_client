/**
 *
 * NewChatDialog
 *
 */ import React, { useState } from 'react';
import useStyles from './styles';
import closeIcon from '../../../../../images/close.svg';
import ListItem from '../ListItem';

interface Props {
  onClose: any;
  search: any;
  setSearch: any;
  data: any;
  getChat: any;
}

export default function NewChatDialog(props: Props) {
  const { onClose, search, setSearch, data, getChat } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.item}>
          <div className={classes.sideItem}>
            <img src={closeIcon} alt="close" className={classes.icon} onClick={() => props.onClose()} />
          </div>
          <div className={classes.centerItem}>Tin nhắn mới</div>
        </div>
        <div className={classes.searchWrapper}>
          <input
            type="text"
            placeholder="Tìm kiếm"
            className={classes.input}
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className={classes.userWrapper}>
          {data.map(item => (
            <ListItem user={item.users} subText={item.users.name} onClick={() => getChat(item.users._id)} />
          ))}
        </div>
      </div>
    </div>
  );
}
