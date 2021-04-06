/**
 *
 * ReportDialog
 *
 */
import React, { useRef } from 'react';
import useOutsideClick from 'utils/useOutsideClick';
import useStyles from './styles';
import close from '../../../images/close.svg';

interface Props {
  setOpen: any;
  report: any;
  isUser: any;
}

interface Props {}

export default function ReportDialog(props: Props) {
  const classes = useStyles();
  const ref = useRef(document.createElement('div'));
  const posts = [
    { text: 'Đây là spam', index: 1 },
    { text: 'Ảnh khỏa thân hoặc hoạt động tình dục', index: 2 },
    { text: 'Phân biệt chủng tộc hoặc màu da', index: 3 },
    { text: 'Bạo lực hoặc tổ chức nguy hiểm', index: 4 },
    { text: 'Bán hàng hóa phi pháp hoặc bị kiểm soát', index: 5 },
    { text: 'Vi phạm quyền sở hữu trí tuệ', index: 6 },
    { text: 'Lừa đào hoặc gian lận', index: 7 },
    { text: 'Thông tin sai sự thật', index: 8 },
  ];
  const users = [
    { text: 'Đăng tải nội dung không phù hợp', index: 1 },
    { text: 'Tài khoản giả mạo', index: 2 },
  ];
  const items = props.isUser ? users : posts;
  useOutsideClick(ref, () => {
    props.setOpen();
  });
  return (
    <div className={classes.root}>
      <div className={classes.wrapper} ref={ref}>
        <div className={classes.header}>
          Báo cáo
          <div className={classes.iconWrapper} onClick={() => props.setOpen()}>
            <img src={close} alt="close" className={classes.icon} />
          </div>
        </div>
        {items.map(item => (
          <div className={classes.item} onClick={() => props.report(props.isUser ? 1 : 0, item.index)}>
            <p className={classes.text}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
