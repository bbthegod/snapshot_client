import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    marginTop: '90px',
    alignItems: 'center',
    backgroundColor: '#fff',
    border: '1px solid #dbdbdb',
    borderRadius: '1px',
    margin: '0 0 10px',
    padding: '10px 0',
    minWidth: '350px',
  },
  logo: {
    color: '#262626',
    margin: '22px auto 12px',
    height: '70px',
    width: '190px',
    display: 'block',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    fontFamily: 'Sofia',
    fontSize: 40,
    fontWeight: 400,
  },
  inputArea: {
    width: '100%',
    marginTop: 25,
  },
  inputBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 5,
  },
  input: {
    height: 38,
    width: 268,
    border: '1px solid #dbdbdb',
    background: '#fafafa',
    textIndent: 5,
    borderRadius: 3,
  },
  buttonBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  button: {
    height: 30,
    width: 268,
    padding: '5px 9px',
    background: '#0095F6',
    color: '#FFFFFF',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: 5,
  },
  policyBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    margin: '10px 0px',
  },
  policy: {
    width: 268,
    fontSize: '12px',
    textAlign: 'center',
  },
  dividerBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  divider1st: {
    width: '89.33333px',
    height: '15px',
  },
  divider2nd: {
    width: '89.33333px',
    height: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#8e8e8e',
    textTransform: 'uppercase',
    fontSize: '13px',
    fontWeight: 'bold',
    lineHeight: '15px',
  },
  divider3rd: {
    width: '89.33333px',
    height: '15px',
  },
  hr: {
    backgroundColor: '#dbdbdb',
    width: '100%',
  },
  fbLogo: {
    width: 20,
    height: 20,
  },
  fbLoginText: {
    color: '#385185',
    fontSize: 13,
  },
  loginWithFb: {
    marginLeft: 15,
    color: '#385185',
    fontWeight: 'bold',
  },
  fbLoginBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 10,
    cursor: 'pointer',
  },
  forget: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: '20px 0px',
  },
  signupText: {
    color: '#262626',
    fontSize: '14px',
    margin: '15px',
    textAlign: 'center',
  },
  signup: { color: '#385185', cursor: 'pointer', fontWeight: 'bold' },
  signupBox: {
    backgroundColor: '#fff',
    border: '1px solid #dbdbdb',
    borderRadius: '1px',
    margin: '0 0 10px',
    padding: '10px 0',
    minWidth: '350px',
  },
  signupButton: {
    height: 40,
    width: 268,
    padding: '5px 9px',
    background: '#0095F6',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: 5,
  },
});
export default useStyles;
