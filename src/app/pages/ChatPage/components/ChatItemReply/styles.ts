import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: '50%',
    marginRight: 8,
  },
  chat: {
    padding: 16,
    borderRadius: 22,
    border: '1px solid #dbdbdb',
    maxWidth: 236,
    minHeight: 56,
    display: 'inline-block',
  },
});
export default useStyles;
