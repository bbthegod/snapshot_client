import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  header: {
    width: '100%',
    height: 42,
    marginTop: 30,
    display: 'flex',
  },
  avatarWrapper: {
    margin: '2px 32px 0 124px',
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: '50%',
  },
  nameWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  name: {
    fontSize: 24,
  },
  form: {
    margin: '16px 0',
  },
  rightIem: {
    marginBottom: 16,
    display: 'flex',
  },
  lable: {
    width: 194,
    padding: '6px 32px',
    textAlign: 'end',
    fontSize: 16,
    fontWeight: 500,
  },
  input: {
    width: 442,
    height: 40,
    border: '1px solid #dbdbdb',
    background: '#fafafa',
    borderRadius: 6,
    textIndent: 10,
  },
  select: {
    width: 355,
    height: 32,
    border: '1px solid #dbdbdb',
    background: '#FFFFFF',
    borderRadius: 3,
    padding: 10,
    cursor: 'text',
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    background: '#0095f6',
    color: '#FFFFFF',
    width: 106,
    height: 30,
    borderRadius: 4,
    border: 'none',
    cursor: 'pointer',
    fontWeight: 600,
    marginTop: 16,
    '&:active': {
      border: 'none',
      background: '#0095f6b3',
    },
  },
  buttonDisabled: {
    background: '#b2dffc',
    color: '#FFFFFF',
    width: 106,
    height: 30,
    fontWeight: 600,
    borderRadius: 4,
    border: 'none',
    marginTop: 16,
  },
  infoDescription1: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: 600,
    color: '#8e8e8e',
    width: 355,
  },
  infoDescription2: {
    fontSize: 12,
    fontWeight: 400,
    color: '#8e8e8e',
    width: 355,
  },
  forget: {
    marginTop: 16,
    fontSize: 14,
    fontWeight: 600,
    color: '#0095f6',
    cursor: 'pointer',
  },
});
export default useStyles;
