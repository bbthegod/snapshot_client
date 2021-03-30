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
  item: {
    width: '100%',
    height: 42,
    background: '#FFFFFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '1px solid #dbdbdb',
    cursor: 'pointer',
    position: 'relative',
  },
  sideItem: {
    height: 42,
    width: 42,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    position: 'absolute',
  },
  icon: {
    width: 14,
    height: 14,
  },
  text: {
    padding: 0,
    margin: 0,
    fontSize: 14,
  },
  centerItem: {
    width: 'calc(100%-46px)',
    height: 42,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 500,
  },
  searchWrapper: {
    width: '100%',
    height: 55,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '1px solid #dbdbdb',
  },
  input: {
    height: 30,
    width: '90%',
    border: 0,
    '&:focus': {
      outline: 'none',
    },
  },
  userWrapper: {
    width: '100%',
    height: 370,
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});
export default useStyles;
