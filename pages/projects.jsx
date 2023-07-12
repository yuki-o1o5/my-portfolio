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
          <div className={"scroll"}>
            {/* <Project
              demoUrl={"https://e-0922-ja.github.io/expense-tracker-app/"}
              projecttitle={"SpendShare"}
              projecttechstack={
                "#React #TypeScript #Material-UI #Supabase #SendGrid"
              }
              githubUrl={"https://github.com/e-0922-ja/expense-tracker-app"}
              projectdiscription={"Online Group Expense Tracker App"}
            /> */}
            <Project
              demoUrl={"https://glam-review.vercel.app/"}
              projecttitle={"GramReview"}
              projecttechstack={
                "#React #Material-UI #Node.js #Express #MongoDB "
              }
              githubUrl={"https://github.com/yuki-o1o5/GlamReview"}
              projectdiscription={"Cosmetic product review App "}
            />
            <Project
              demoUrl={"https://yuki-o1o5.github.io/ToDoList/"}
              projecttitle={"To Do App"}
              projecttechstack={"#React, #ContextApi, #useReducer"}
              githubUrl={"https://github.com/yuki-o1o5/ToDoList"}
              projectdiscription={"To Do App"}
            />
            <Project
              demoUrl={"https://quiz-app-gilt-six.vercel.app/"}
              projecttitle={"Quiz App"}
              projecttechstack={"React, Material-UI, API"}
              githubUrl={"https://github.com/yuki-o1o5/Quiz-app"}
              projectdiscription={"Quiz App"}
            />
            <Project
              demoUrl={"https://hacker-news-in-japanese.vercel.app/"}
              projecttitle={"Hacker News in Japanese"}
              projecttechstack={"#Next.js #API"}
              githubUrl={"https://github.com/yuki-o1o5/hacker-news-in-japanese"}
              projectdiscription={"Automatic Japanese translation App"}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default projects;
