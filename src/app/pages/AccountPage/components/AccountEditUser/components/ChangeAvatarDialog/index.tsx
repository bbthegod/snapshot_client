/**
 *
 * ChangeAvatarDialog
 *
 */
import React, { useRef } from 'react';
import useOutsideClick from 'utils/useOutsideClick';
import Avatar from '../../../../../../components/Avatar';
import useStyles from './styles';

interface Props {
  user: any;
  setOpen: any;
  onSubmit: any;
  onRemoveAvatar: any;
}

export default function ChangeAvatarDialog(props: Props) {
  const classes = useStyles();
  const { user, onSubmit, setOpen, onRemoveAvatar } = props;
  const ref = useRef(document.createElement('div'));
  useOutsideClick(ref, () => {
    props.setOpen();
  });

  function upload(event) {
    onSubmit(event.target.files[0]);
  }

  return (
    <div className={classes.root}>
      <div className={classes.wrapper} ref={ref}>
        <div className={classes.header}>
          <Avatar user={user} className={classes.avatar} size="medium" />
          <p className={classes.headerText}>{user.username}</p>
        </div>
        <label className={classes.input} htmlFor="input">
          Tải ảnh lên
        </label>
        <input
          id="input"
          type="file"
          style={{ display: 'none' }}
          onChange={event => upload(event)}
          accept="image/png, image/jpeg, image/jpg"
          multiple={false}
        />
        {user.avatar && (
          <div className={classes.item} onClick={() => onRemoveAvatar()}>
            <p className={classes.textRed}>Gỡ ảnh đại diện</p>
          </div>
        )}
        <div className={classes.item} onClick={() => setOpen()}>
          <p className={classes.text}>Hủy</p>
        </div>
      </div>
    </div>
  );
}
