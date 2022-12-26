import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import SectionTriangle from "../SectionTriangle";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";

const skills: string[] = [
  "Agile - Scrum",
  "Agile - Kanban",
  "Waterfall",
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "Laravel",
  "React",
];

const Skills = () => {
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
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          onInit={(ev) => setSwiper(ev)}
          className="h-40"
        >
          {skills.map((skill) => (
            <SwiperSlide key={skill}>
              <div className="w-full h-36 bg-secondary shadow-medium rounded-2xl grid place-items-center">
                <h4 className="text-text_primary font-semibold text-xl">
                  {skill}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button onClick={() => swiper.slideNext()}>
          <FaChevronRight className="scale-[3] mb-4" />
        </button>
        <h3 className="absolute left-1/2 -translate-x-1/2 top-[70%] z-20 text-text_secondary font-bold text-2xl">
          Skill Sets
        </h3>
      </div>
    </SectionTriangle>
  );
};

export default Skills;
