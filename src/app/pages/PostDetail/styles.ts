import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  paper: {
    width: 935,
    height: 600,
    background: '#FFFFFF',
    border: '1px solid #dbdbdb',
    margin: 50,
    display: 'flex',
  },
  image: {
    width: 598,
  },
  side: {
    width: 335,
    height: 600,
    // background: '#FFaFFF',
  },
  header: {
    width: '100%',
    height: 60,
    padding: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid #dbdbdb',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: '50%',
  },
  nameWrapper: {
    width: 256,
    marginLeft: 14,
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontWeight: 600,
    fontSize: 14,
    width: 240,
    display: 'flex',
  },
  dot: {
    margin: '0px 4px',
  },
  more: {
    width: 16,
    height: 16,
  },
  commentWrapper: {
    height: 372,
    width: '100%',
    borderBottom: '1px solid #dbdbdb',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  commentHeader: {
    width: '100%',
    height: 200,
    background: '#FF2F2F',
    padding: '12px 16px 12px',
    display: 'flex',
  },
  captionWrapper: {
    width: '100%',
    display: 'flex',
    padding: '12px 16px 0px',
    marginBottom: 10,
  },
  captionName: {
    fontSize: 14,
    fontWeight: 600,
    display: 'inline-block',
    marginRight: 4,
  },
  captionTime: {
    color: '#8E8E8E',
    marginRight: 16,
    display: 'flex',
    justifyContent: 'center',
  },
  captionReaction: {
    width: '100%',
    marginTop: 16,
    marginBottom: 4,
    fontSize: 12,
    display: 'flex',
  },
  captionAvatarWrapper: {
    width: 48,
    height: 32,
  },
  contentWrapper2: {
    width: 'calc(100% - 48px)',
  },
  reaction: {
    height: 45,
    width: '100%',
    padding: '4px 8px 0px',
  },
  like: {
    width: 24,
    height: 24,
    margin: 8,
    cursor: 'pointer',
  },
  likeCounter: {
    padding: '0px 16px',
    fontWeight: 600,
    fontSize: 14,
  },
  time: {
    marginLeft: 16,
    fontWeight: 400,
    fontSize: 10,
    color: '#8E8E8E',
    margin: '10px 0px',
    textTransform: 'uppercase',
  },
  typeWrapper: {
    width: '100%',
    height: 56,
    padding: 16,
    display: 'flex',
    borderTop: '1px solid #dbdbdb',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    width: 265,
    height: '100%',
    border: 0,
  },
  post: {
    fontSize: 14,
    color: '#0095F6',
    fontWeight: 600,
    cursor: 'pointer',
  },
});
export default useStyles;
