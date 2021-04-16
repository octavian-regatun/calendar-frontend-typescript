import { Button } from '@material-ui/core';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function IndexNextPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <img width="500" src="/banner.svg" alt="logo" />
      <h1 style={{ color: 'var(--material-color-indigo)' }}>
        Plan and organize meetings easier
      </h1>
      <h2>Work in Progress</h2>
      <Link href="/login">
        <Button color="primary" variant="contained">
          Go To Login Page
        </Button>
      </Link>
    </div>
  );
}
