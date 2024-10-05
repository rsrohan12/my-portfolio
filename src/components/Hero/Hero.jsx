import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rohan</h1>
        <p className={styles.description}>
           I'm a web developer with a focus on the MERN stack,
            but still exploring other technologies and framewroks that catch my interest!!
        </p>
        <div className={styles.container2}>
          <a href="mailto:rsrohan787@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a href="CV1.pdf" download className={styles.downloadBtn}>
            Download CV
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/boy.webp")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
