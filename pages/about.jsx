import Layout from "../components/Layout/Layout.jsx";
import Aboutme from "../components/Aboutme/Aboutme.jsx";
import Techstack from "../components/Techstack/Techstack.jsx";

function AboutPageContent() {
  return (
    <>
      <div className="aboutme_wrapper">
        <Aboutme />
        <Techstack />
      </div>
    </>
  );
}

export default function About() {
  return (
    <Layout
      content={"Yuki Kasugai, Software engineer. About herself and Skills "}
    >
      <AboutPageContent />
    </Layout>
  );
}
