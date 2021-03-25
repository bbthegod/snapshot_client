/**
 *
 * Emoji
 *
 */ import React, { useRef } from 'react';
import useOutsideClick from 'utils/useOutsideClick';
import icons from '../../../../../constant/icons';
import useStyles from './styles';

interface Props {
  onClose: any;
  onClick: any;
}

export default function Emoji(props: Props) {
  const { onClose, onClick } = props;
  const classes = useStyles();
  const ref = useRef(document.createElement('div'));
  useOutsideClick(ref, () => onClose());
  return (
    <div ref={ref} className={classes.root}>
      {icons.map(item => (
        <div className={classes.wrapper}>
          <span className={classes.text}>{item.title}</span>
          <div className={classes.iconWrapper}>
            {item.item.map(icon => (
              <div className={classes.icon} onClick={() => onClick(icon)}>
                {icon}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
