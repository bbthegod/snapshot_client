import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: 975,
    padding: '30px 20px 0px 20px',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 55,
  },
  postWrapper: {
    width: 614,
    marginRight: 28,
  },
  suggestWrapper: {
    width: 293,
  },
  suggestHeader: {
    display: 'flex',
    padding: '5px 0px',
  },
  suggestText1: {
    color: '#8E8E8E',
    width: 210,
  },
  suggestText2: {
    display: 'flex',
    justifyContent: 'flex-end',
    color: '#262626',
    width: 83,
    fontWeight: 600,
    cursor: 'pointer',
  },
});
export default useStyles;
