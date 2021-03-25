/**
 *
 * StoryInput
 *
 */
import React, { useEffect, useState } from 'react';
import autosize from 'autosize';
import useStyles from './styles';
import Emoji from './components/Emoji';

interface Props {
  value: any;
  onChange: any;
  onSubmit: any;
}

export default function StoryInput(props: Props) {
  const { value, onChange, onSubmit } = props;
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    autosize(document.querySelectorAll('textarea'));
  }, []);
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.emojiBox}>
          {open && <Emoji onClose={() => setOpen(false)} onClick={e => onChange(value + e)} />}
        </div>
        <textarea
          className={classes.area}
          onClick={() => {
            if (value === '') {
              setOpen(true);
            }
          }}
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
      </div>
    </div>
  );
}
