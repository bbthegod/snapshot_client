import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    width: 293,
    height: 293,
    marginBottom: 28,
    float: 'left',
    position: 'relative',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  hoverWrapper: {
    width: 293,
    height: 293,
    zIndex: 9,
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'rgba(0, 0, 0,0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hover: { display: 'flex', alignItems: 'center' },
  icon: {
    width: 20,
    height: 20,
    color: '#FFFFFF',
  },
  number: {
    margin: 0,
    padding: 0,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});
export default useStyles;
