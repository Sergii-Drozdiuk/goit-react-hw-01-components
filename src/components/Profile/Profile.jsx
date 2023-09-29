import styles from './Profile.module.css';
const { card, avatarImg, name, tagText, loc, stats, wrapper, label, quantity } = styles;

export const Profile = ({ data: { username, avatar, tag, stats: { followers, likes, views }, location } }) => (
  <div className={card}>
      <img src={avatar} alt={username} className={avatarImg} />
      <p className={name}>{username}</p>
      <p className={tagText}>@{tag}</p>
      <p className={loc}>{location}</p>
    
    <ul className={stats}>
    <li className={wrapper}>
      <span className={label}>Followers:</span>
      <span className={quantity}>{followers}</span>
    </li>
    <li className={wrapper}>
      <span className={label}>Views:</span>
      <span className={quantity}>{views}</span>
    </li>
    <li className={wrapper}>
      <span className={label}>Likes:</span>
      <span className={quantity}>{likes}</span>
    </li>
  </ul>
  </div>
);
