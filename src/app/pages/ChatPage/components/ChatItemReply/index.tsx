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
  content: any;
}

export default function ChatItemReply(props: Props) {
  const { user, content } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar user={user} size="medium" className={classes.avatar} />
      <div className={classes.chat}>{content}</div>
    </div>
  );
}
