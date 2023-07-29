import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  return (
    <div className={styles.project_container}>
      <h2 className={styles.project_title}>{props.projecttitle}</h2>
      <h4 className={styles.project_subtitle}>{props.project_subtitle}</h4>
      <p className={styles.project_discription}>{props.projectdiscription}</p>
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

        <a href={props.githubUrl} target="_blank" rel="noreferrer">
          <i className="fa-brands fa-square-github fa-2x fa-fw"></i>
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;
