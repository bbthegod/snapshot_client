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
  active?: any;
}

export default function ListItem(props: Props) {
  const { user, active } = props;
  const classes = useStyles();
  return (
    <div className={active ? classes.rootActive : classes.root}>
      <Avatar user={{ id: '21', username: 'asd', avatar: undefined }} size="medium" className={classes.avatar} />
      <div className={classes.nameWrapper}>
        <div className={classes.name}>minhduyen_3108</div>
        <div className={classes.lastMessage}>Hoạt động 1 giờ trước</div>
      </div>
    </div>
  );
}
