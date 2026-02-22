'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
    return (
        <div className="w-11/12 mx-auto py-12 pb-10">
            <h1 className="text-3xl font-bold mb-10 text-center">
                What Our Clients Say
            </h1>

            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}

            >
                <SwiperSlide>
                    <div className="p-6 h-50 rounded-xl shadow-md bg-base-200 text-center">
                        <Image
                            src="https://i.ibb.co.com/0pnwxxqJ/aiony-haust-3-TLl-97-HNJo-unsplash.jpg"
                            alt="John Doe"
                            width={64}
                            height={64}
                            className="rounded-full w-20 h-20 mx-auto mb-4"
                        />
                        <p className="text-gray-600 mb-2">
                            "Great service and outstanding support!"
                        </p>
                        <h4 className="font-semibold">John Doe</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-6 h-50  rounded-xl shadow-md bg-base-200 text-center">
                        <Image
                            src="https://i.ibb.co.com/DgWHz5nS/christopher-campbell-r-DEOVt-E7v-Os-unsplash.jpg"
                            alt="John Doe"
                            width={64}
                            height={64}
                            className="rounded-full mx-auto mb-4"
                        />
                        <p className="text-gray-600 mb-2">
                            "Great service and outstanding support!"
                        </p>
                        <h4 className="font-semibold">John Doe</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-6 h-50  rounded-xl shadow-md bg-base-200 text-center">
                        <Image
                            src="https://i.ibb.co.com/5h2LJMTb/alex-suprun-ZHv-M3-XIOHo-E-unsplash.jpg"
                            alt="John Doe"
                            width={64}
                            height={64}
                            className="rounded-full mx-auto mb-4"
                        />
                        <p className="text-gray-600 mb-2">
                            "Great service and outstanding support!"
                        </p>
                        <h4 className="font-semibold">John Doe</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-6 h-50  rounded-xl shadow-md bg-base-200 text-center">
                        <Image
                            src="https://i.ibb.co.com/5h2LJMTb/alex-suprun-ZHv-M3-XIOHo-E-unsplash.jpg"
                            alt="John Doe"
                            width={64}
                            height={64}
                            className="rounded-full mx-auto mb-4"
                        />
                        <p className="text-gray-600 mb-2">
                            "Great service and outstanding support!"
                        </p>
                        <h4 className="font-semibold">John Doe</h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="p-6 h-50  rounded-xl shadow-md bg-base-200 text-center">
                        <Image
                            src="https://i.ibb.co.com/3PXrL9b/avatar3.jpg"
                            alt="Sarah Khan"
                            width={64}
                            height={64}
                            className="rounded-full  mx-auto mb-4"
                        />
                        <p className="text-gray-600 mb-2">
                            "Highly professional and skilled developer."
                        </p>
                        <h4 className="font-semibold">Sarah Khan</h4>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonials;