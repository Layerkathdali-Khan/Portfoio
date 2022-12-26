import React from "react";
import { motion } from "framer-motion";
import SectionTriangle from "../SectionTriangle";

const Hero = () => {
  return (
    <SectionTriangle>
      <div className="flex items-center justify-between section">
        <article className="h-48 mb-4 overflow-hidden">
          <motion.div
            initial={{ y: 210 }}
            animate={{
              y: [210, 100, 0],
              animation: "ease",
              transition: {
                duration: 2.4,
                delay: 0.6,
              },
            }}
          >
            <h3 className="text-6xl font-bold text-text_secondary">
              I'm Paing Zay Lynn Htet
            </h3>
            <p className="text-[35px] text-text_primary mt-6">
              A Person who loves to explore the world with
            </p>
            <p className="text-[35px]  text-text_primary">
              technologies and products
            </p>
          </motion.div>
        </article>
        <figure className="w-[616px] h-[548px] bg-text_primary bg-opacity-40 absolute right-16 bottom-0">
          Image
        </figure>
      </div>
    </SectionTriangle>
  );
};

export default Hero;
