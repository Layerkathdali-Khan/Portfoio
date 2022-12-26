import React from "react";
import { motion } from "framer-motion";
import SectionTriangle from "../SectionTriangle";

import Photo from "../../assets/images/hero.png";
import Image from "next/image";

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
              I&apos;m Paing Zay Lynn Htet
            </h3>
            <p className="text-[35px] text-text_primary mt-6">
              A Person who loves to explore the world with
            </p>
            <p className="text-[35px]  text-text_primary">
              technologies and products
            </p>
          </motion.div>
        </article>
        <motion.figure
          initial={{ y: 600 }}
          animate={{
            y: 0,
            animation: "ease",
            transition: {
              duration: 1,
              delay: 2.8,
            },
          }}
          className="w-[616px] h-[548px] object-contain bg-opacity-40 absolute right-16 bottom-0"
        >
          <Image
            src="/assets/images/hero.png"
            alt="Photo of me"
            fill
            style={{ objectFit: "contain" }}
          />
        </motion.figure>
      </div>
    </SectionTriangle>
  );
};

export default Hero;
