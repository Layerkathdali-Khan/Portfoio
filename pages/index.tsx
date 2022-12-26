import React from "react";
import Header from "../components/Header";
import AboutMe from "../components/MainPage/AboutMe";
import Experiences from "../components/MainPage/Experiences";
import Hero from "../components/MainPage/Hero";
import Projects from "../components/MainPage/Projects";
import Skills from "../components/MainPage/Skills";

const MainPage = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Experiences />
        <Projects />
      </main>
    </div>
  );
};

export default MainPage;
