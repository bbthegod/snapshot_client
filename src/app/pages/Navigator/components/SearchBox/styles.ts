import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  searchDropdownWrapper: {
    width: 375,
    height: 362,
    position: 'absolute',
    boxShadow: '0 0 5px 1px rgba(0,0,0,.0975)',
    background: '#FFFFFF',
    top: 55,
    borderRadius: 6,
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    padding: '8px 0px',
    cursor: 'pointer',
  },
  loading: {
    width: '100%',
    height: 68,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchDropdown: {
    width: '100%',
    height: 60,
    padding: '8px 16px',
    display: 'flex',
    '&:hover': {
      background: '#fafafa',
    },
  },
  searchDropdownItemImg: {
    width: 44,
    height: 44,
    borderRadius: '50%',
    marginRight: 12,
  },
  searchDropdownItemText: {
    height: 44,
    width: 270,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  searchDropdownName: { padding: 0, margin: 0, fontSize: 14, fontWeight: 400, width: '100%', color: '#8e8e8e' },
  searchDropdownUserName: { padding: 0, margin: 0, fontSize: 14, fontWeight: 600, width: '100%' },
});
export default useStyles;
