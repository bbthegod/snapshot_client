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
    border: '1px solid #dbdbdb',
    display: 'flex',
  },
  left: {
    width: 349,
    borderRight: '1px solid #dbdbdb',
  },
  leftHeader: {
    width: '100%',
    height: 60,
    borderBottom: '1px solid #dbdbdb',
    display: 'flex',
    justifyContent: 'center',
  },
  leftHeaderBox: {
    width: 309,
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    fontWeight: 500,
    position: 'relative',
  },
  newChat: {
    position: 'absolute',
    width: 24,
    height: 24,
    right: 0,
    cursor: 'pointer',
  },
  leftContent: {
    paddingTop: 8,
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  right: {
    width: 583,
    minHeight: 634,
    background: '#FFFFFF',
  },
  rightHeader: {
    width: '100%',
    height: 60,
    borderBottom: '1px solid #dbdbdb',
    display: 'flex',
    justifyContent: 'center',
  },
  rightHeaderBox: {
    width: 543,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    fontSize: 16,
    fontWeight: 500,
    position: 'relative',
  },
  info: {
    position: 'absolute',
    width: 24,
    height: 24,
    right: 0,
    cursor: 'pointer',
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: '50%',
    marginRight: 12,
    marginLeft: 18,
  },
  nameBox: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  rightHeaderName: {
    fontSize: 15,
    fontWeight: 500,
  },
  rightHeaderActive: {
    fontSize: 12,
    color: '#8e8e8e',
    fontWeight: 400,
  },
  contentWrapper: {
    width: '100%',
    height: 490,
    padding: '20px 20px 0px',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  chatWrapper: {
    width: '100%',
    padding: 20,
  },
});
export default useStyles;
