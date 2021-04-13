/**
 *
 * ListItem
 *
 */
import React, { useState, memo } from 'react';
import useStyles from './styles';
import Avatar from '../../../../components/Avatar';
import io from 'socket.io-client';
import { SOCKET_URL } from 'utils/url';

interface Props {
  user: any;
  subText: any;
  current?: any;
  active?: any;
  onClick?: any;
}

const socket = io(SOCKET_URL);

export default memo((props: Props) => {
  const { user, current, active, subText, onClick } = props;
  const classes = useStyles();
  const [activeStatus, setActiveStatus] = useState(active);
  socket.on('active status', data => {
    if (data.id === user._id) {
      setActiveStatus(data.status);
    }
  });
  return (
    user && (
      <div className={current ? classes.rootActive : classes.root} onClick={() => onClick()}>
        <Avatar user={user} size="medium" className={classes.avatar} />
        {activeStatus && <div className={classes.active} />}
        <div className={classes.nameWrapper}>
          <div className={classes.name}>{user.username}</div>
          <div className={classes.lastMessage}>{subText}</div>
        </div>
      </div>
    )
  );
});
