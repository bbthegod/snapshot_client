/**
 *
 * ReportDialog
 *
 */
import React, { useRef } from 'react';
import useOutsideClick from 'utils/useOutsideClick';
import useStyles from './styles';

interface Props {
  setOpen: any;
  report: any;
}

interface Props {}

export default function ReportDialog(props: Props) {
  const classes = useStyles();
  const ref = useRef(document.createElement('div'));
  useOutsideClick(ref, () => {
    props.setOpen();
  });
  return (
    <div className={classes.root}>
      <div className={classes.wrapper} ref={ref}>
        <div className={classes.item} onClick={() => props.report(0, 0)}>
          <p className={classes.textRed}>Đây là spam</p>
        </div>
        <div className={classes.item} onClick={() => props.report(0, 1)}>
          <p className={classes.textRed}>Nội dung không phù hợp</p>
        </div>
        <div className={classes.item} onClick={() => props.setOpen()}>
          <p className={classes.text}>Hủy</p>
        </div>
      </div>
    </div>
  );
}
