import TimeAgo from 'javascript-time-ago';
import vi from 'javascript-time-ago/locale/vi';
TimeAgo.addDefaultLocale(vi);
const timeAgo = new TimeAgo('vi');
export default function timeSince(date) {
  return timeAgo.format(new Date(date));
}
