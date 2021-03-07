import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,.65)',
    zIndex: 999,
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    borderRadius: 12,
    width: 400,
    background: '#FFFFFF',
    overflow: 'hidden',
  },
  item: {
    width: 400,
    height: 48,
    padding: '4px 8px',
    background: '#FFFFFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '1px solid #dbdbdb',
    cursor: 'pointer',
  },
  text: {
    padding: 0,
    margin: 0,
    fontSize: 14,
  },
  textRed: {
    padding: 0,
    margin: 0,
    fontSize: 14,
    color: '#ed4956',
    fontWeight: 700,
  },
});
export default useStyles;
