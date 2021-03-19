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
        <div className={classes.title}>Lượt thích</div>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Tắt
        </label>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Từ những người tôi theo dõi
        </label>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Từ mọi người
        </label>
        <div className={classes.subText}>johnappleseed đã thích ảnh của bạn</div>
      </div>
      <hr className={classes.divider} />
      <div className={classes.itemBox}>
        <div className={classes.title}>Bình luận</div>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Tắt
        </label>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Từ những người tôi theo dõi
        </label>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Từ mọi người
        </label>
        <div className={classes.subText}>johnappleseed đã bình luận: "Hình đẹp lắm!"</div>
      </div>
      <hr className={classes.divider} />
      <div className={classes.itemBox}>
        <div className={classes.title}>Lượt thích bình luận</div>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Tắt
        </label>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Từ những người tôi theo dõi
        </label>
        <div className={classes.subText}>johnappleseed đã thích bình luận của bạn: "Hình đẹp lắm!"</div>
      </div>
      <hr className={classes.divider} />
      <div className={classes.itemBox}>
        <div className={classes.title}>Lượt thích và bình luận về ảnh có mặt bạn</div>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Tắt
        </label>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Từ những người tôi theo dõi
        </label>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Từ mọi người
        </label>
        <div className={classes.subText}>johnappleseed đã bình luận về một bài viết mà bạn được gắn thẻ.</div>
      </div>
      <hr className={classes.divider} />
      <div className={classes.itemBox}>
        <div className={classes.title}>Yêu cầu theo dõi được chấp nhận</div>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Tắt
        </label>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Từ những người tôi theo dõi
        </label>
        <div className={classes.subText}>John Appleseed (@johnappleseed) đã chấp nhận yêu cầu theo dõi của bạn.</div>
      </div>
      <hr className={classes.divider} />
      <div className={classes.itemBox}>
        <div className={classes.title}>Yêu cầu từ Instagram Direct</div>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Tắt
        </label>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Từ những người tôi theo dõi
        </label>
        <div className={classes.subText}>johnappleseed muốn gửi tin nhắn cho bạn.</div>
      </div>
      <hr className={classes.divider} />
      <div className={classes.itemBox}>
        <div className={classes.title}>Instagram Direct</div>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Tắt
        </label>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Từ những người tôi theo dõi
        </label>
        <div className={classes.subText}>johnappleseed đã gửi cho bạn một tin nhắn.</div>
      </div>
      <hr className={classes.divider} />
      <div className={classes.itemBox}>
        <div className={classes.title}>Lời nhắc</div>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Tắt
        </label>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Từ những người tôi theo dõi
        </label>
        <div className={classes.subText}>Bạn có thông báo chưa xem và các thông báo tương tự khác</div>
      </div>
      <hr className={classes.divider} />
      <div className={classes.itemBox}>
        <div className={classes.title}>Bài viết và tin đầu tiên</div>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Tắt
        </label>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Từ những người tôi theo dõi
        </label>
        <div className={classes.subText}>
          Xem tin đầu tiên của johnappleseed trên Instagram và các thông báo tương tự khác.
        </div>
      </div>
      <hr className={classes.divider} />
      <div className={classes.itemBox}>
        <div className={classes.title}>Lượt xem trên IGTV</div>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Tắt
        </label>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Từ những người tôi theo dõi
        </label>
        <div className={classes.subText}>Video IGTV của bạn có trên 100K lượt xem: "Video mới của tôi này!".</div>
      </div>
      <hr className={classes.divider} />
      <div className={classes.itemBox}>
        <div className={classes.title}>Yêu cầu hỗ trợ</div>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Tắt
        </label>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Từ những người tôi theo dõi
        </label>
        <div className={classes.subText}>Yêu cầu hỗ trợ của bạn từ Tháng 7 10 vừa được cập nhật.</div>
      </div>
      <hr className={classes.divider} />
      <div className={classes.itemBox}>
        <div className={classes.title}>Video trực tiếp</div>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Tắt
        </label>
        <label className={classes.label}>
          <input type="checkbox" className={classes.checkBox} /> Từ những người tôi theo dõi
        </label>
        <div className={classes.subText}>
          johnappleseed đã bắt đầu video trực tiếp. Hãy xem trước khi video kết thúc!
        </div>
      </div>
    </div>
  );
}
