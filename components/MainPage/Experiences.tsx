import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import SectionTriangle from "../SectionTriangle";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";

const experiences = [
  {
    image: "fasdfsaf",
    company: "Xvideos",
    company_type: "Software House",
    period: "Nov 2021 - Dec 2022",
    description: "",
  },
  {
    image: "Pornhub",
    company: "Pornhub",
    company_type: "Software House",
    period: "Nov 2021 - Dec 2022",
    description: "",
  },
  {
    image: "Xnxx",
    company: "Xnxx",
    company_type: "Software House",
    period: "Nov 2021 - Dec 2022",
    description: "",
  },
  {
    image: "fadsf",
    company: "Porn Dude",
    company_type: "Software House",
    period: "Nov 2021 - Dec 2022",
    description: "",
  },
];

const Experiences = () => {
  const [swiper, setSwiper] = useState<{ slideNext?: any; slidePrev?: any }>(
    {}
  );
  return (
    <SectionTriangle downward={false}>
      <div className="section flex items-center justify-center gap-12 relative">
        <button onClick={() => swiper.slidePrev()}>
          <FaChevronLeft className="scale-[3] mb-4" />
        </button>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={1}
          loop={true}
          onInit={(ev) => setSwiper(ev)}
          className="h-[30.25rem] "
        >
          {experiences.map((exp) => (
            <SwiperSlide key={exp.company}>
              <article className="w-full h-[30rem] text-text_primary bg-primary shadow-medium rounded-2xl flex items-start justify-start">
                <figure className="w-full max-w-md rounded-2xl h-full bg-blue-300"></figure>
                <div className="w-full p-8 relative h-full">
                  <h4 className="font-semibold text-2xl text-text_secondary">
                    {exp.company}
                  </h4>
                  <h5 className="text-lg mt-2">{exp.company_type}</h5>
                  <h5 className="text-lg mb-6">{exp.period}</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima laudantium quo corporis non eaque harum, ad dolorem
                    eos officiis sint quod, temporibus in nihil nam
                    necessitatibus eius. Nesciunt pariatur magnam unde dolor a
                    ratione, repellendus hic praesentium sint aut nihil
                    laboriosam enim voluptatum minus error inventore veniam, ab
                    saepe. Maiores expedita nesciunt officia dignissimos.
                    Reiciendis, officiis rem eum voluptatum dolor exercitationem
                    esse, vitae unde at voluptatem tenetur, tempora tempore
                    assumenda.
                  </p>
                  <button className="font-bold underline absolute bottom-4 left-8 text-text_primary w-max mx-auto underline-offset-2">
                    View Details
                  </button>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
        <button onClick={() => swiper.slideNext()}>
          <FaChevronRight className="scale-[3] mb-4" />
        </button>
        <h3 className="absolute left-1/2 -translate-x-1/2 bottom-10 z-20 text-text_secondary font-bold text-2xl">
          Experiences
        </h3>
      </div>
    </SectionTriangle>
  );
};

export default Experiences;
