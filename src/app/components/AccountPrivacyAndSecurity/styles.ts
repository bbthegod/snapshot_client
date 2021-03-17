import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: '0px 24px',
  },
  itemBox: {
    width: '100%',
    paddingTop: 30,
    paddingBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 400,
    marginBottom: 24,
  },
  label: {
    width: '100%',
    height: 21,
    display: 'flex',
    fontSize: 14,
    fontWeight: 500,
  },
  checkBox: { margin: '3px 8px 0px 5px', width: 16, height: 16 },
  link: {
    fontSize: 14,
    fontWeight: 500,
    color: '#0095f6',
    display: 'inline-block',
    cursor: 'pointer',
  },
  subText: {
    fontSize: 14,
    fontWeight: 400,
    color: '#8e8e8e',
    marginTop: 16,
  },
  divider: {
    background: '#dbdbdb',
    height: 1,
    border: 'none',
  },
});
export default useStyles;
