import clsx from 'clsx';
import styles from './Friends.module.css';

export const FriendListItem = ({ data }) =>
  data.map(({ id, isOnline, name, avatar }) => (
    <li className={styles.item} key={id}>
      <span className={clsx(isOnline ? styles['status-online'] : styles['status-offline'])}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="80" />
      <p className={styles.name}>{name}</p>
    </li>
  ));