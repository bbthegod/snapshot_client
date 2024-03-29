import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  avatarDropdownBox: {
    width: 230,
    background: '#FFFFFF',
    borderRadius: 6,
    position: 'absolute',
    top: 38,
    right: 0,
    boxShadow: '0 0 5px 1px rgba(0,0,0,.0975)',
  },
  iconDropdown: {
    width: 18,
    height: 18,
    margin: 0,
    padding: 0,
    marginRight: 12,
  },
  profileBox: {
    width: 230,
    height: 37,
    background: '#FFFFFF',
    padding: '8px 16px',
    border: '1px solid #dbdbdb',
    borderBottom: 'none',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#FAFAFA',
    },
  },
  settingsBox: {
    width: 230,
    height: 37,
    background: '#FFFFFF',
    padding: '8px 16px',
    borderLeft: '1px solid #dbdbdb',
    borderRight: '1px solid #dbdbdb',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#FAFAFA',
    },
  },
  textDropdown: {
    fontSize: 14,
    margin: 0,
    padding: 0,
    width: 170,
  },
  logoutBox: {
    width: 230,
    height: 37,
    background: '#FFFFFF',
    padding: '8px 16px',
    border: '1px solid #dbdbdb',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#FAFAFA',
    },
  },
});
export default useStyles;
