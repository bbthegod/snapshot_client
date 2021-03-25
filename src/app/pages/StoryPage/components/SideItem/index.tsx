/**
 *
 * DisplayItem
 *
 */
import React, { useState } from 'react';
import useStyles from './styles';
import Avatar from '../../../../components/Avatar';
import timeSince from '../../../../../utils/timesince';

interface Props {
  image: any;
  user: any;
  time: any;
  onClick: any;
}

export default function DisplayItem(props: Props) {
  const { image, user, time, onClick } = props;
  const classes = useStyles();
  return (
    <div className={classes.root} onClick={() => onClick()}>
      <img className={classes.image} src={image} alt="post" />
      <div className={classes.info}>
        <Avatar user={user} className={classes.avatar} size="small" />
        <div className={classes.name}>{user.username}</div>
        <div className={classes.time}>{timeSince(time)}</div>
      </div>
    </div>
  );
}
