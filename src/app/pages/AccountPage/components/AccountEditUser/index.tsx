/**
 *
 * AccountEditUser
 *
 */
import React, { useState } from 'react';
import Avatar from '../../../../components/Avatar';
import GenderSelectDialog from './components/GenderSelectDialog';
import ChangeAvatarDialog from './components/ChangeAvatarDialog';
import useStyles from './styles';

interface Props {
  user: any;
  original: any;
  setUser: any;
  onSubmit: any;
  onChangeAvatar: any;
  onRemoveAvatar: any;
}

export default function AccountEditUser(props: Props) {
  const { user, original, setUser, onSubmit, onChangeAvatar, onRemoveAvatar } = props;
  const [open, setOpen] = useState(false);
  const [openAvatar, setOpenAvatar] = useState(false);
  const classes = useStyles();

  function objectEquals(x, y) {
    if (x === null || x === undefined || y === null || y === undefined) {
      return x === y;
    }
    // after this just checking type of one would be enough
    if (x.constructor !== y.constructor) {
      return false;
    }
    // if they are functions, they should exactly refer to same one (because of closures)
    if (x instanceof Function) {
      return x === y;
    }
    // if they are regexps, they should exactly refer to same one (it is hard to better equality check on current ES)
    if (x instanceof RegExp) {
      return x === y;
    }
    if (x === y || x.valueOf() === y.valueOf()) {
      return true;
    }
    if (Array.isArray(x) && x.length !== y.length) {
      return false;
    }

    // if they are dates, they must had equal valueOf
    if (x instanceof Date) {
      return false;
    }

    // if they are strictly equal, they both need to be object at least
    if (!(x instanceof Object)) {
      return false;
    }
    if (!(y instanceof Object)) {
      return false;
    }

    // recursive object equality check
    var p = Object.keys(x);
    return (
      Object.keys(y).every(function (i) {
        return p.indexOf(i) !== -1;
      }) &&
      p.every(function (i) {
        return objectEquals(x[i], y[i]);
      })
    );
  }

  return (
    <>
      <div className={classes.header}>
        <div className={classes.avatarWrapper}>
          <Avatar user={user} className={classes.avatar} size="small" />
        </div>
        <div className={classes.nameWrapper}>
          <div className={classes.name}>{user.username}</div>
          <div className={classes.namedes} onClick={() => setOpenAvatar(true)}>
            Thay đổi ảnh đại diện
          </div>
        </div>
      </div>
      <form
        className={classes.form}
        onSubmit={e => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className={classes.rightIem}>
          <div className={classes.lable}>Tên</div>
          <div className={classes.inputBox}>
            <input
              className={classes.input}
              value={user.name}
              onChange={e => setUser({ ...user, ...{ name: e.target.value } })}
            />
          </div>
        </div>
        <div className={classes.rightIem}>
          <div className={classes.lable}>Tên người dùng</div>
          <div className={classes.inputBox}>
            <input
              className={classes.input}
              value={user.username}
              onChange={e => setUser({ ...user, ...{ username: e.target.value } })}
            />
          </div>
        </div>
        <div className={classes.rightIem}>
          <div className={classes.lable}>Trang web</div>
          <div className={classes.inputBox}>
            <input
              className={classes.input}
              value={user.website}
              onChange={e => setUser({ ...user, ...{ website: e.target.value } })}
            />
          </div>
        </div>
        <div className={classes.rightIem}>
          <div className={classes.lable}>Tiểu sử</div>
          <div className={classes.inputBox}>
            <textarea
              className={classes.textarea}
              value={user.bio}
              onChange={e => setUser({ ...user, ...{ bio: e.target.value } })}
            />
          </div>
        </div>
        <div className={classes.rightIem}>
          <div className={classes.lable}></div>
          <div className={classes.inputBox}>
            <div className={classes.infoDescription1}>Thông tin cá nhân</div>
            <div className={classes.infoDescription2}>
              Cung cấp thông tin cá nhân của bạn, bất kể bạn dùng tài khoản cho doanh nghiệp, thú cưng hay gì khác.
              Thông tin này sẽ không hiển thị trên trang cá nhân công khai của bạn.
            </div>
          </div>
        </div>
        <div className={classes.rightIem}>
          <div className={classes.lable}>Email</div>
          <div className={classes.inputBox}>
            <input
              className={classes.input}
              value={user.email}
              onChange={e => setUser({ ...user, ...{ email: e.target.value } })}
            />
          </div>
        </div>
        <div className={classes.rightIem}>
          <div className={classes.lable}>Số điện thoại</div>
          <div className={classes.inputBox}>
            <input
              className={classes.input}
              value={user.phone}
              onChange={e => setUser({ ...user, ...{ phone: e.target.value } })}
            />
          </div>
        </div>
        <div className={classes.rightIem}>
          <div className={classes.lable}>Giới tính</div>
          <div className={classes.inputBox}>
            <div className={classes.select} onClick={() => setOpen(true)}>
              {user.gender === 'male' ? 'Nam' : 'Nữ'}
            </div>
          </div>
        </div>
        <div className={classes.rightIem}>
          <div className={classes.lable}></div>
          <div className={classes.inputBox}>
            <button
              className={objectEquals(original, user) ? classes.buttonDisabled : classes.button}
              type="submit"
              disabled={objectEquals(original, user)}
            >
              Gửi
            </button>
          </div>
        </div>
      </form>
      {open && (
        <GenderSelectDialog
          setOpen={() => setOpen(false)}
          value={user.gender}
          onChange={value => setUser({ ...user, ...{ gender: value } })}
        />
      )}
      {openAvatar && (
        <ChangeAvatarDialog
          user={original}
          setOpen={() => setOpenAvatar(false)}
          onSubmit={file => {
            onChangeAvatar(file);
            setOpenAvatar(false);
          }}
          onRemoveAvatar={() => {
            onRemoveAvatar();
            setOpenAvatar(false);
          }}
        />
      )}
    </>
  );
}
