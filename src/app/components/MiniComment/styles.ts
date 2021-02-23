import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    marginBottom: 4,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  contentWrapper: {
    padding: 0,
    margin: 0,
    fontSize: 14,
    fontWeight: 600,
    cursor: 'pointer',
    width: 570,
  },
  content: {
    fontWeight: 400,
    cursor: 'none',
  },
  like: {
    width: 12,
    height: 12,
    cursor: 'pointer',
  },
});
export default useStyles;
