/**
 *
 * Avatar
 *
 */
import * as React from 'react';
import { HOST } from 'utils/url';
import nasmall from '../../../images/nasmall.jpg';
import namedium from '../../../images/namedium.jpg';

interface Props {
  id: any;
  alt: string;
  size: any;
  className: any;
}

export default function Avatar(props: Props) {
  return (
    <img
      src={props.id ? `${HOST}/avatar/${props.id}/medium.jpg` : props.size === 'small' ? nasmall : namedium}
      alt={props.alt}
      className={props.className}
    />
  );
}
