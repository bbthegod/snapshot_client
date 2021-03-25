/**
 *
 * Emoji
 *
 */ import React, { useRef } from 'react';
import useOutsideClick from 'utils/useOutsideClick';
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
      <div className={classes.text}>Gửi cảm xúc nhanh</div>
      <div className={classes.wrapper}>
        <div className={classes.icon} onClick={() => onClick('😂')}>
          😂
        </div>
        <div className={classes.icon} onClick={() => onClick('😮')}>
          😮
        </div>
        <div className={classes.icon} onClick={() => onClick('😍')}>
          😍
        </div>
        <div className={classes.icon} onClick={() => onClick('😢')}>
          😢
        </div>
      </div>
      <div className={classes.wrapper}>
        <div className={classes.icon} onClick={() => onClick('👏')}>
          👏
        </div>
        <div className={classes.icon} onClick={() => onClick('🔥')}>
          🔥
        </div>
        <div className={classes.icon} onClick={() => onClick('🎉')}>
          🎉
        </div>
        <div className={classes.icon} onClick={() => onClick('💯')}>
          💯
        </div>
      </div>
    </div>
  );
}
