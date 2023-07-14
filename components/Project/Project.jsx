import React from "react";
import styles from "./Project.module.css";
import Image from "next/image";

const Project = (props) => {
  return (
    <div className={styles.project_container}>
      <h2 className={styles.project_title}>{props.projecttitle}</h2>
      <div className={styles.project_img_link}>
        <a href={props.demoUrl} target="_blank" rel="noreferrer">
          <img
            className={styles.project_img}
            src={`../assets/${props.img}`}
            alt={props.projecttitle}
          />
        </a>
      </div>
      <div>
        <div className={styles.tech_stack_container}>
          <p className={styles.tech_stack}>{props.projecttechstack}</p>
        </div>
        <p className={styles.project_discription}>{props.projectdiscription}</p>
        <a href={props.githubUrl} target="_blank" rel="noreferrer">
          <i className="fa-brands fa-square-github fa-2x fa-fw"></i>
        </a>
      </div>
    </div>
  );
};
export default Project;
