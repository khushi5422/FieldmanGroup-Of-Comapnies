import React from "react";
import styles from "../styles/Home.module.css";

export default function Parallax() {
  return (
      <div className={`${styles.parallaxContainer}`}>
        <div className={`${styles.parallax} mt-3`}></div>
        <h1 className={`${styles.parallaxText}`}>Engineering the Future of Industry</h1>
      </div>
  );
}