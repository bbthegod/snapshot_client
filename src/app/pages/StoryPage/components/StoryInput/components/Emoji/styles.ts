import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: 175,
    borderRadius: 7,
    padding: '10px 10px 0px 10px',
    animation: '$zoomIn .1s ease-out',
  },
  text: {
    color: '#FFFFFF',
    width: '100%',
    fontWeight: 600,
    textAlign: 'center',
    fontSize: 16,
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 40,
    margin: 8,
    cursor: 'pointer',
    textAlign: 'center',
  },
  '@keyframes zoomIn': {
    '0%': {
      opacity: 0,
      '-webkit-transform': 'scale(1.2)',
      transform: 'scale(1.2)',
    },
    '100%': {
      opacity: 1,
      '-webkit-transform': 'scale(1)',
      transform: 'scale(1)',
    },
  },
});
export default useStyles;
