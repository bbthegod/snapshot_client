import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    width: 614,
    borderRadius: 2,
    border: '1px solid #dbdbdb',
    background: '#FFFFFF',
    marginBottom: 30,
  },
  header: {
    width: 614,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: '50%',
  },
  nameWrapper: {
    width: 536,
    marginLeft: 14,
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    padding: 0,
    margin: 0,
    float: 'left',
    fontWeight: 600,
    cursor: 'pointer',
    fontSize: 14,
    width: 520,
  },
  more: {
    float: 'right',
    width: 16,
    height: 16,
  },
  imgPost: {
    width: 614,
  },
  likeWrapper: {
    width: 614,
    height: 40,
    margin: '4px 0px 0px',
    padding: '0px 16px',
    display: 'flex',
    alignItems: 'center',
  },
  like: {
    width: 24,
    height: 24,
    marginRight: 16,
    cursor: 'pointer',
  },
  likeCount: {
    padding: '0px 16px',
    margin: '0px 0px 8px',
  },
  liekCountText: {
    padding: 0,
    margin: 0,
    fontSize: 14,
    fontWeight: 600,
  },
  commentWrapper: {
    width: 614,
    padding: '0px 16px',
  },
  captionsWrapper: {
    marginBottom: 4,
  },
  username: {
    padding: 0,
    margin: 0,
    fontSize: 14,
    fontWeight: 600,
    cursor: 'pointer',
  },
  caption: {
    padding: 0,
    margin: 0,
    fontFamily: 'Roboto',
  },
  fistLine: {
    fontWeight: 400,
    fontFamily: 'Roboto',
  },
  seeMore: {
    color: '#8e8e8e',
  },
  afterLine: {
    fontWeight: 400,
    fontFamily: 'Roboto',
    padding: 0,
    margin: 0,
    marginBottom: 4,
  },
  seeAllCommentsWrapper: {
    marginBottom: 4,
    width: '100%',
  },
  seeAllComments: {
    color: '#8e8e8e',
    padding: 0,
    margin: 0,
    cursor: 'pointer',
  },
  typeAreWapper: {
    width: 614,
    height: 56,
    padding: '0px 16px',
    borderTop: '1px solid #dbdbdb',
    marginTop: 4,
  },
  input: {
    width: '100%',
    height: '100%',
    border: 'none',
    backgroundColor: '#FFFFFF',
  },
  timestampWapper: {
    marginBottom: 4,
  },
  timestamp: {
    padding: 0,
    margin: 0,
    fontSize: 10,
    color: '#8e8e8e',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
export default useStyles;
