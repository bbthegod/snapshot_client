import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    height: 55,
    background: '#FFFFFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '1px solid #dbdbdb',
    position: 'fixed',
    top: 0,
    width: '100%',
    left: 0,
    right: 0,
    zIndex: 998,
  },
  logoBox: {
    height: 55,
    width: 360,
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    color: '#262626',
    margin: 0,
    padding: 0,
    height: 40,
    width: 110,
    display: 'block',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    fontFamily: 'Pacifico',
    fontSize: 25,
    fontWeight: 400,
    cursor: 'pointer',
  },
  searchBox: {
    height: 55,
    width: 215,
    display: 'flex',
    alignItems: 'center',
  },
  search: {
    margin: 0,
    padding: 0,
    height: 28,
    width: '100%',
    border: '1px solid #dbdbdb',
    background: '#fafafa',
    textIndent: 10,
  },
  iconBox: {
    height: 55,
    width: 360,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  icon: {
    color: '#262626',
    margin: 0,
    padding: 0,
    height: 40,
    display: 'block',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    fontFamily: 'Pacifico',
    fontSize: 25,
    fontWeight: 400,
  },
  home: {
    width: 22,
    height: 22,
    cursor: 'pointer',
  },
  centerIcon: {
    width: 22,
    height: 22,
    marginLeft: 22,
    cursor: 'pointer',
  },
  avatar: {
    width: 22,
    height: 22,
    borderRadius: '50%',
    marginLeft: 22,
    cursor: 'pointer',
  },
  avatarCircle: {
    width: 30,
    height: 30,
    borderRadius: '50%',
    border: '2px solid #000000',
    position: 'absolute',
    top: -4,
    right: -4,
    cursor: 'pointer',
  },
  dropdownWapper: {
    position: 'relative',
  },
});
export default useStyles;
