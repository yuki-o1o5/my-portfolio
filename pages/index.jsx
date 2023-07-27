import Layout from "../components/Layout/Layout.jsx";
import Project from "../components/ProjectCard/ProjectCard.jsx";

function ProjectsContent() {
  return (
    <>
      <div className={"scroll"}>
        <Project
          demoUrl={"https://e-0922-ja.github.io/expense-tracker-app"}
          img={"../assets/spendshare.png"}
          projecttitle={"SpendShare"}
          projecttechstack={
            "#React #TypeScript #Redux-Toolkit #Material-UI #styled component #Supabase #Postgres "
          }
          githubUrl={"https://github.com/e-0922-ja/expense-tracker-app"}
          // projectdiscription={"Cosmetic product review App "}
        />

        <Project
          demoUrl={"https://glam-review.vercel.app/"}
          img={"../assets/gramreview.png"}
          projecttitle={"GramReview"}
          projecttechstack={
            "#React #ContextApi #useReducer #Material-UI #styled component #Node.js #Express #MongoDB "
          }
          githubUrl={"https://github.com/yuki-o1o5/GlamReview"}
          // projectdiscription={"Cosmetic product review App "}
        />
        <Project
          demoUrl={"https://to-do-app-beta-fawn.vercel.app/"}
          img={"../assets/todo.png"}
          projecttitle={"To Do App"}
          projecttechstack={"#React #TanStack Query #Node.js #Express #SQLite"}
          githubUrl={"https://github.com/yuki-o1o5/To-do-List-with-SQLite"}
          // projectdiscription={"To Do App"}
        />
        <Project
          demoUrl={"https://quiz-app-gilt-six.vercel.app/"}
          img={"../assets/quiz.png"}
          projecttitle={"Quiz App"}
          projecttechstack={"#React #Material-UI #API"}
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
