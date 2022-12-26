import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTriangle from "../SectionTriangle";

const reviews = [
  {
    image:
      "https://pbs.twimg.com/profile_images/1320707253582721026/R6BwHjVs_400x400.jpg",
    review: "He was my teacher when I'm studying at the Brazzers University",
    name: "Jordi El Niño Polla",
    position: "Actor",
  },
  {
    image:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/0683f120fcdf7fc5be7d7f4eb2422f8b~c5_720x720.jpeg?x-expires=1672117200&x-signature=ev%2FPiEQ9Ph4jjuZWusEvsbyIsZg%3D",
    review:
      "I was his favorite yoga instructor. He likes my instructions and services",
    name: "Jhonny Sinns",
    position: "Yoga Instructor",
  },
  {
    image:
      "https://i.pinimg.com/280x280_RS/c1/e5/3a/c1e53a874b03882102924071951495bf.jpg",
    review:
      "知末な口市ソヤネワ判球キエト宿積ユニオム見提ヨウ携地商トじラ覧85車ルうぶぎ来権をっ配貞策小こずらク告呆ざぐフ。",
    name: "Shigeo Tokuda",
    position: "Just Old Grandpa",
  },
  {
    image:
      "https://i.pinimg.com/originals/65/6e/28/656e28311a9f85708b9de51d9b892be0.jpg",
    review:
      "adsflkas asdf sdfasdf asdf asdfa sdf asdfasd fa sdfasd fadsf asdf asdf asd f dsf",
    name: "Xandar Covus",
    position: "Step Brother",
  },
];

const Reviews = () => {
  return (
    <SectionTriangle downward={false}>
      <div className="section flex items-center justify-center">
        <Swiper spaceBetween={200} slidesPerView={3} loop={true}>
          {reviews.map((review) => (
            <SwiperSlide key={review.name}>
              <article className="w-full max-w-xs h-[27rem] text-white bg-black rounded-3xl relative flex flex-col">
                <div className="review w-full h-[calc(100%-3rem)]">
                  <p className="text-center px-6 pt-8">
                    &quot; {review.review} &quot;
                  </p>
                </div>
                <div className="w-full h-full bg-[#d9d9d9]"></div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionTriangle>
  );
};

export default Reviews;
