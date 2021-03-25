import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    width: '100%',
    minHeight: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapper: {
    border: '1px solid #dbdbdb',
    minHeight: 40,
    borderRadius: '100vh',
    width: '100%',
    padding: '0px 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  emoji: {
    width: 24,
    height: 24,
    marginRight: 16,
    cursor: 'pointer',
    margin: '8px 16px 8px 0px',
  },
  area: {
    width: '100%',
    height: 18,
    border: 'none',
    '&:focus': {
      outline: 'none',
    },
    maxHeight: 80,
    resize: 'none',
    fontFamily: 'Roboto',
    flexGrow: 1,
    outline: 0,
    background: 'transparent',
    color: '#FFFFFF',
  },
  emojiBox: {
    position: 'absolute',
    width: '100%',
    zIndex: 999,
    top: -175,
    left: 0,
  },
  buttonWrapper: {
    height: 40,
    width: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 24,
    width: 24,
  },
});
export default useStyles;
