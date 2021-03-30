/**
 *
 * GenderSelectDialog
 *
 */
import React, { useRef, useState } from 'react';
import useOutsideClick from 'utils/useOutsideClick';
import useStyles from './styles';

interface Props {
  setOpen: any;
  value: any;
  onChange: any;
}

interface Props {}

export default function GenderSelectDialog(props: Props) {
  const classes = useStyles();
  const { value, onChange, setOpen } = props;
  const [val, setVal] = useState(value);
  const ref = useRef(document.createElement('div'));
  useOutsideClick(ref, () => {
    props.setOpen();
  });
  function done() {
    onChange(val);
    setOpen();
  }
  return (
    <div className={classes.root}>
      <div className={classes.wrapper} ref={ref}>
        <div className={classes.header}>
          <p className={classes.headerText}>Giới tính</p>
        </div>
        <div className={classes.body}>
          <div
            className={classes.inputBox}
            onClick={() => {
              setVal('male');
            }}
          >
            <input type="radio" className={classes.input} checked={val === 'male'} />
            <div className={classes.label}>Nam</div>
          </div>
          <div
            className={classes.inputBox}
            onClick={() => {
              setVal('female');
            }}
          >
            <input type="radio" className={classes.input} checked={val === 'female'} />
            <div className={classes.label}>Nữ</div>
          </div>
        </div>
        <div className={classes.footer}>
          <button className={classes.button} onClick={() => done()}>
            Xong
          </button>
        </div>
      </div>
    </div>
  );
}
