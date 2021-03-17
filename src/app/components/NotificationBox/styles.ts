import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 500,
    height: 362,
    background: '#FFFFFF',
    borderRadius: 6,
    position: 'absolute',
    top: 38,
    right: -50,
    boxShadow: '0 0 5px 1px rgba(0,0,0,.0975)',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    padding: '8px 0px',
  },
  item: {
    width: '100%',
    height: 68,
    padding: '12px 16px',
    display: 'flex',
    cursor: 'pointer',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: '50%',
  },
  text: { margin: '0px 12px', display: 'flex', alignItems: 'center' },
  link: {
    fontWeight: 600,
    paddingRight: 5,
    cursor: 'pointer',
  },
  time: {
    color: '#8e8e8e',
    paddingLeft: 5,
  },
});
export default useStyles;
