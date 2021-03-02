/**
 *
 * FollowDialog
 *
 */
import * as React from 'react';
import useStyles from './styles';

interface Props {
  setOpen: any;
  unfollow: any;
}

interface Props {}

export default function FollowDialog(props: Props) {
  const classes = useStyles();
  return (
    <div className={classes.dialog}>
      <div className={classes.dialogContent}>
        <div className={classes.dialogItemWrapper1st} onClick={() => props.unfollow()}>
          <p className={classes.dialogItemTextRed}>Bỏ theo dõi</p>
        </div>
        <div className={classes.dialogItemWrapperLast} onClick={() => props.setOpen()}>
          <p className={classes.dialogItemText}>Hủy</p>
        </div>
      </div>
    </div>
  );
}
