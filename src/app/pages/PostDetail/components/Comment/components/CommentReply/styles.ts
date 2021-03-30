import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: '100%',
    paddingTop: 12,
    marginBottom: 10,
  },
  left: {
    width: 'calc(100% - 12px)',
    display: 'flex',
  },
  contentWrapper: {
    display: 'inline-block',
    maxWidth: 170,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: '50%',
    marginRight: 18,
  },
  more: {
    marginTop: 9,
    marginRight: 9,
    width: 12,
    height: 12,
    cursor: 'pointer',
    marginLeft: 'auto',
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
  },
  commentWrapper: {
    width: '100%',
    marginTop: 2,
    marginBottom: 4,
    fontSize: 12,
    display: 'flex',
  },
  like: {
    marginTop: 9,
    width: 12,
    height: 12,
    cursor: 'pointer',
  },
  mention: {
    color: '#00376b',
    cursor: 'pointer',
    display: 'inline-block',
    marginRight: 5,
  },
});
export default useStyles;
