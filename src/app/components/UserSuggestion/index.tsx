import React from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';
import Avatar from '../Avatar';

interface Props {
  data: any;
  Content: string;
  FollowFunction: Function;
}

export function UserSuggestion(props: Props) {
  const classes = useStyles();
  const history = useHistory();
  const { data, Content, FollowFunction } = props;
  return (
    <div className={classes.root}>
      <Avatar id={data.avatar ? data._id : null} alt="avatar" className={classes.image} size="small" />
      <div className={classes.main}>
        <span className={classes.name} onClick={() => history.push(`/u/${data.username}`)}>
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
