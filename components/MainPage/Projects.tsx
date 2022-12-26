import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import SectionTriangle from "../SectionTriangle";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";

const projects = [
  {
    title: "BBC System",
    list: [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, quidem.",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, quidem.",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, quidem.",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, quidem.",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, quidem.",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, quidem.",
    ],
  },
  {
    title: "PAWG System",
    list: [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, quidem.",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, quidem.",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, quidem.",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, quidem.",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, quidem.",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, quidem.",
    ],
  },
  {
    title: "PAAG System",
    list: [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, quidem.",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, quidem.",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, quidem.",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, quidem.",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, quidem.",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, quidem.",
    ],
  },
];

const Projects = () => {
  const [swiper, setSwiper] = useState<{ slideNext?: any; slidePrev?: any }>(
    {}
  );
  return (
    <SectionTriangle>
      <div className="section flex items-center justify-center gap-12 relative">
        <button onClick={() => swiper.slidePrev()}>
          <FaChevronLeft className="scale-[3] mb-4" />
        </button>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={300}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          loop={true}
          onInit={(ev) => setSwiper(ev)}
          className="h-[30.25rem]"
        >
          {projects.map((prj) => (
            <SwiperSlide key={prj.title}>
              <article className="w-full h-[30rem]  border-2 border-secondary text-text_primary bg-primary shadow-medium rounded-2xl flex items-start justify-start">
                <div className="w-full py-8 px-20 relative h-full">
                  <h4 className="font-semibold text-center text-2xl text-text_secondary">
                    {prj.title}
                  </h4>
                  <h5 className="text-text_primary text-xl font-semibold mt-4">
                    Project Overview
                  </h5>
                  <ul className="list-disc pl-8">
                    {prj.list.map((text) => (
                      <li className="mt-2">{text}</li>
                    ))}
                  </ul>
                  <div className="absolute bottom-8 left-20 flex items-center gap-12 text-text_primary">
                    <button className="font-bold underline underline-offset-2">
                      View Details
                    </button>
                    <button className="font-bold underline underline-offset-2">
                      Download
                    </button>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
        <button onClick={() => swiper.slideNext()}>
          <FaChevronRight className="scale-[3] mb-4" />
        </button>
        <h3 className="absolute left-1/2 -translate-x-1/2 bottom-10 z-20 text-text_secondary font-bold text-2xl">
          Sample Projects
        </h3>
      </div>
    </SectionTriangle>
  );
};

export default Projects;
