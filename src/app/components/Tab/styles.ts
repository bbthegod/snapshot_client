import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  tabWrapper: {
    width: '100%',
    height: 100,
    borderTop: '1px solid #dbdbdb',
  },
  tabBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  tab: {
    height: 52,
    marginRight: 60,
    display: 'flex',
    alignItems: 'center',
    borderTop: '1px solid #000000',
    marginTop: -1,
    cursor: 'pointer',
  },
  tabImg: {
    width: 12,
    height: 12,
  },
  tabText: {
    fontSize: 12,
    marginLeft: 6,
  },
  list: {
    width: '100%',
  },
  listItem: {
    width: 293,
    height: 293,
    marginBottom: 28,
    float: 'left',
    position: 'relative',
    cursor: 'pointer',
  },
  listItemImg: {
    width: 293,
    height: 293,
  },
  listItemHover: {
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
  listItemInside: { display: 'flex', alignItems: 'center' },
  listItemIcon: {
    width: 20,
    height: 20,
    color: '#FFFFFF',
  },
  listItemText: {
    margin: 0,
    padding: 0,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});
export default useStyles;
