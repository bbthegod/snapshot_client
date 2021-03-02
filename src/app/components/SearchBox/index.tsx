/**
 *
 * NotificationBox
 *
 */
import React from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';
import Avatar from '../Avatar';

interface Props {
  data: any;
  setSearch: any;
}

export default function SearchBox(props: Props) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.searchDropdownWrapper}>
      {props.data.map((item, index) => (
        <div
          className={classes.searchDropdown}
          key={index}
          onClick={() => {
            history.push(`/u/${item.username}`);
            props.setSearch('');
          }}
        >
          <Avatar
            id={item.avatar ? item._id : null}
            alt="avatar"
            className={classes.searchDropdownItemImg}
            size="medium"
          />
          <div className={classes.searchDropdownItemText}>
            <p className={classes.searchDropdownUserName}>{item.username}</p>
            <p className={classes.searchDropdownName}>{item.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
