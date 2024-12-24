import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const BannerSlider = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        navigation
      >
        <SwiperSlide>
          <div
            className="relative bg-cover bg-center h-[500px]"
            style={{
              backgroundImage:
                "url(https://www.ngpvan.com/wp-content/uploads/2023/04/1200x628.bloghead.photo_.png)",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex justify-center items-center text-center text-white">
              <div>
                <Fade direction="down">
                  <h2 className="text-4xl font-extrabold mb-4">
                    Make a Difference
                  </h2>
                </Fade>
                <Fade direction="up">
                  <p className="text-lg mb-6">
                    Join us in making the world a better place by volunteering
                    your time and skills.
                  </p>
                </Fade>
                <Fade>
                  <Link
                    to="/posts"
                    className="btn btn-primary text-white px-6 py-3 rounded-md"
                  >
                    Get Involved
                  </Link>
                </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="relative bg-cover bg-center h-[500px]"
            style={{
              backgroundImage:
                "url(https://uploads.donorperfect.com/images/sites/3/volunteer-matrix-header-1.jpg)",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex justify-center items-center text-center text-white">
              <div>
                <Fade direction="down">
                  <h2 className="text-4xl font-extrabold mb-4">
                    Your Time, Their Future
                  </h2>
                </Fade>
                <Fade direction="up">
                  <p className="text-lg mb-6">
                    Volunteer with us and help create better opportunities for
                    communities in need.
                  </p>
                </Fade>
                <Fade>
                  <Link
                    to="/posts"
                    className="btn btn-primary text-white px-6 py-3 rounded-md"
                  >
                    Explore Opportunities
                  </Link>
                </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="relative bg-cover bg-center h-[500px]"
            style={{
              backgroundImage:
                "url(https://neoadulted.org/wp-content/uploads/2022/06/group-of-volunteer-having-fun-1024x682.jpg)",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex justify-center items-center text-center text-white">
              <div>
                <Fade direction="down">
                  <h2 className="text-4xl font-extrabold mb-4">
                    Join a Community of Change
                  </h2>
                </Fade>
                <Fade direction="up">
                  <p className="text-lg mb-6">
                    Be part of a global network of individuals working to make a
                    meaningful impact.
                  </p>
                </Fade>
                <Fade>
                  <Link
                    to="/posts"
                    className="btn btn-primary text-white px-6 py-3 rounded-md"
                  >
                    Learn More
                  </Link>
                </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
