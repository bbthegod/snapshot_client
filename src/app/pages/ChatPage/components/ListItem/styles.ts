import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    width: '100%',
    height: 72,
    padding: '8px 20px',
    display: 'flex',
    background: '#ffffff',
    cursor: 'pointer',
  },
  rootActive: {
    width: '100%',
    height: 72,
    padding: '8px 20px',
    display: 'flex',
    background: '#efefef',
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: '50%',
    marginRight: 12,
  },
  nameWrapper: {
    width: 'auto',
    height: 56,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  name: {
    width: '100%',
    color: '#262626',
  },
  lastMessage: {
    width: '100%',
    color: '#8e8e8e',
  },
});
export default useStyles;
