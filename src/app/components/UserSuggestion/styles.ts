import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    width: 293,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    padding: '8px 0px',
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: '50%',
    marginRight: 12,
    cursor: 'pointer',
  },
  main: {
    width: 197,
    height: 43,
  },
  name: {
    width: 197,
    display: 'inline-block',
    fontSize: 14,
    color: '#262626',
    fontWeight: 600,
    cursor: 'pointer',
  },
  content: {
    width: 197,
    display: 'inline-block',
    fontSize: 12,
    color: '#8E8E8E',
  },
  follow: {
    width: 52,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    fontSize: 12,
    color: '#0095F6',
    fontWeight: 600,
    cursor: 'pointer',
  },
});
export default useStyles;
