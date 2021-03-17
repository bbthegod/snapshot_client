import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#262626',
  },
  wrapper: {
    width: 975,
    padding: '30px 20px 0px 20px',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 55,
    marginBottom: 55,
  },
  box: {
    width: 935,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    border: '1px solid #dbdbdb',
  },
  left: {
    width: 236,
    borderRight: '1px solid #dbdbdb',
  },
  leftItem: {
    width: '100%',
    height: 52,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 32,
    fontSize: 16,
    fontWeight: 400,
    '&:hover': {
      backgroundColor: '#fafafa',
      borderLeft: '2px solid #dbdbdb',
      paddingLeft: 30,
    },
    cursor: 'pointer',
  },
  leftItemActive: {
    width: '100%',
    height: 52,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 30,
    fontSize: 16,
    fontWeight: 600,
    borderLeft: '2px solid #262626',
    cursor: 'pointer',
  },
  right: {
    width: 696,
    marginBottom: 16,
  },
});
export default useStyles;
