import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AboutMe from "../components/MainPage/AboutMe";
import Contact from "../components/MainPage/Contact";
import Experiences from "../components/MainPage/Experiences";
import Hero from "../components/MainPage/Hero";
import Projects from "../components/MainPage/Projects";
import Reviews from "../components/MainPage/Reviews";
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
        <Reviews />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default MainPage;
