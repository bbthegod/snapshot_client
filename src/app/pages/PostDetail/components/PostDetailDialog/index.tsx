/**
 *
 * PostDetailDialog
 *
 */ import React, { useState, useRef } from 'react';
import useOutsideClick from 'utils/useOutsideClick';
import useStyles from './styles';
import ReportDialog from '../../../../components/ReportDialog';
import Edit from '../Edit';

interface Props {
  isAuthor: any;
  setOpen: any;
  report: any;
  unfollow: any;
  copy: any;
  caption: any;
  edit: any;
}

interface Props {}

export default function PostDetailDialog(props: Props) {
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
            {!props.isAuthor && (
              <>
                <div className={classes.item} onClick={() => setStatus(2)}>
                  <p className={classes.textRed}>Báo cáo</p>
                </div>
                <div className={classes.item} onClick={() => props.unfollow()}>
                  <p className={classes.textRed}>Bỏ theo dõi</p>
                </div>
              </>
            )}
            <div className={classes.item} onClick={() => props.copy()}>
              <p className={classes.text}>Sao chép liên kết</p>
            </div>
            <div className={classes.item} onClick={() => setStatus(3)}>
              <p className={classes.text}>Chỉnh sửa</p>
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
      {status === 3 && (
        <Edit onClose={() => setStatus(1)} onSubmit={value => props.edit(value)} caption={props.caption} />
      )}
    </>
  );
}
