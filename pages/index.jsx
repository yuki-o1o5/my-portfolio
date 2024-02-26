import Layout from "../components/Layout/Layout.jsx";
import ProjectCard from "../components/ProjectCard/ProjectCard.jsx";

const spendShareTechStack = [
  "React.js",
  "TypeScript",
  "Redux-Toolkit",
  "Material-UI",
  "styled component",
  "Supabase",
  "Postgres",
];

const gramReviewTechStack = [
  "React.js",
  "ContextApi",
  "useReducer",
  "Material-UI",
  "styled component",
  "Node.js",
  "Express",
  "MongoDB ",
];

const toDoAppTechStack = [
  "React.js",
  "TanStack Query",
  "Node.js",
  "Express",
  "SQLite",
];

const quizAppTechStack = ["React.js", "Material-UI", "API"];

const hackerNewsinJapaneseTechStack = ["React.js", "API"];

function ProjectsContent() {
  return (
    <>
      <div className={"scroll"}>
        <ProjectCard
          demoUrl={"https://e-0922-ja.github.io/expense-tracker-app"}
          subtitle={
            "Full-stack application facilitating bill-splitting and payment tracking"
          }
          discription={
            "This application allows users to effortlessly split bills and track shared expenditures, promoting transparency, fairness, and convenience in all your financial transactions."
          }
          img={"../assets/spendshare.png"}
          title={"SpendShare"}
          techstack={spendShareTechStack}
          githubUrl={"https://github.com/e-0922-ja/expense-tracker-app"}
        />

        <ProjectCard
          demoUrl={"https://glam-review.vercel.app/"}
          subtitle={
            "Full-stack application that allows users to read and create reviews for cosmetic products"
          }
          discription={
            "This application empowers users to read, create, edit, and delete reviews for cosmetic products. By checking reviews before making a purchase, users can make more informed and intelligent buying decisions."
          }
          img={"../assets/gramreview.png"}
          title={"GramReview"}
          techstack={gramReviewTechStack}
          githubUrl={"https://github.com/yuki-o1o5/GlamReview"}
        />
        <ProjectCard
          demoUrl={"https://to-do-app-beta-fawn.vercel.app/"}
          subtitle={
            "Full-stack application that helps users manage their tasks efficiently"
          }
          discription={
            "A simple yet powerful To Do App that helps you manage your tasks efficiently. Add, edit, and remove tasks with ease, and track their status (active or complete). Keep an eye on your task count, and get more organized."
          }
          img={"../assets/todo.png"}
          title={"To Do App"}
          techstack={toDoAppTechStack}
          githubUrl={"https://github.com/yuki-o1o5/To-do-List-with-SQLite"}
        />
        <ProjectCard
          demoUrl={"https://quiz-app-gilt-six.vercel.app/"}
          subtitle={
            "Front-end application that enables users to test their knowledge"
          }
          discription={
            "This application provides a delightful and engaging method to test your knowledge, boasting a user-friendly interface that makes learning enjoyable"
          }
          img={"../assets/quiz.png"}
          title={"Quiz App"}
          techstack={quizAppTechStack}
          githubUrl={"https://github.com/yuki-o1o5/Quiz-app"}
        />
        <ProjectCard
          demoUrl={"https://hacker-news-in-japanese.vercel.app/"}
          subtitle={
            "Front-end application that enables users to view Hacker news in Japanese"
          }
          discription={
            "This application allows users to view about the top 10 articles and comments on Hacker News in Japanese."
          }
          img={"../assets/hackernews.png"}
          title={"Hacker News in Japanese"}
          techstack={hackerNewsinJapaneseTechStack}
          githubUrl={"https://github.com/yuki-o1o5/hacker-news-in-japanese"}
        />
      </div>
    </>
  );
}

export default function home() {
  return (
    <Layout content="Yuki Kasugai, Software engineer specializing in front-end development ">
      <ProjectsContent />
    </Layout>
  );
}
