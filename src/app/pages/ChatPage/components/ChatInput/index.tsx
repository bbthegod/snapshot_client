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
  value: any;
  onChange: any;
  onLove: any;
  disabled?: any;
  onSubmit: any;
}

export default function ChatInput(props: Props) {
  const { value, onChange, disabled, onSubmit, onLove } = props;
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    autosize(document.querySelectorAll('textarea'));
  }, []);

  function upload(event) {
    console.log(event.target.files[0]);
  }

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
          onChange={e => onChange(e.target.value)}
          value={value}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              e.preventDefault();
              onSubmit();
            }
          }}
        />
        {!disabled && (
          <button className={classes.button} onClick={() => onSubmit()}>
            Gửi
          </button>
        )}
        {disabled && (
          <div className={classes.sendIconWrapper}>
            {/* <label htmlFor="input">
              <img src={postImage} alt="post" className={classes.icon} />
            </label> */}
            <img src={loveIcon} alt="love" className={classes.icon} onClick={() => onLove()} />
            <input
              id="input"
              type="file"
              style={{ display: 'none' }}
              onChange={event => upload(event)}
              accept="image/png, image/jpeg, image/jpg"
              multiple={false}
            />
          </div>
        )}
      </div>
    </div>
  );
}
