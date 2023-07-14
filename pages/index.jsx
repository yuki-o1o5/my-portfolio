import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Herosection from "../components/Herosection/Herosection";

export default function Home() {
  return (
    <div className={"maincontainer"}>
      <Layout
        content={
          "Yuki Kasugai, Software engineer specializing in front-end development"
        }
      />
      <div className={"subcontainer"}>
        <div className="nav">
          <Navbar />
        </div>
        <main className={"main"}>
          <div className={"adjustmain"}>
            <Herosection />
          </div>
        </main>
      </div>
    </div>
  );
}
