/**
 *
 * ListItem
 *
 */
import React from 'react';
import useStyles from './styles';
import Avatar from '../../../../components/Avatar';

interface Props {
  user: any;
  subText: any;
  current?: any;
  active?: any;
  onClick?: any;
}

export default function ListItem(props: Props) {
  const { user, current, active, subText, onClick } = props;
  const classes = useStyles();
  return (
    user && (
      <div className={current ? classes.rootActive : classes.root} onClick={() => onClick()}>
        <Avatar user={user} size="medium" className={classes.avatar} />
        {active && <div className={classes.active} />}
        <div className={classes.nameWrapper}>
          <div className={classes.name}>{user.username}</div>
          <div className={classes.lastMessage}>{subText}</div>
        </div>
      </div>
    )
  );
}
