/**
 *
 * ProfileMoreDialog
 *
 */
import React, { useState, useRef } from 'react';
import useOutsideClick from 'utils/useOutsideClick';
import useStyles from './styles';
import ReportDialog from '../ReportDialog';

interface Props {
  setOpen: any;
  block: any;
  report: any;
}

export default function ProfileMoreDialog(props: Props) {
  const classes = useStyles();
  const [status, setStatus] = useState(1);
  const ref = useRef(document.createElement('div'));
  useOutsideClick(ref, () => {
    props.setOpen();
  });
  return (
    <>
      {status === 1 && (
        <div className={classes.root}>
          <div className={classes.wrapper} ref={ref}>
            <div className={classes.item} onClick={() => props.block()}>
              <p className={classes.textRed}>Chặn người dùng này</p>
            </div>
            <div className={classes.item} onClick={() => setStatus(2)}>
              <p className={classes.textRed}>Báo cáo người dùng</p>
            </div>
            <div className={classes.item} onClick={() => props.setOpen()}>
              <p className={classes.text}>Hủy</p>
            </div>
          </div>
        </div>
      )}
      {status === 2 && (
        <ReportDialog setOpen={() => setStatus(1)} report={(object, reasons) => props.report(object, reasons)} isUser />
      )}
    </>
  );
}
