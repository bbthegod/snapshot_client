/**
 *
 * PostDialog
 *
 */ import React, { useState, useRef } from 'react';
import useOutsideClick from 'utils/useOutsideClick';
import useStyles from './styles';
import ReportDialog from '../../../../../../components/ReportDialog';

interface Props {
  setOpen: any;
  report: any;
  unfollow: any;
  goTo: any;
  copy: any;
}

interface Props {}

export default function PostDialog(props: Props) {
  const classes = useStyles();
  const ref = useRef(document.createElement('div'));
  useOutsideClick(ref, () => {
    props.setOpen();
  });
  const [status, setStatus] = useState(1);
  return (
    <>
      {status === 1 && (
        <div className={classes.root}>
          <div className={classes.wrapper} ref={ref}>
            <div className={classes.item} onClick={() => setStatus(2)}>
              <p className={classes.textRed}>Báo cáo</p>
            </div>
            <div className={classes.item} onClick={() => props.unfollow()}>
              <p className={classes.textRed}>Bỏ theo dõi</p>
            </div>
            <div className={classes.item} onClick={() => props.goTo()}>
              <p className={classes.text}>Đi tới bài viết</p>
            </div>
            <div className={classes.item} onClick={() => props.copy()}>
              <p className={classes.text}>Sao chép liên kết</p>
            </div>
            <div className={classes.item} onClick={() => props.setOpen()}>
              <p className={classes.text}>Hủy</p>
            </div>
          </div>
        </div>
      )}
      {status === 2 && (
        <ReportDialog
          setOpen={() => setStatus(1)}
          report={(object, reasons) => props.report(object, reasons)}
          isUser={false}
        />
      )}
    </>
  );
}
