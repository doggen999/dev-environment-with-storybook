import React, { useEffect, useState } from "react";
import styles from "./styles.scss";
export const Component = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date(), 1000);
    });
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div className={styles.foo}>
      <h1 className={styles.bar}>{time.toLocaleTimeString()}</h1>
    </div>
  );
};
