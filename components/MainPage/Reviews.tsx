import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper";
import SectionTriangle from "../SectionTriangle";

import Jordi from "../../public/assets/images/jordi.jpg";
import Jhonny from "../../public/assets/images/jhonny.jpeg";
import Shigeo from "../../public/assets/images/shigeo.jpg";
import Xandar from "../../public/assets/images/xandar.jpg";

const reviews = [
  {
    image: Jordi,
    review:
      "He was my teacher when I'm studying at the Brazzers University. Best at it when it's come to teaching.",
    name: "Jordi El Niño Polla",
    position: "Actor",
  },
  {
    image: Jhonny,
    review:
      "I was his favorite yoga instructor. He likes my instructions and services",
    name: "Jhonny Sinns",
    position: "Yoga Instructor",
  },
  {
    image: Shigeo,
    review:
      "知末な口市ソヤネワ判球キエト宿積ユニオム見提ヨウ携地商トじラ覧85車ルうぶぎ来権をっ配貞策小こずらク告呆ざぐフ。",
    name: "Shigeo Tokuda",
    position: "Just Old Grandpa",
  },
  {
    image: Xandar,
    review:
      "adsflkas asdf sdfasdf asdf asdfa sdf asdfasd fa sdfasd fadsf asdf asdf asd f dsf",
    name: "Xandar Corvus",
    position: "Step Brother",
  },
];

const Reviews = () => {
  return (
    <SectionTriangle downward={false}>
      <div className="section flex items-center justify-center">
        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          spaceBetween={200}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          coverflowEffect={{ rotate: 90, slideShadows: false }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.name}>
              <article className="w-full max-w-xs h-[27rem] text-white bg-black rounded-3xl relative flex flex-col">
                <div className="review w-full h-full relative">
                  <p className="text-center px-6 pt-8">
                    &quot; {review.review} &quot;
                  </p>
                </div>
                <div className="w-full h-[calc(100%-9rem)] bg-[#d9d9d9] relative text-black flex flex-col items-center justify-end pb-8">
                  <figure className="absolute left-1/2 -top-12 -translate-x-1/2 w-24 aspect-square rounded-full">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      style={{ objectFit: "cover", borderRadius: "100vw" }}
                    />
                  </figure>
                  <h4 className="text-xl font-bold mb-2">{review.name}</h4>
                  <h5 className="">{review.position}</h5>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionTriangle>
  );
};

export default Reviews;
