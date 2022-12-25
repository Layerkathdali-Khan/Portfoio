import React from "react";
import Header from "../components/Header";
import Hero from "../components/MainPage/Hero";

const MainPage = () => {
  return (
    <div className="px-16">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default MainPage;
