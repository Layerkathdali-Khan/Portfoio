import React from "react";

const Header = () => {
  return (
    <header className="pt-8 absolute top-0 left-8 z-50">
      <nav>
        <ul className="text-text_primary flex items-center justify-start gap-8 text-3xl font-medium">
          <li className="hover:bg-secondary cursor-pointer py-2 px-8 rounded-xl transition-colors ">
            About
          </li>
          <li className="hover:bg-secondary cursor-pointer py-2 px-8 rounded-xl transition-colors ">
            Skills
          </li>
          <li className="hover:bg-secondary cursor-pointer py-2 px-8 rounded-xl transition-colors ">
            Exp
          </li>
          <li className="hover:bg-secondary cursor-pointer py-2 px-8 rounded-xl transition-colors ">
            Projects
          </li>
          <li className="hover:bg-secondary cursor-pointer py-2 px-8 rounded-xl transition-colors ">
            Reviews
          </li>
          <li className="hover:bg-secondary cursor-pointer py-2 px-8 rounded-xl transition-colors ">
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
