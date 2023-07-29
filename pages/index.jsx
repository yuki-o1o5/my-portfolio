import Layout from "../components/Layout/Layout.jsx";
import ProjectCard from "../components/ProjectCard/ProjectCard.jsx";

function ProjectsContent() {
  return (
    <>
      <div className={"scroll"}>
        <ProjectCard
          demoUrl={"https://e-0922-ja.github.io/expense-tracker-app"}
          project_subtitle={
            "Full-stack application facilitating bill-splitting and payment tracking"
          }
          projectdiscription={
            "This application allows users to effortlessly split bills and track shared expenditures, promoting transparency, fairness, and convenience in all your financial transactions."
          }
          img={"../assets/spendshare.png"}
          projecttitle={"SpendShare"}
          projecttechstack={
            "#React #TypeScript #Redux-Toolkit #Material-UI #styled component #Supabase #Postgres "
          }
          githubUrl={"https://github.com/e-0922-ja/expense-tracker-app"}
        />

        <ProjectCard
          demoUrl={"https://glam-review.vercel.app/"}
          project_subtitle={
            "Full-stack application that allows users to read and create reviews for cosmetic products"
          }
          projectdiscription={
            "This application empowers users to read, create, edit, and delete reviews for cosmetic products. By checking reviews before making a purchase, users can make more informed and intelligent buying decisions."
          }
          img={"../assets/gramreview.png"}
          projecttitle={"GramReview"}
          projecttechstack={
            "#React #ContextApi #useReducer #Material-UI #styled component #Node.js #Express #MongoDB "
          }
          githubUrl={"https://github.com/yuki-o1o5/GlamReview"}
        />
        <ProjectCard
          demoUrl={"https://to-do-app-beta-fawn.vercel.app/"}
          project_subtitle={
            "Full-stack application that helps users manage their tasks efficiently"
          }
          projectdiscription={
            "A simple yet powerful To Do App that helps you manage your tasks efficiently. Add, edit, and remove tasks with ease, and track their status (active or complete). Keep an eye on your task count, and get more organized."
          }
          img={"../assets/todo.png"}
          projecttitle={"To Do App"}
          projecttechstack={"#React #TanStack Query #Node.js #Express #SQLite"}
          githubUrl={"https://github.com/yuki-o1o5/To-do-List-with-SQLite"}
        />
        <ProjectCard
          demoUrl={"https://quiz-app-gilt-six.vercel.app/"}
          project_subtitle={
            "Front-end application that enables users to test their knowledge"
          }
          projectdiscription={
            "This application provides a delightful and engaging method to test your knowledge, boasting a user-friendly interface that makes learning enjoyable"
          }
          img={"../assets/quiz.png"}
          projecttitle={"Quiz App"}
          projecttechstack={"#React #Material-UI #API"}
          githubUrl={"https://github.com/yuki-o1o5/Quiz-app"}
        />
        <ProjectCard
          demoUrl={"https://hacker-news-in-japanese.vercel.app/"}
          project_subtitle={
            "Front-end application that enables users to view Hacker news in Japanese"
          }
          projectdiscription={
            "This application allows users to view about the top 10 articles and comments on Hacker News in Japanese."
          }
          img={"../assets/hackernews.png"}
          projecttitle={"Hacker News in Japanese"}
          projecttechstack={"#Next.js #API"}
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
