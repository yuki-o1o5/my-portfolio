import React from "react";

import Layout from "../components/Layout/Layout.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Aboutme from "../components/Aboutme/Aboutme.jsx";
import Techstack from "../components/Techstack/Techstack.jsx";

export default function About() {
  return (
    <div className={"maincontainer"}>
      <Layout
        content={"Yuki Kasugai, Software engineer. About herself and Skills "}
      />
      <div className={"subcontainer"}>
        <div className="nav">
          <Navbar />
        </div>
        <main className={"main"}>
          <div className={"adjustmain"}>
            <Aboutme />
            <Techstack />
          </div>
        </main>
      </div>
    </div>
  );
}
