/**
 *
 * ChatInput
 *
 */
import React, { useEffect, useState } from 'react';
import autosize from 'autosize';
import useStyles from './styles';
import Emoji from './components/Emoji';
import smile from '../../../../../images/smile.svg';
// import postImage from '../../../../../images/post-image.svg';
import loveIcon from '../../../../../images/unlike.svg';

interface Props {
  onSubmit: any;
}

export default function ChatInput(props: Props) {
  const { onSubmit } = props;
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const disabled = value === '';
  useEffect(() => {
    autosize(document.querySelectorAll('textarea'));
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.emojiBox}>
        {open && <Emoji onClose={() => setOpen(false)} onClick={e => setValue(value + e)} />}
      </div>
      <div className={classes.wrapper}>
        <img src={smile} alt="emoji" className={classes.emoji} onClick={() => setOpen(true)} />
        <textarea
          className={classes.area}
          placeholder="Thêm bình luận"
          onChange={e => setValue(e.target.value)}
          value={value}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              e.preventDefault();
              onSubmit(value);
              setValue('');
            }
          }}
        />
        {!disabled && (
          <button
            className={classes.button}
            onClick={() => {
              onSubmit(value);
              setValue('');
            }}
          >
            Gửi
          </button>
        )}
        {disabled && (
          <div className={classes.sendIconWrapper}>
            <img
              src={loveIcon}
              alt="love"
              className={classes.icon}
              onClick={() => {
                onSubmit('❤️');
                setValue('');
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
