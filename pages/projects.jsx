import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Project from "../components//Project/Project.jsx";

const projects = () => {
  return (
    <div className={"maincontainer"}>
      <Layout
        content={"Yuki Kasugai, Software engineer. About her projects "}
      />
      <div className="subcontainer">
        <div className="nav">
          <Navbar />
        </div>
        <main className={"main"}>
          <h2 className={"titleh2"}>My Projects</h2>
          <div className={"scroll"}>
            <Project
              demoUrl={"https://glam-review.vercel.app/"}
              img={"../assets/gramreview.png"}
              projecttitle={"GramReview"}
              projecttechstack={
                "#React #Material-UI #Node.js #Express #MongoDB "
              }
              githubUrl={"https://github.com/yuki-o1o5/GlamReview"}
              // projectdiscription={"Cosmetic product review App "}
            />
            <Project
              demoUrl={"https://yuki-o1o5.github.io/ToDoList/"}
              img={"../assets/todo.png"}
              projecttitle={"To Do App"}
              projecttechstack={"#React, #ContextApi, #useReducer"}
              githubUrl={"https://github.com/yuki-o1o5/ToDoList"}
              // projectdiscription={"To Do App"}
            />
            <Project
              demoUrl={"https://quiz-app-gilt-six.vercel.app/"}
              img={"../assets/quiz.png"}
              projecttitle={"Quiz App"}
              projecttechstack={"React, Material-UI, API"}
              githubUrl={"https://github.com/yuki-o1o5/Quiz-app"}
              // projectdiscription={"Quiz App"}
            />
            <Project
              demoUrl={"https://hacker-news-in-japanese.vercel.app/"}
              img={"../assets/hackernews.png"}
              projecttitle={"Hacker News in Japanese"}
              projecttechstack={"#Next.js #API"}
              githubUrl={"https://github.com/yuki-o1o5/hacker-news-in-japanese"}
              // projectdiscription={"Automatic Japanese translation App"}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default projects;
