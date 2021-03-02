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
});
export default useStyles;
