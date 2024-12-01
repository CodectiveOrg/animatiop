import { ReactElement } from "react";

import NavComponent from "../nav/nav.component.tsx";

import styles from "./header.module.css";

export default function HeaderComponent(): ReactElement {
  return (
    <div className={styles.header}>
      <NavComponent />
    </div>
  );
}
