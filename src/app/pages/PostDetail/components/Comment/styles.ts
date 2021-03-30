import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: '12px 16px 0px',
    marginBottom: 10,
  },
  top: {
    width: '100%',
    display: 'flex',
  },
  left: {
    width: 'calc(100% - 12px)',
    display: 'flex',
  },
  contentWrapper: {
    display: 'inline-block',
    maxWidth: 211,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: '50%',
    marginRight: 18,
  },
  name: {
    fontSize: 14,
    fontWeight: 600,
    display: 'inline-block',
    marginRight: 4,
    cursor: 'pointer',
  },
  reaction: {
    width: '100%',
    marginTop: 16,
    marginBottom: 4,
    fontSize: 12,
    display: 'flex',
  },
  time: {
    color: '#8E8E8E',
    marginRight: 16,
    display: 'flex',
    justifyContent: 'center',
  },
  likeCount: {
    color: '#8E8E8E',
    fontWeight: 600,
    marginRight: 16,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
  },
  like: {
    marginTop: 9,
    width: 12,
    height: 12,
    cursor: 'pointer',
  },
  more: {
    marginTop: 9,
    marginRight: 9,
    width: 12,
    height: 12,
    cursor: 'pointer',
    marginLeft: 'auto',
  },
  commentReplyWrapper: {
    width: '100%',
    display: 'inline-block',
    padding: '16px 0px 0px 54px',
  },
  hideWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    cursor: 'pointer',
  },
  hideDivider: { borderBottom: '1px solid #8e8e8e', width: 24, marginRight: 16 },
  hide: {
    display: 'inline-block',
    color: '#8e8e8e',
    fontSize: 12,
    fontWeight: 600,
  },
});
export default useStyles;
