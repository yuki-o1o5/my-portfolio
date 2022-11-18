import React from "react";
import styles from "./Herosection.module.css";
import Image from "next/image";

const Herosection = () => {
  return (
    <div>
      <div className={styles.namecontainer}>
        <section className={styles.herosection}>
          <h1 className={styles.nameh1}>Yuki Kasugai</h1>
          <p className={styles.namep1}>
            I am a Front-End Developer in Vancouver!
          </p>
        </section>
        <Image
          className={styles.nameimg}
          src="/assets/yukikasugai.jpg"
          alt="yukikasugai"
          width={200}
          height={200}
          objectFit="contain"
        />
      </div>
      <p className={styles.pcommon}>
        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Vestibulum rhoncus
        est pellentesque elit ullamcorper dignissim cras tincidunt. In hac
      </p>
      <div className={styles.icon}>
        <a href="https://github.com/yuki-o1o5" target="_blank" rel="noreferrer">
          <i class="fa-brands fa-square-github fa-2x fa-fw"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/yuki-kasugai-136826247/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-linkedin fa-2x fa-fw"></i>
        </a>
        <a href="mailto:sample@sample.com">
          <i class="fa-solid fa-square-envelope fa-2x fa-fw"></i>
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <i class="fa-solid fa-square-poll-horizontal  fa-2x fa-fw"></i>
        </a>
      </div>
    </div>
  );
};

export default Herosection;
