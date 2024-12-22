import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

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
          <div className="relative bg-cover bg-center h-[400px]" style={{ backgroundImage: 'url(https://via.placeholder.com/1200x400)' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex justify-center items-center text-center text-white">
              <div>
                <h2 className="text-4xl font-extrabold mb-4">Make a Difference</h2>
                <p className="text-lg mb-6">
                  Join us in making the world a better place by volunteering your time and skills.
                </p>
                <a href="/posts" className="btn btn-primary text-white px-6 py-3 rounded-md">
                  Get Involved
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative bg-cover bg-center h-[400px]" style={{ backgroundImage: 'url(https://via.placeholder.com/1200x400)' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex justify-center items-center text-center text-white">
              <div>
                <h2 className="text-4xl font-extrabold mb-4">Your Time, Their Future</h2>
                <p className="text-lg mb-6">
                  Volunteer with us and help create better opportunities for communities in need.
                </p>
                <a href="/posts" className="btn btn-primary text-white px-6 py-3 rounded-md">
                  Explore Opportunities
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative bg-cover bg-center h-[400px]" style={{ backgroundImage: 'url(https://via.placeholder.com/1200x400)' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex justify-center items-center text-center text-white">
              <div>
                <h2 className="text-4xl font-extrabold mb-4">Join a Community of Change</h2>
                <p className="text-lg mb-6">
                  Be part of a global network of individuals working to make a meaningful impact.
                </p>
                <a href="/posts" className="btn btn-primary text-white px-6 py-3 rounded-md">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
