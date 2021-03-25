/**
 *
 * Avatar
 *
 */
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { HOST } from 'utils/url';
import nasmall from '../../../images/nasmall.jpg';
import namedium from '../../../images/namedium.jpg';

interface Props {
  user: any;
  size: any;
  className: any;
}

export default function Avatar(props: Props) {
  const history = useHistory();
  const { user, size, className } = props;
  const noAvatar = size === 'small' ? nasmall : namedium;
  return (
    <img
      src={user.avatar ? `${HOST}/avatar/${user._id}/medium.jpg` : noAvatar}
      alt={`avatar of ${user.username}`}
      className={className}
      onClick={() => history.push(`/u/${user.username}`)}
    />
  );
}
