/**
 *
 * ListItem
 *
 */
import React from 'react';
import useStyles from './styles';
import Avatar from '../../../../components/Avatar';

interface Props {
  content: any;
}

export default function ChatItemReply(props: Props) {
  const { content } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.chat}>{content}</div>
    </div>
  );
}
