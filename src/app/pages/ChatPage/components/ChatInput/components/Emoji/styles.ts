import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 328,
    height: 325,
    background: '#FFFFFF',
    borderRadius: 7,
    padding: '10px 10px 0px 10px',
    overflowY: 'scroll',
    animation: '$zoomIn .1s ease-out',
  },
  text: {
    color: '#757575',
    fontWeight: 400,
    margin: '8px 0px 8px 8px',
  },
  wrapper: {
    marginBottom: 8,
    width: '100%',
  },
  iconWrapper: {
    marginBottom: 16,
    width: '100%',
    display: 'flex',
    alignContent: 'flex-start',
    flexFlow: 'row wrap',
  },
  icon: {
    width: 33,
    height: 33,
    fontSize: 25,
    margin: 4,
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
