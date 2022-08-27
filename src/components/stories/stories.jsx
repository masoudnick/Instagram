import { Navigation } from "swiper";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { LargeSpinnerLoading } from "../index";
import { Loadingskeleton } from "./loadingSkeleton";
import User from "./user";
import { getUsersStoryAPI } from "../../API";

import "swiper/scss";
import "swiper/scss/navigation";
import "./style.scss";

const Stories = ({ isLoading, setIsLoading }) => {
  const [stories, setStories] = useState([]);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const getStories = () => {
    getUsersStoryAPI()
      .then((res) => {
        setStories(res.data);
      })
      .catch((error) => {
        setStories([]);
      });
  };

  useEffect(() => {
    getStories();
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      <LargeSpinnerLoading
        width={32}
        height={32}
        isLoading={isLoading}
        styles={{ height: "58px", paddingTop: "14px" }}
      />
      <nav className="stories flex bg-white border border-slate-300 rounded-lg py-4 my-4 pl-4">
        {stories.length !== 0 ? (
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={6}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="px-3"
          >
            {stories.map((story) => (
              <SwiperSlide key={story.id}>
                <User
                  username={story.username}
                  fullName={story.full_name}
                  seen={story.seen}
                />
              </SwiperSlide>
            ))}

            <button
              className="swiper-button-next insta-glyfs"
              ref={navigationNextRef}
            ></button>
            <button
              className="swiper-button-prev insta-glyfs"
              ref={navigationPrevRef}
            ></button>
          </Swiper>
        ) : (
          <Loadingskeleton />
        )}
      </nav>
    </>
  );
};

export default Stories;
