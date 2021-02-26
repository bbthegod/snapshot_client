/**
 *
 * ProfileMoreDialog
 *
 */
import * as React from 'react';
import useStyles from './styles';

interface Props {
  setOpen: any;
  block: any;
  report: any;
}

export default function ProfileMoreDialog(props: Props) {
  const classes = useStyles();
  return (
    <div className={classes.dialog}>
      <div className={classes.dialogContent}>
        <div className={classes.dialogItemWrapper1st} onClick={() => props.block()}>
          <p className={classes.dialogItemTextRed}>Chặn người dùng này</p>
        </div>
        <div className={classes.dialogItemWrapper} onClick={() => props.report()}>
          <p className={classes.dialogItemTextRed}>Báo cáo người dùng</p>
        </div>
        <div className={classes.dialogItemWrapperLast} onClick={() => props.setOpen()}>
          <p className={classes.dialogItemText}>Hủy</p>
        </div>
      </div>
    </div>
  );
}
