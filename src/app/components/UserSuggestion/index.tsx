import React from 'react';
import useStyles from './styles';
import Avatar from '../Avatar';

interface Props {
  data: any;
  Content: string;
  FollowFunction: Function;
  LinkFunction: Function;
}

export function UserSuggestion(props: Props) {
  const classes = useStyles();
  const { data, Content, FollowFunction, LinkFunction } = props;
  return (
    <div className={classes.root}>
      <Avatar id={data.avatar ? data._id : null} alt="avatar" className={classes.image} size="small" />
      <div className={classes.main}>
        <span className={classes.name} onClick={() => LinkFunction()}>
          {data.username}
        </span>
        <span className={classes.content}>{Content}</span>
      </div>
      <div className={classes.follow} onClick={() => FollowFunction()}>
        Theo dõi
      </div>
    </div>
  );
}
