import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    marginTop: 55,
    width: 975,
    padding: '30px 20px 0px 20px',
  },
  infomationWrapper: {
    marginBottom: 44,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  avatarBox: {
    width: 293,
    marginRight: 30,
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: { width: 150, height: 150, borderRadius: '50%' },
  infomationBox: {
    width: 652,
    height: 200,
  },
  infomationTop: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  infomationTopName: {
    fontSize: 28,
    fontWeight: 400,
    padding: 0,
    margin: 0,
    color: '#262626',
  },
  infomationTopEdit: {
    border: '1px solid #dbdbdb',
    background: '#FFFFFF',
    borderRadius: 4,
    marginLeft: 20,
    padding: '5px 9px',
    fontWeight: 600,
    cursor: 'pointer',
  },
  infomationTopEditBlue: {
    border: '1px solid #dbdbdb',
    background: '#0095f6',
    borderRadius: 4,
    marginLeft: 20,
    padding: '5px 24px',
    fontWeight: 600,
    cursor: 'pointer',
    color: '#FFFFFF',
    fontSize: 14,
  },
  settings: {
    width: 24,
    height: 24,
    marginLeft: 10,
    cursor: 'pointer',
  },
  postDetailBox: {
    display: 'flex',
    marginBottom: 20,
  },
  postDetail: {
    marginRight: 40,
    fontSize: 16,
  },
  postDetailText: {
    fontWeight: 600,
    color: '#262626',
  },
  postUserName: {
    fontWeight: 600,
    fontSize: 16,
    padding: 0,
    margin: 0,
    width: '100%',
  },
  userIcon: {
    width: 12,
    height: 12,
  },
  postBio: { fontSize: 16, padding: 0, margin: 0, width: '100%' },
  notFoundWrapper: {
    padding: 40,
    width: '100%',
  },
  notFound1: { fontSize: 22, color: '#262626', textAlign: 'center', fontWeight: 600 },
  notFound2: { fontSize: 16, color: '#262626', textAlign: 'center', fontWeight: 400 },
});
export default useStyles;
