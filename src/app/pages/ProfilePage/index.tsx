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
import Avatar from '../../components/Avatar';
import ProfileMoreDialog from '../../components/ProfileMoreDialog';
import ProfileSettingDialog from '../../components/ProfileSettingDialog';
import tagged from '../../../images/tagged.svg';
import postsIcon from '../../../images/posts.svg';
import settings from '../../../images/settings.svg';
import more from '../../../images/more.svg';

interface Props {
  match: any;
}

export function ProfilePage(props: Props) {
  const userId = localStorage.getItem('id');
  const classes = useStyles();
  const { actions } = useProfilePageSlice();
  const dispatch = useDispatch();
  const { user, posts } = useSelector(selectProfilePage);
  const [tab, setTab] = useState(1);
  const [openSetting, setOpenSetting] = useState(false);
  const [openMore, setOpenMore] = useState(false);
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
                <Avatar id={user.avatar ? user._id : null} alt="avatar" className={classes.avatar} size="medium" />
              </div>
              <div className={classes.infomationBox}>
                <div className={classes.infomationTop}>
                  <p className={classes.infomationTopName}>{user.username}</p>
                  {userId === user._id ? (
                    <>
                      <div className={classes.infomationTopEdit}>Chỉnh sửa trang cá nhân</div>
                      <img
                        src={settings}
                        alt="settings"
                        className={classes.settings}
                        onClick={() => setOpenSetting(true)}
                      />
                    </>
                  ) : (
                    <>
                      {user.isUserFollowing ? (
                        <div className={classes.infomationTopEdit}>aaaa</div>
                      ) : (
                        <div className={classes.infomationTopEditBlue}>Theo dõi</div>
                      )}
                      <img src={more} alt="more" className={classes.settings} onClick={() => setOpenMore(true)} />
                    </>
                  )}
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
              {posts.length > 0 &&
                posts.map((item, index) => (
                  <ProfilePost
                    key={index}
                    style={{ marginRight: (index + 1) % 3 !== 0 ? 28 : 0 }}
                    image={`${HOST}/post/${item.author}/${item._id}/original.jpg`}
                    likes={item.likes}
                    comments={item.comments}
                  />
                ))}
            </div>
          </div>
        </div>
      )}
      {openSetting && (
        <ProfileSettingDialog
          setOpen={setOpenMore(false)}
          changePassword={() => {}}
          report={() => {}}
          logout={() => {}}
        />
      )}
      {openMore && <ProfileMoreDialog block={() => {}} report={() => {}} setOpen={() => setOpenMore(false)} />}
    </div>
  );
}
