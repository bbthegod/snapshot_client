/**
 *
 * AccountNotificationPush
 *
 */
import React from 'react';
import useStyles from './styles';

export default function AccountNotificationPush() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.itemBox}>
        <div className={classes.title}>Quyền riêng tư của tài khoản</div>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Tài khoản riêng tư
        </label>
        <div className={classes.subText}>
          Khi tài khoản của bạn ở chế độ riêng tư, chỉ những người mà bạn phê duyệt mới được xem ảnh và video của bạn
          trên Instagram. Những người đang theo dõi bạn sẽ không bị ảnh hưởng
        </div>
      </div>
      <hr className={classes.divider} />
      <div className={classes.itemBox}>
        <div className={classes.title}>Trạng thái hoạt động</div>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Hiển thị trạng thái hoạt động
        </label>
        <div className={classes.subText}>
          Cho phép tài khoản bạn theo dõi và bất kỳ ai bạn đã nhắn tin được xem thời điểm bạn hoạt động lần cuối trên
          ứng dụng Instagram. Khi tắt cài đặt này, bạn không thể nhìn thấy trạng thái hoạt động của các tài khoản khác.
        </div>
      </div>
      <hr className={classes.divider} />
      <div className={classes.itemBox}>
        <div className={classes.title}>Chia sẻ tin</div>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Cho phép chia sẻ
        </label>
        <div className={classes.subText}>Cho phép mọi người chia sẻ tin của bạn dưới dạng tin nhắn</div>
      </div>
      <hr className={classes.divider} />
      <div className={classes.itemBox}>
        <div className={classes.title}>Bình luận</div>
        <div className={classes.link}>Chỉnh sửa cài đặt bình luận</div>
      </div>
      <hr className={classes.divider} />
      <div className={classes.itemBox}>
        <div className={classes.title}>Ảnh có mặt bạn</div>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Tự động thêm
        </label>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Thêm thủ công
        </label>
        <div className={classes.subText}>
          Chọn cách bạn muốn thêm ảnh có mặt mình vào trang cá nhân.&nbsp;
          <div className={classes.link}>Tìm hiểu thêm</div>
          &nbsp;về ảnh có mặt bạn
        </div>
      </div>
      <hr className={classes.divider} />
      <div className={classes.itemBox}>
        <div className={classes.title}>Dữ liệu tài khoản</div>
        <div className={classes.link}>Xem dữ liệu tài khoản</div>
      </div>
      <hr className={classes.divider} />
      <div className={classes.itemBox}>
        <div className={classes.title}>Xác thực 2 yếu tố</div>
        <div className={classes.link}>Chỉnh sửa cài đặt xác thực 2 yếu tố</div>
      </div>
      <hr className={classes.divider} />
      <div className={classes.itemBox}>
        <div className={classes.title}>Tải dữ liệu xuống</div>
        <div className={classes.link}>Yêu cầu tải xuống</div>
      </div>
      <hr className={classes.divider} />
      <div className={classes.itemBox}>
        <div className={classes.title}>Trợ giúp về bảo mật và quyền riêng tư</div>
        <div className={classes.link}>Hỗ trợ</div>
      </div>
    </div>
  );
}
