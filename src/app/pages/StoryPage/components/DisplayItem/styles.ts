import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    height: 900,
    width: 506,
    background: '#FFFFFF',
    borderRadius: 8,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
  },
  header: {
    width: '100%',
    height: 102,
    background: 'linear-gradient(180deg,rgba(38,38,38,.8) 0%,rgba(38,38,38,0) 100%)',
    padding: '20px 16px 32px',
    position: 'absolute',
    top: 0,
  },
  headerBottomWrapper: {
    width: '100%',
    height: 40,
    display: 'flex',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: '50%',
    cursor: 'pointer',
  },
  headerBottomLeft: {
    height: 40,
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    marginLeft: 5,
    fontWeight: 500,
    color: '#FFFFFF',
    cursor: 'pointer',
  },
  time: {
    marginLeft: 10,
    fontSize: 15,
    color: '#FFFFFF',
    opacity: 0.6,
    fontWeight: 300,
  },
  headerBottomRight: {
    height: 40,
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  icon16: {
    width: 16,
    height: 16,
    marginRight: 8,
    cursor: 'pointer',
  },
  icon24: {
    width: 24,
    height: 24,
    cursor: 'pointer',
  },
  bottom: {
    width: '100%',
    height: 150,
    padding: 16,
    bottom: 0,
    position: 'absolute',
    background: 'linear-gradient( 180deg ,rgba(38,38,38,0) 0%,rgba(38,38,38,.6) 100%)',
    display: 'flex',
    alignItems: 'flex-end',
  },
});
export default useStyles;
