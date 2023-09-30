import styles from './Statistics.module.css'

export const Statistics = ({title, data, backgroundColor}) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles['stat-list']}>
    {data.map(({ id, label, percentage }) => (
      <li className={styles.item} key={id} backgroundcolor={backgroundColor()}>
        <span className={styles.label}>{label}</span>
        <span className={styles.percentage}>{percentage}%</span>
      </li>
    ))}
  </ul>
  </section>
);

export const getRandomHexColor = () => {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
    .padStart(6, 0)}`;
};