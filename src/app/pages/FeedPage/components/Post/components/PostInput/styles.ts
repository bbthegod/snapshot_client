import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
  wrapper: {
    width: 614,
    minHeight: 56,
    padding: '0px 16px',
    borderTop: '1px solid #dbdbdb',
    marginTop: 4,
    display: 'flex',
    alignItems: 'center',
  },
  emoji: {
    width: 24,
    height: 24,
    marginRight: 16,
    cursor: 'pointer',
    margin: '8px 16px 8px 0px',
  },
  area: {
    width: 'auto',
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
  buttonDisabled: {
    color: '#0095f6',
    padding: 0,
    border: 0,
    background: '#FFFFFF',
    fontWeight: 600,
    cursor: 'default',
    opacity: '.3',
  },
  emojiBox: {
    position: 'absolute',
    width: 328,
    zIndex: 999,
    top: -325,
  },
});
export default useStyles;
