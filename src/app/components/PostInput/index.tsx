/**
 *
 * PostInput
 *
 */
import React, { useEffect, useState } from 'react';
import autosize from 'autosize';
import useStyles from './styles';
import Emoji from './components/Emoji';
import smile from '../../../images/smile.svg';

interface Props {
  inputRef: any;
  value: any;
  onChange: any;
  disabled?: any;
  onSubmit: any;
}

export default function PostInput(props: Props) {
  const { value, onChange, inputRef, disabled, onSubmit } = props;
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    autosize(document.querySelectorAll('textarea'));
  }, []);
  return (
    <div className={classes.root}>
      <div className={classes.emojiBox}>
        {open && <Emoji onClose={() => setOpen(false)} onClick={e => onChange(value + e)} />}
      </div>
      <div className={classes.wrapper}>
        <img src={smile} alt="emoji" className={classes.emoji} onClick={() => setOpen(true)} />
        <textarea
          className={classes.area}
          placeholder="Thêm bình luận"
          ref={inputRef}
          onChange={e => onChange(e.target.value)}
          value={value}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              e.preventDefault();
              onSubmit();
            }
          }}
        />
        <button className={disabled ? classes.buttonDisabled : classes.button}>Đăng</button>
      </div>
    </div>
  );
}
