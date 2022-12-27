import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const NavMenus = [
  ["A", "b", "o", "u", "t"],
  ["S", "k", "i", "l", "l", "s"],
  ["E", "x", "p"],
  ["P", "r", "o", "j", "e", "c", "t", "s"],
  ["R", "e", "v", "i", "e", "w", "s"],
  ["C", "o", "n", "t", "a", "c", "t"],
];

const Header = () => {
  return (
    <header className="pt-12 absolute top-0 left-16 z-50">
      <nav>
        <ul className="text-text_primary flex items-center justify-start gap-6 text-3xl font-medium">
          {NavMenus.map((menu, index) => (
            <NavMenu letters={menu} key={index} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

const NavMenu = ({ letters }: { letters: string[] }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
      },
    }));
  }, []);

  const startHoverAnimation = () => {
    controls.start((i) => ({
      y: -7,
      transition: {
        type: "spring",
        delay: i * 0.05,
        stiffness: 200,
      },
    }));
  };
  const startInitialAnimation = () => {
    controls.start((i) => ({
      y: 0,
      transition: {
        type: "spring",
        delay: i * 0.05,
        stiffness: 200,
      },
    }));
  };

  return (
    <li
      className="nav_menu"
      onMouseEnter={() => startHoverAnimation()}
      onFocus={() => startHoverAnimation()}
      onMouseLeave={() => startInitialAnimation()}
      onBlur={() => startInitialAnimation()}
    >
      <a href="#">
        {letters.map((letter, index) => (
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ scale: 0, opacity: 0 }}
            custom={index}
            animate={controls}
            key={index}
          >
            {letter}
          </motion.span>
        ))}
      </a>
    </li>
  );
};

export default Header;
