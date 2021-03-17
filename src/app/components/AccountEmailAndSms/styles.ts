import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: '24px 32px 64px 32px',
  },
  header: {
    padding: 0,
    margin: 0,
    marginLeft: 16,
    fontSize: 22,
    fontWeight: 400,
  },
  itemBox: {
    margin: '16px 0px',
  },
  label: {
    width: '100%',
    display: 'flex',
    fontSize: 14,
    fontWeight: 500,
  },
  checkBox: { margin: '0 8px 0 3px', width: 16, height: 16 },
  subText: {
    fontSize: 14,
    fontWeight: 400,
    color: '#8e8e8e',
  },
});
export default useStyles;
