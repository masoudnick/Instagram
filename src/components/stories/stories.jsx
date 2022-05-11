import { Navigation } from "swiper";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import User from "./user";
import { getUsersStoryAPI } from "../../API";

import "swiper/scss";
import "swiper/scss/navigation";
import "./style.scss";

const Stories = () => {
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
  }, []);

  return (
    <nav className="stories bg-white border border-slate-300 rounded py-4 mb-6">
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={7}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
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
    </nav>
  );
};

export default Stories;
