import React from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';
import Avatar from '../../../../components/Avatar';

interface Props {
  data: any;
  content: any;
  follow: Function;
}

export function UserSuggestion(props: Props) {
  const classes = useStyles();
  const history = useHistory();
  const { data, content, follow } = props;
  return (
    <div className={classes.root}>
      <Avatar user={data.avatar} className={classes.image} size="small" />
      <div className={classes.main}>
        <span className={classes.name} onClick={() => history.push(`/u/${data.username}`)}>
          {data.username}
        </span>
        <span className={classes.content}>{content}</span>
      </div>
      <div className={classes.follow} onClick={() => follow()}>
        Theo dõi
      </div>
    </div>
  );
}
