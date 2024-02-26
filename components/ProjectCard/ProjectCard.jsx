import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  const { demoUrl, subtitle, discription, img, title, techstack, githubUrl } =
    props;
  return (
    <div className={styles.project_container}>
      {/* <a href={props.demoUrl} target="_blank" rel="noreferrer"> */}
      <div className={styles.project_img_container}>
        <img
          className={styles.project_img}
          src={`../assets/${img}`}
          alt={title}
        />
      </div>
      {/* </a> */}
      <h2 className={styles.project_title}>{title}</h2>
      <h4 className={styles.project_subtitle}>{subtitle}</h4>
      <p className={styles.project_discription}>{discription}</p>
      <div>
        <div className={styles.tech_stack_container}>
          {/* <p className={styles.tech_stack}>{techstack}</p> */}
          {techstack?.map((item, index) => (
            <div key={index} className={styles.tech_stack}>
              {item}
            </div>
          ))}
        </div>

        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-square-github fa-2x fa-fw"></i>
        </a>
        <a href={demoUrl} target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-2x fa-square-arrow-up-right"></i>
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;
