import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: 975,
    padding: '30px 20px 0px 20px',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 100,
  },
  box: {
    width: 600,
    height: 1000,
    background: '#FFFFFF',
    padding: 8,
  },
  item: {
    width: '100%',
    padding: '8px 16px',
    display: 'flex',
  },
  avatarWrapper: {
    width: 44,
    height: 44,
    marginRight: 12,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: '50%',
  },
  infomationWrapper: {
    width: 420,
  },
  username: {
    fontSize: 14,
    fontWeight: 600,
    cursor: 'pointer',
  },
  name: {
    fontSize: 14,
    color: '#8e8e8e',
  },
  content: {
    fontSize: 12,
    color: '#8e8e8e',
  },
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 76,
    height: 30,
    background: '#0095f6',
    border: 'none',
    color: '#FFFFFF',
    borderRadius: 4,
    fontSize: 14,
    fontWeight: 600,
    cursor: 'pointer',
  },
});
export default useStyles;
