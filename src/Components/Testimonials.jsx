'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "John Doe",
    description: "Great service and outstanding support!",
    image: "https://i.ibb.co.com/0pnwxxqJ/aiony-haust-3-TLl-97-HNJo-unsplash.jpg"
  },
  {
    name: "Sarah Khan",
    description: "Highly professional and skilled developer.",
    image: "https://i.ibb.co.com/3PXrL9b/avatar3.jpg"
  },
  {
    name: "Daniel Martinez",
    description: "Outstanding support and fast problem solving.",
    image: "https://i.ibb.co.com/ymryPJX4/clay-elliot-mp-DV4xa-FP8c-unsplash.jpg"
  },
  {
    name: "Alex Smith",
    description: "Amazing experience working with this team.",
    image: "https://i.ibb.co.com/r267DxK6/christina-wocintechchat-com-SJv-Dxw0azqw-unsplash.jpg"
  },
  {
     name: "Olivia Wilson",
    description: "Professional, creative, and very reliable.",
    image: "https://i.ibb.co.com/207gSk61/joseph-gonzalez-i-Fg-Rcq-Hznqg-unsplash.jpg"
  }
];

const Testimonials = () => {
  return (
    <div className="w-11/12 mx-auto py-12">
      <h1 className="text-3xl font-bold mb-10 text-center">
        What Our Clients Say
      </h1>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="p-6 h-60 rounded-xl shadow-md bg-base-200 text-center">
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-full w-20 h-20 mx-auto mb-4"
              />
              <p className="text-gray-600 mb-2">
                "{item.description}"
              </p>
              <h4 className="font-semibold">{item.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;