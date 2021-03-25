import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    background: '#1a1a1a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    color: '#FFFFFF',
    margin: 0,
    padding: 0,
    height: 40,
    width: 110,
    display: 'block',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    fontFamily: 'Pacifico',
    fontSize: 25,
    fontWeight: 400,
    cursor: 'pointer',
    position: 'absolute',
    top: 16,
    left: 16,
  },
  close: {
    color: '#FFFFFF',
    height: 24,
    width: 24,
    position: 'absolute',
    top: 20,
    right: 20,
    cursor: 'pointer',
  },
  wrapper: {
    width: 1650,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  space: {
    width: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 24,
    width: 24,
    cursor: 'pointer',
  },
});
export default useStyles;
