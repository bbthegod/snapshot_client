import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,.65)',
    zIndex: 999,
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    borderRadius: 12,
    width: 400,
    background: '#FFFFFF',
    overflow: 'hidden',
  },
  header: {
    width: 400,
    height: 48,
    padding: '4px 8px',
    background: '#FFFFFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '1px solid #dbdbdb',
    cursor: 'pointer',
  },
  headerText: {
    padding: 0,
    margin: 0,
    fontSize: 14,
    fontWeight: 600,
  },
  body: {
    width: 400,
    padding: 16,
  },
  inputBox: {
    display: 'flex',
    alignItems: 'center',
    height: 25,
    cursor: 'pointer',
  },
  input: {
    marginRight: 10,
  },
  label: {
    height: 17,
    fontSize: 14,
    fontWeight: 600,
  },
  footer: {
    width: '100%',
    height: 76,
    padding: 16,
  },
  button: {
    background: '#0095f6',
    color: '#FFFFFF',
    width: '100%',
    height: '100%',
    borderRadius: 4,
    border: 'none',
    cursor: 'pointer',
    '&:active': {
      border: 'none',
      background: '#0095f6b3',
    },
  },
});
export default useStyles;
