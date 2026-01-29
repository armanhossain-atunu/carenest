'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Banner = () => {
  const slides = [
    {
      title: 'Trusted Baby Sitting Services',
      desc: 'Safe, caring, and trained babysitters for your little ones.',
      img: 'https://i.ibb.co.com/2YqnpX4M/hero-greatercare-large2.jpg',
    },
    {
      title: 'Professional Elderly Care',
      desc: 'Compassionate support for seniors at home.',
      img: 'https://i.ibb.co.com/nNhBYxf4/age-cymru-b-SXk1l-Op8-T0-unsplash.jpg',
    },
    {
      title: '24/7 Home Care Support',
      desc: 'Reliable care services whenever your family needs.',
      img: 'https://gwosevo.com/core/uploads/2024/06/The-Role-of-Customer-Support-in-Retention.jpg',
    },
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000 }}
      loop={true}
      pagination={{ clickable: true }}
      className="h-[80vh]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="h-full flex items-center bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            <div className="bg-black/50 w-full h-full flex items-center">
              <div className="max-w-3xl px-6 text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-6">
                  {slide.desc}
                </p>
                <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg">
                  Get Care Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
