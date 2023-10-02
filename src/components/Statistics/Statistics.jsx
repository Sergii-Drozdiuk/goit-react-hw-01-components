import styles from './Statistics.module.css'

export const Statistics = ({title, data}) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles['stat-list']}>
    {data.map(({ id, label, percentage }) => (
      <li className={styles.item} key={id} style={{ background: randomColor() }}>
        <span className={styles.label}>{label}</span>
        <span className={styles.percentage}>{percentage}%</span>
      </li>
    ))}
  </ul>
  </section>
);

const randomColor = () => (
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
);