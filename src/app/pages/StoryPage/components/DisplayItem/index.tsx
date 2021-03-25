/**
 *
 * DisplayItem
 *
 */
import React, { useState } from 'react';
import useStyles from './styles';
import Avatar from '../../../../components/Avatar';
import pauseIcon from '../../../../../images/pause.svg';
import muteIcon from '../../../../../images/mute.svg';
import moreIcon from '../../../../../images/more.svg';
import StoryInput from '../StoryInput';
import timeSince from '../../../../../utils/timesince';

interface Props {
  onMouseEnter: any;
  onMouseLeave: any;
  user: any;
  image: any;
  time: any;
}

export default function DisplayItem(props: Props) {
  const { onMouseEnter, onMouseLeave, user, time, image } = props;
  const classes = useStyles();
  const [value, setValue] = useState('');
  return (
    <div className={classes.root} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className={classes.header}>
        <div className={classes.headerBottomWrapper}>
          <div className={classes.headerBottomLeft}>
            <Avatar user={user} className={classes.avatar} size="small" />
            <div className={classes.name}>{user.username}</div>
            <div className={classes.time}>{timeSince(time)}</div>
          </div>
          <div className={classes.headerBottomRight}>
            <svg aria-label="Phát" className={classes.icon16} fill="#ffffff" height="16" viewBox="0 0 48 48" width="16">
              <path d="M9.6 46.5c-1 0-2-.3-2.9-.8-1.8-1.1-2.9-2.9-2.9-5.1V7.3c0-2.1 1.1-4 2.9-5.1 1.9-1.1 4.1-1.1 5.9 0l30.1 17.6c1.5.9 2.3 2.4 2.3 4.1 0 1.7-.9 3.2-2.3 4.1L12.6 45.7c-.9.5-2 .8-3 .8z"></path>
            </svg>
            <svg
              aria-label="Video không có âm thanh."
              className={classes.icon16}
              fill="#ffffff"
              height="16"
              viewBox="0 0 48 48"
              width="16"
            >
              <path
                clip-rule="evenodd"
                d="M42.9 24l4.6 4.6c.6.6.6 1.6 0 2.2l-1.4 1.4c-.6.6-1.6.6-2.2 0l-4.6-4.6-4.6 4.6c-.6.6-1.6.6-2.2 0l-1.4-1.4c-.6-.6-.6-1.6 0-2.2l4.6-4.6-4.6-4.6c-.6-.6-.6-1.6 0-2.2l1.4-1.4c.6-.6 1.6-.6 2.2 0l4.6 4.6 4.6-4.6c.6-.6 1.6-.6 2.2 0l1.4 1.4c.6.6.6 1.6 0 2.2L42.9 24zM24.1 47.6L11.3 34.7H1.6C.7 34.7 0 34 0 33.2V14.8c0-.8.7-1.5 1.5-1.5h9.7L24.1.4c.9-.9 2.5-.3 2.5 1v45.1c0 1.3-1.6 2-2.5 1.1z"
                fill-rule="evenodd"
              ></path>
            </svg>
            <svg x="0px" y="0px" viewBox="0 0 426.667 426.667" fill="#ffffff" className={classes.icon24}>
              <circle cx="42.667" cy="213.333" r="42.667" />
              <circle cx="213.333" cy="213.333" r="42.667" />
              <circle cx="384" cy="213.333" r="42.667" />
            </svg>
          </div>
        </div>
      </div>
      <img className={classes.image} src={image} alt="post" />
      <div className={classes.bottom}>
        <StoryInput value={value} onChange={e => setValue(e)} onSubmit={() => {}} />
      </div>
    </div>
  );
}
