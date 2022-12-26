import React from "react";
import SectionTriangle from "../SectionTriangle";

const articles = [
  { image: "ff.jpg", text: "lorem ipsum", label: "About Me" },
  { image: "ff.jpg", text: "lorem ipsum", label: "Career Objectives" },
  { image: "ff.jpg", text: "lorem ipsum", label: "Background" },
];

const Reviews = () => {
  return (
    <SectionTriangle downward={false}>
      <div className="section flex items-center justify-between gap-1">
        {articles.map((data) => {
          return (
            <article className="h-[33rem] w-full max-w-[25rem] bg-secondary rounded-3xl shadow-medium text-center relative">
              <figure className="w-full aspect-video bg-blue-400 rounded-3xl"></figure>
              <p className="text-text_primary px-4 mt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quisquam, distinctio dolorum illo necessitatibus laborum facilis
                temporibus nesciunt voluptatum magnam iste inventore cum dicta
                sapiente repudiandae ratione non! Itaque inventore maxime
                veritatis placeat deleniti nemo
              </p>
              <button className="font-bold underline absolute bottom-4 left-1/2 -translate-x-1/2 text-text_primary w-max mx-auto underline-offset-2">
                View Details
              </button>
              <label className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-2xl whitespace-nowrap text-text_secondary font-bold">
                {data.label}
              </label>
            </article>
          );
        })}
      </div>
    </SectionTriangle>
  );
};

export default Reviews;
