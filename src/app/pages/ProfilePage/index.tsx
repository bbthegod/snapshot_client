/**
 *
 * ProfilePage
 *
 */
import React, { useEffect, useState } from 'react';
import { ProfilePost } from 'app/components/ProfilePost';
import { useSelector, useDispatch } from 'react-redux';
import { HOST } from 'utils/url';
import { useProfilePageSlice } from './slice';
import { selectProfilePage } from './slice/selectors';
import useStyles from './styles';
import tagged from '../../../images/tagged.svg';
import avatar from '../../../images/avatar.jpg';
import postsIcon from '../../../images/posts.svg';
import settings from '../../../images/settings.svg';
import namedium from '../../../images/namedium.jpg';

interface Props {
  match: any;
}

export function ProfilePage(props: Props) {
  const classes = useStyles();
  const { actions } = useProfilePageSlice();
  const dispatch = useDispatch();
  const { user, posts } = useSelector(selectProfilePage);
  const [tab, setTab] = useState(1);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    dispatch(actions.get(props.match.params.username));
    dispatch(actions.getPost(props.match.params.username));
  }, [actions, dispatch, props.match.params.username]);
  return (
    <div>
      {user && (
        <div className={classes.root}>
          <div className={classes.wrapper}>
            <div className={classes.infomationWrapper}>
              <div className={classes.avatarBox}>
                <img
                  src={user.avatar || user._id ? `${HOST}/avatar/${user._id}/medium.jpg` : namedium}
                  alt="avatar"
                  className={classes.avatar}
                />
              </div>
              <div className={classes.infomationBox}>
                <div className={classes.infomationTop}>
                  <p className={classes.infomationTopName}>{user.username}</p>
                  <div className={classes.infomationTopEdit}>Chỉnh sửa trang cá nhân</div>
                  <img src={settings} alt="settings" className={classes.settings} onClick={() => setOpen(true)} />
                </div>
                <div className={classes.postDetailBox}>
                  <div className={classes.postDetail}>
                    <span className={classes.postDetailText}>{user.posts}</span>
                    &nbsp;bài viết
                  </div>
                  <div className={classes.postDetail}>
                    <span className={classes.postDetailText}>{user.followers}</span>
                    &nbsp;người theo dõi
                  </div>
                  <div className={classes.postDetail}>
                    Đang theo dõi&nbsp;
                    <span className={classes.postDetailText}>{user.following}</span>
                    &nbsp;người dùng
                  </div>
                </div>
                <div style={{ marginBottom: 20 }}>
                  <p className={classes.postUserName}>{user.name}</p>
                  <span className={classes.postBio}>{user.bio}</span>
                </div>
              </div>
            </div>
            <div className={classes.tabWrapper}>
              <div className={classes.tabBox}>
                <div
                  className={classes.tab}
                  style={{
                    borderTop: tab === 1 ? '1px solid #000000' : 'none',
                  }}
                  onClick={() => setTab(1)}
                >
                  <img src={postsIcon} alt="posts" className={classes.tabImg} />
                  <span className={classes.tabText}>BÀI VIẾT</span>
                </div>
                <div
                  className={classes.tab}
                  style={{
                    borderTop: tab === 2 ? '1px solid #000000' : 'none',
                  }}
                  onClick={() => setTab(2)}
                >
                  <img src={tagged} alt="tagged" className={classes.tabImg} />
                  <span className={classes.tabText}>ĐƯỢC GẮN THẺ</span>
                </div>
              </div>
            </div>
            <div className={classes.list}>
              {posts.length > 0 ? (
                <div>
                  {posts.map((item, index) => (
                    <ProfilePost
                      key={index}
                      style={{ marginRight: (index + 1) % 3 !== 0 ? 28 : 0 }}
                      image={`${HOST}/post/${item.author}/${item._id}/original.jpg`}
                      likes={item.likes}
                      comments={item.comments}
                    />
                  ))}
                </div>
              ) : (
                <h1>asdasdas</h1>
              )}
            </div>
          </div>
        </div>
      )}
      {open && (
        <div className={classes.dialog}>
          <div className={classes.dialogContent}>
            <div className={classes.dialogItemWrapper1st}>
              <p className={classes.dialogItemText}>Đổi mật khẩu</p>
            </div>
            <div className={classes.dialogItemWrapper}>
              <p className={classes.dialogItemText}>Bảo mật và quyền riêng tư</p>
            </div>
            <div className={classes.dialogItemWrapper}>
              <p className={classes.dialogItemText}>Báo cáo sự cố</p>
            </div>
            <div className={classes.dialogItemWrapper}>
              <p className={classes.dialogItemText}>Đăng xuất</p>
            </div>
            <div className={classes.dialogItemWrapperLast} onClick={() => setOpen(false)}>
              <p className={classes.dialogItemText}>Hủy</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
