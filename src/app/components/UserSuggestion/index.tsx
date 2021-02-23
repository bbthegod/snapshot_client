import React from 'react';
import useStyles from './styles';

interface Props {
  Avatar: any;
  Name: string;
  Content: string;
  FollowFunction: Function;
  LinkFunction: Function;
}

export function UserSuggestion(props: Props) {
  const classes = useStyles();
  const { Avatar, Name, Content, FollowFunction, LinkFunction } = props;
  return (
    <div className={classes.root}>
      <img src={Avatar} alt="avatar" className={classes.image} onClick={() => LinkFunction()} />
      <div className={classes.main}>
        <span className={classes.name} onClick={() => LinkFunction()}>
          {Name}
        </span>
        <span className={classes.content}>{Content}</span>
      </div>
      <div className={classes.follow} onClick={() => FollowFunction()}>
        Theo dõi
      </div>
    </div>
  );
}
