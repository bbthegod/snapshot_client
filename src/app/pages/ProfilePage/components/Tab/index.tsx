/**
 *
 * Tab
 *
 */
import * as React from 'react';
import useStyles from './styles';
import save from '../../../../../images/save.svg';
import postsIcon from '../../../../../images/posts.svg';

interface Props {
  tab: any;
  setTab: any;
  children: any;
}

export default function Tab(props: Props) {
  const { tab, setTab, children } = props;
  const classes = useStyles();
  return (
    <>
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
            <img src={save} alt="saved" className={classes.tabImg} />
            <span className={classes.tabText}>ĐÃ LƯU</span>
          </div>
        </div>
      </div>
      <div className={classes.list}>{children}</div>
    </>
  );
}
