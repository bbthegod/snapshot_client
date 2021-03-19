/**
 *
 * NotificationBox
 *
 */
import React from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';
import Avatar from '../Avatar';
import Loading from '../Loading';

interface Props {
  data: any;
  setSearch: any;
  loading: any;
}

export default function SearchBox(props: Props) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.searchDropdownWrapper}>
      {props.loading && (
        <div className={classes.loading}>
          <Loading />
        </div>
      )}
      {!props.loading && props.data ? (
        props.data.map((item, index) => (
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
        ))
      ) : (
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          Không tìm thấy kết quả nào.
        </div>
      )}
    </div>
  );
}
