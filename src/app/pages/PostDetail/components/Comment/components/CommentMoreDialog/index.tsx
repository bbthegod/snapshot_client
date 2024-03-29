/**
 *
 * CommentMoreDialog
 *
 */
import React, { useRef } from 'react';
import useOutsideClick from 'utils/useOutsideClick';
import useStyles from './styles';

interface Props {
  onClose: any;
  remove: any;
  edit: any;
}

interface Props {}

export default function CommentMoreDialog(props: Props) {
  const classes = useStyles();
  const ref = useRef(document.createElement('div'));
  useOutsideClick(ref, () => {
    props.onClose();
  });
  return (
    <div className={classes.root}>
      <div className={classes.wrapper} ref={ref}>
        <div className={classes.item} onClick={() => props.remove()}>
          <p className={classes.textRed}>Xoá</p>
        </div>
        <div className={classes.item} onClick={() => props.edit()}>
          <p className={classes.text}>Chỉnh sửa</p>
        </div>
        <div className={classes.item} onClick={() => props.onClose()}>
          <p className={classes.text}>Hủy</p>
        </div>
      </div>
    </div>
  );
}
