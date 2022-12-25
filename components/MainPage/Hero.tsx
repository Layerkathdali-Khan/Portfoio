import React from "react";
import SectionTriangle from "../SectionTriangle";

const Hero = () => {
  return (
    <SectionTriangle>
      <div className="flex items-center justify-between min-h-screen relative z-10">
        <article>
          <h3 className="text-6xl font-bold text-text_secondary">
            I'm Paing Zay Lynn Htet
          </h3>
          <p className="text-[35px] text-text_primary max-w-[50ch] mt-10">
            A Person who loves to explore the world with technologies and
            products
          </p>
        </article>
        <figure className="w-[616px] h-[548px] bg-text_primary bg-opacity-40 absolute right-0 bottom-0">
          Image
        </figure>
      </div>
    </SectionTriangle>
  );
};

export default Hero;
