import React from "react";

const withTriangle = ({
  children,
  downward = true,
}: {
  children: React.ReactNode;
  downward?: boolean;
}) => {
  return (
    <section>
      <div className="relative overflow-hidden">
        {children}
        <div
          className={`w-0 h-0 absolute -top-0 left-0 z-0 border-l-transparent border-l-[100vw] ${
            downward
              ? "border-b-[100vh] border-b-secondary"
              : "border-t-[100vh] border-t-secondary"
          }`}
        ></div>
      </div>
    </section>
  );
};

export default withTriangle;
