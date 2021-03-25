import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
  wrapper: {
    width: '100%',
    minHeight: 44,
    padding: '0px 16px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 22,
    border: '1px solid #dbdbdb',
  },
  emoji: {
    width: 24,
    height: 24,
    marginRight: 16,
    cursor: 'pointer',
    margin: '8px 16px 8px 0px',
  },
  area: {
    width: 398,
    height: 20,
    border: 'none',
    backgroundColor: '#FFFFFF',
    '&:focus': {
      outline: 'none',
    },
    maxHeight: 80,
    resize: 'none',
    fontFamily: 'Roboto',
    display: 'flex',
    flexGrow: 1,
    outline: 0,
  },
  button: {
    color: '#0095f6',
    padding: 0,
    border: 0,
    background: '#FFFFFF',
    fontWeight: 600,
    cursor: 'pointer',
  },
  emojiBox: {
    position: 'absolute',
    width: 328,
    zIndex: 999,
    top: -325,
  },
  sendIconWrapper: {
    display: 'flex',
    position: 'absolute',
    right: 8,
  },
  icon: {
    width: 24,
    height: 24,
    margin: 8,
    cursor: 'pointer',
  },
});
export default useStyles;
