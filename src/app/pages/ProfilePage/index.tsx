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
import FollowDialog from '../../components/FollowDialog';
import Tab from '../../components/Tab';
import settings from '../../../images/settings.svg';
import more from '../../../images/more.svg';
import userIcon from '../../../images/user.svg';

interface Props {
  match: any;
}

export function ProfilePage(props: Props) {
  const userId = localStorage.getItem('id');
  const classes = useStyles();
  const { actions } = useProfilePageSlice();
  const dispatch = useDispatch();
  const { user, failures, posts, saved, following } = useSelector(selectProfilePage);
  const [tab, setTab] = useState(1);
  const [openSetting, setOpenSetting] = useState(false);
  const [openMore, setOpenMore] = useState(false);
  const [openFollow, setOpenFollow] = useState(false);
  useEffect(() => {
    dispatch(actions.getPost(props.match.params.username));
    dispatch(actions.getSaved(props.match.params.username));
  }, [actions, dispatch, props.match.params.username]);
  useEffect(() => {
    dispatch(actions.get(props.match.params.username));
  }, [actions, dispatch, props.match.params.username, following]);
  return (
    <div>
      {user && !failures ? (
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
                      {following ? (
                        <div className={classes.infomationTopEdit} onClick={() => setOpenFollow(true)}>
                          <img src={userIcon} alt="user" className={classes.userIcon} />
                        </div>
                      ) : (
                        <div
                          className={classes.infomationTopEditBlue}
                          onClick={() => dispatch(actions.follow(user._id))}
                        >
                          Theo dõi
                        </div>
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
            <Tab tab={tab} setTab={setTab}>
              {tab === 1 &&
                posts &&
                posts.map((item, index) => (
                  <ProfilePost
                    key={index}
                    style={{ marginRight: (index + 1) % 3 !== 0 ? 28 : 0 }}
                    image={`${HOST}/post/${item.author}/${item._id}/original.jpg`}
                    data={item}
                  />
                ))}
              {tab === 2 &&
                saved &&
                saved.map((item, index) => (
                  <ProfilePost
                    key={index}
                    style={{ marginRight: (index + 1) % 3 !== 0 ? 28 : 0 }}
                    image={`${HOST}/post/${item.author}/${item._id}/original.jpg`}
                    data={item}
                  />
                ))}
            </Tab>
          </div>
        </div>
      ) : (
        <div className={classes.notFoundWrapper}>
          <h2 className={classes.notFound1}>Rất tiếc, trang này hiện không khả dụng.</h2>
          <h2 className={classes.notFound2}>Liên kết bạn theo dõi có thể bị hỏng hoặc trang này có thể đã bị gỡ.</h2>
        </div>
      )}
      {openSetting && (
        <ProfileSettingDialog
          setOpen={() => setOpenSetting(false)}
          changePassword={() => {}}
          report={() => {}}
          logout={() => {
            console.log('adasdas');
          }}
        />
      )}
      {openMore && <ProfileMoreDialog block={() => {}} report={() => {}} setOpen={() => setOpenMore(false)} />}
      {openFollow && (
        <FollowDialog
          unfollow={() => {
            dispatch(actions.follow(user._id));
            setOpenFollow(false);
          }}
          setOpen={() => setOpenFollow(false)}
        />
      )}
    </div>
  );
}
