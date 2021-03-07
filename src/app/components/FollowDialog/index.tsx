/**
 *
 * FollowDialog
 *
 */
import React, { useRef } from 'react';
import useOutsideClick from 'utils/useOutsideClick';
import useStyles from './styles';

interface Props {
  setOpen: any;
  unfollow: any;
}

interface Props {}

export default function FollowDialog(props: Props) {
  const classes = useStyles();
  const ref = useRef(document.createElement('div'));
  useOutsideClick(ref, () => {
    props.setOpen();
  });
  return (
    <div className={classes.root}>
      <div className={classes.wrapper} ref={ref}>
        <div className={classes.item} onClick={() => props.unfollow()}>
          <p className={classes.textRed}>Bỏ theo dõi</p>
        </div>
        <div className={classes.item} onClick={() => props.setOpen()}>
          <p className={classes.text}>Hủy</p>
        </div>
      </div>
    </div>
  );
}
