import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Project from "../components//Project/Project.jsx";

const projects = () => {
  return (
    <div className={"maincontainer"}>
      <Layout />
      <div className="subcontainer">
        <div className="nav">
          <Navbar />
        </div>
        <main className={"main"}>
          <h2 className={"titleh2"}>My Projects</h2>
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
