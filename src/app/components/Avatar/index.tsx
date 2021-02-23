/**
 *
 * Avatar
 *
 */
import * as React from 'react';
import { HOST } from 'utils/url';
import nasmall from '../../../images/nasmall.jpg';

interface Props {
  id: any;
  alt: string;
  className: string;
}

export default function Avatar(props: Props) {
  return (
    <img
      src={props.id ? `${HOST}/avatar/${props.id}/medium.jpg` : nasmall}
      alt={props.alt}
      className={props.className}
    />
  );
}
