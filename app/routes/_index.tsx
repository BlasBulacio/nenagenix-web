import type { MetaFunction } from "@remix-run/deno";

import styles from "../styles/index.module.css";


export const meta: MetaFunction = () => {
  return [
    { title: "Nenagenix" },
    { name: "description", content: "Welcome to Nenagenix's official website." },
  ];
};

export default function Index() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.crossContainer}>
        <img className={styles.cross} src="/resources/cross.svg" alt="cross" />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.infoText}>Nenagenix 2024</p>
        <p className={styles.infoText}>Bohemian Groove Corp</p>
      </div>
    </div>
  );
}
