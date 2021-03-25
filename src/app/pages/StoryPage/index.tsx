/**
 *
 * ChatPage
 *
 */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';
import closeIcon from '../../../images/close-white.svg';
import nextIcon from '../../../images/next.svg';
import nextActiveIcon from '../../../images/next-active.svg';
import previousIcon from '../../../images/previous.svg';
import previousActiveIcon from '../../../images/previous-active.svg';
import DisplayItem from './components/DisplayItem';
import SideItem from './components/SideItem';

interface Props {}
const list = [
  {
    image:
      'https://instagram.fhan2-4.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/163383592_1371598516553778_1966229611991490479_n.jpg?tp=1&_nc_ht=instagram.fhan2-4.fna.fbcdn.net&_nc_cat=1&_nc_ohc=d-50SUr6wSIAX_FdQE1&ccb=7-4&oh=74bc615b6eb80f71343efa9b91e7acfd&oe=6086AFFC&_nc_sid=83d603',
    user: { id: '21', username: '1', avatar: undefined },
    time: new Date(),
  },
  {
    image:
      'https://instagram.fhan2-4.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/163383592_1371598516553778_1966229611991490479_n.jpg?tp=1&_nc_ht=instagram.fhan2-4.fna.fbcdn.net&_nc_cat=1&_nc_ohc=d-50SUr6wSIAX_FdQE1&ccb=7-4&oh=74bc615b6eb80f71343efa9b91e7acfd&oe=6086AFFC&_nc_sid=83d603',
    user: { id: '21', username: '2', avatar: undefined },
    time: new Date(),
  },
  {
    image:
      'https://instagram.fhan2-4.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/163383592_1371598516553778_1966229611991490479_n.jpg?tp=1&_nc_ht=instagram.fhan2-4.fna.fbcdn.net&_nc_cat=1&_nc_ohc=d-50SUr6wSIAX_FdQE1&ccb=7-4&oh=74bc615b6eb80f71343efa9b91e7acfd&oe=6086AFFC&_nc_sid=83d603',
    user: { id: '21', username: '3', avatar: undefined },
    time: new Date(),
  },
  {
    image:
      'https://instagram.fhan2-4.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/163383592_1371598516553778_1966229611991490479_n.jpg?tp=1&_nc_ht=instagram.fhan2-4.fna.fbcdn.net&_nc_cat=1&_nc_ohc=d-50SUr6wSIAX_FdQE1&ccb=7-4&oh=74bc615b6eb80f71343efa9b91e7acfd&oe=6086AFFC&_nc_sid=83d603',
    user: { id: '21', username: '4', avatar: undefined },
    time: new Date(),
  },
  {
    image:
      'https://instagram.fhan2-4.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/163383592_1371598516553778_1966229611991490479_n.jpg?tp=1&_nc_ht=instagram.fhan2-4.fna.fbcdn.net&_nc_cat=1&_nc_ohc=d-50SUr6wSIAX_FdQE1&ccb=7-4&oh=74bc615b6eb80f71343efa9b91e7acfd&oe=6086AFFC&_nc_sid=83d603',
    user: { id: '21', username: '5', avatar: undefined },
    time: new Date(),
  },
  {
    image:
      'https://instagram.fhan2-4.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/163383592_1371598516553778_1966229611991490479_n.jpg?tp=1&_nc_ht=instagram.fhan2-4.fna.fbcdn.net&_nc_cat=1&_nc_ohc=d-50SUr6wSIAX_FdQE1&ccb=7-4&oh=74bc615b6eb80f71343efa9b91e7acfd&oe=6086AFFC&_nc_sid=83d603',
    user: { id: '21', username: '6', avatar: undefined },
    time: new Date(),
  },
  {
    image:
      'https://instagram.fhan2-4.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/163383592_1371598516553778_1966229611991490479_n.jpg?tp=1&_nc_ht=instagram.fhan2-4.fna.fbcdn.net&_nc_cat=1&_nc_ohc=d-50SUr6wSIAX_FdQE1&ccb=7-4&oh=74bc615b6eb80f71343efa9b91e7acfd&oe=6086AFFC&_nc_sid=83d603',
    user: { id: '21', username: '7', avatar: undefined },
    time: new Date(),
  },
  {
    image:
      'https://instagram.fhan2-4.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/163383592_1371598516553778_1966229611991490479_n.jpg?tp=1&_nc_ht=instagram.fhan2-4.fna.fbcdn.net&_nc_cat=1&_nc_ohc=d-50SUr6wSIAX_FdQE1&ccb=7-4&oh=74bc615b6eb80f71343efa9b91e7acfd&oe=6086AFFC&_nc_sid=83d603',
    user: { id: '21', username: '8', avatar: undefined },
    time: new Date(),
  },
  {
    image:
      'https://instagram.fhan2-4.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/163383592_1371598516553778_1966229611991490479_n.jpg?tp=1&_nc_ht=instagram.fhan2-4.fna.fbcdn.net&_nc_cat=1&_nc_ohc=d-50SUr6wSIAX_FdQE1&ccb=7-4&oh=74bc615b6eb80f71343efa9b91e7acfd&oe=6086AFFC&_nc_sid=83d603',
    user: { id: '21', username: '9', avatar: undefined },
    time: new Date(),
  },
  {
    image:
      'https://instagram.fhan2-4.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/163383592_1371598516553778_1966229611991490479_n.jpg?tp=1&_nc_ht=instagram.fhan2-4.fna.fbcdn.net&_nc_cat=1&_nc_ohc=d-50SUr6wSIAX_FdQE1&ccb=7-4&oh=74bc615b6eb80f71343efa9b91e7acfd&oe=6086AFFC&_nc_sid=83d603',
    user: { id: '21', username: '10', avatar: undefined },
    time: new Date(),
  },
];
export default function ChatPage(props: Props) {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = useState('');
  const [active, setActive] = useState(false);
  const [choose, setChoose] = useState(4);
  return (
    <div className={classes.root}>
      <div className={classes.logo} onClick={() => history.push('/')}>
        SnapShot
      </div>
      <img src={closeIcon} alt="close" className={classes.close} />
      <div className={classes.wrapper}>
        {choose - 2 >= 0 && (
          <>
            <SideItem
              image={list[choose - 2].image}
              time={list[choose - 2].time}
              user={list[choose - 2].user}
              onClick={() => setChoose(choose - 2)}
            />
            <div className={classes.space} />
          </>
        )}
        {choose - 1 >= 0 && (
          <>
            <SideItem
              image={list[choose - 1].image}
              time={list[choose - 1].time}
              user={list[choose - 1].user}
              onClick={() => setChoose(choose - 1)}
            />
            <div className={classes.space}>
              <img src={active ? previousActiveIcon : previousIcon} className={classes.icon} alt="next" />
            </div>
          </>
        )}
        <DisplayItem
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          image={list[choose].image}
          time={list[choose].time}
          user={list[choose].user}
        />
        {choose + 1 <= list.length - 1 && (
          <>
            <div className={classes.space}>
              <img src={active ? nextActiveIcon : nextIcon} className={classes.icon} alt="next" />
            </div>
            <SideItem
              image={list[choose + 1].image}
              time={list[choose + 1].time}
              user={list[choose + 1].user}
              onClick={() => setChoose(choose + 1)}
            />
          </>
        )}
        {choose + 2 <= list.length - 1 && (
          <>
            <div className={classes.space} />
            <SideItem
              image={list[choose + 2].image}
              time={list[choose + 2].time}
              user={list[choose + 2].user}
              onClick={() => setChoose(choose + 2)}
            />
          </>
        )}
      </div>
    </div>
  );
}
