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
      {children}
      <div
        className={`w-0 h-0 absolute -top-8 left-0 z-0 border-l-transparent border-l-[100vw] ${
          downward
            ? "border-b-[108vh] border-b-secondary"
            : "border-t-[108vh] border-t-secondary"
        }`}
      ></div>
    </section>
  );
};

export default withTriangle;
