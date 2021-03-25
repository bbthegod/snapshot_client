/**
 *
 * AccountEmailAndSms
 *
 */
import React from 'react';
import useStyles from './styles';

export default function AccountEmailAndSms() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2 className={classes.header}>Đăng ký:</h2>
      <div className={classes.itemBox}>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Email phản hồi
        </label>
        <div className={classes.subText}>Đóng góp ý kiến về Instagram.</div>
      </div>
      <div className={classes.itemBox}>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Email lời nhắc
        </label>
        <div className={classes.subText}>Nhận thông báo mà bạn có thể đã bỏ lỡ.</div>
      </div>
      <div className={classes.itemBox}>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Email về sản phẩm
        </label>
        <div className={classes.subText}>Xem mẹo về công cụ của Instagram.</div>
      </div>
      <div className={classes.itemBox}>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Email tin tức
        </label>
        <div className={classes.subText}>Tìm hiểu về các tính năng mới của Instagram.</div>
      </div>
    </div>
  );
}
