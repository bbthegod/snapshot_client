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
      <div className={classes.chat}>đấy tháng trước mua đồ hơi quá Thay ấy tháng trước mua đồ hơi quá tay</div>
    </div>
  );
}
