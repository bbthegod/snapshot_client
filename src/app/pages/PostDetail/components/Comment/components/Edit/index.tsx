/**
 *
 * Edit
 *
 */ import React, { useState } from 'react';
import useStyles from './styles';
import closeIcon from '../../../../../../../images/close.svg';

interface Props {
  onClose: any;
  onSubmit: any;
  caption: any;
}

export default function Edit(props: Props) {
  const { onClose, onSubmit, caption } = props;
  const classes = useStyles();
  const [value, setValue] = useState(caption);
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.item}>
          <div className={classes.leftSideItem}>
            <img src={closeIcon} alt="close" className={classes.icon} onClick={() => onClose()} />
          </div>
          <div className={classes.centerItem}>Tin nhắn mới</div>
          <div className={classes.rightSideItem}>
            <button className={classes.button} onClick={() => onSubmit(value)}>
              Gửi
            </button>
          </div>
        </div>
        <form onSubmit={() => onSubmit(value)}>
          <div className={classes.searchWrapper}>
            <input
              type="text"
              placeholder="Tiêu đề"
              className={classes.input}
              value={value}
              onChange={e => setValue(e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
