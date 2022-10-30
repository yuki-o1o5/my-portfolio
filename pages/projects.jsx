import React from "react";
import styles from "../styles/projects.module.css";
import Layout from "../components/Layout/Layout.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Project from "../components//Project/Project.jsx";

const projects = () => {
  return (
    <div className={styles.maincontainer}>
      <Layout />
      <div className={styles.subcontainer}>
        <Navbar />

        <main className={styles.main}>
          <h2 className={styles.titleh2}>My Projects</h2>
          <Project
            projecttitle={"Website1"}
            projecttechstack={"#React #JavaScript #HTML #CSS"}
            projectdiscription={
              "Lorem amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua A diam sollicitudin tempor id eu nisl"
            }
          />
          <Project
            projecttitle={"Website2"}
            projecttechstack={"#React #JavaScript #HTML #CSS"}
            projectdiscription={
              "Lorem amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua A diam sollicitudin tempor id eu nisl"
            }
          />
        </main>
      </div>
    </div>
  );
};

export default projects;
