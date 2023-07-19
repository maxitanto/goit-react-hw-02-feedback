import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad }) => {
  return (
    <ul className={css.list}>
      <li className={css.listItem}>Good: {good}</li>
      <li className={css.listItem}>Neutral: {neutral}</li>
      <li className={css.listItem}>Bad: {bad}</li>
    </ul>
  );
};
