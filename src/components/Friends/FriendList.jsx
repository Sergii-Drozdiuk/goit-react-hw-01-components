import { FriendListItem } from './FriendListItem';
import styles from './Friends.module.css';

export const FriendList = ({ data }) => (
  <ul className={styles['friend-list']}>
    <FriendListItem data={data} />
  </ul>
);