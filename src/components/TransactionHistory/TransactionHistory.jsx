import styles from './TransactionHistory.module.css';

const { table, head, body, column } = styles;

export const TransactionHistory = ({ data }) => (
  <table className={table}>
    <thead>
      <tr className={head}>
        <th className={column}>Type</th>
        <th className={column}>Amount</th>
        <th className={column}>Currency</th>
      </tr>
    </thead>
    <tbody>
    {data.map(({ id, amount, currency, type }) => (
      <tr key={id} className={body}>
        <td className={column}>{type}</td>
        <td className={column}>{amount}</td>
        <td className={column}>{currency}</td>
      </tr>
    ))}
  </tbody>
  </table>
);