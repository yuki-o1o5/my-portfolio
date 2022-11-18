import React from "react";
import Image from "next/image";
import styles from "./Techstack.module.css";

const Teckstack = () => {
  return (
    <section className={styles.techstack}>
      <h2 className={styles.titleh2}>Tech Stack</h2>
      <div className={styles.techstackparent}>
        <Image
          className={styles.techstackimg}
          src="/assets/html.png"
          alt="#"
          width={50}
          height={50}
          objectFit="contain"
        />
        <Image
          className={styles.techstackimg}
          src="/assets/css.png"
          alt="#"
          width={50}
          height={50}
          objectFit="contain"
        />
        <Image
          className={styles.techstackimg}
          src="/assets/javascript.png"
          alt="#"
          width={50}
          height={50}
          objectFit="contain"
        />
        <Image
          className={styles.techstackimg}
          src="/assets/react.png"
          alt="#"
          width={50}
          height={50}
          objectFit="contain"
        />
        <Image
          className={styles.techstackimg}
          src="/assets/nextjs.png"
          alt="#"
          width={50}
          height={50}
          objectFit="contain"
        />
      </div>
    </section>
  );
};
export default Teckstack;
