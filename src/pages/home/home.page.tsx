import { ReactElement } from "react";

import styles from "./home.module.css";

export default function HomePage(): ReactElement {
  return (
    <div className={styles.home}>
      <h1>Home</h1>
    </div>
  );
}
