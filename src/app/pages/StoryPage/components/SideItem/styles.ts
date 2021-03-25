import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    height: 333,
    width: 188,
    background: '#FFFFFF',
    borderRadius: 8,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  info: {
    height: 103,
    position: 'absolute',
    top: 'auto',
    bottom: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: '100%',
  },
  avatar: {
    height: 56,
    width: 56,
    cursor: 'pointer',
    borderRadius: '50%',
  },
  name: {
    fontWeight: 600,
    color: '#FFFFFF',
    textAlign: 'center',
    maxWidth: 160,
  },
  time: {
    fontSize: 15,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
export default useStyles;
