'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { Star, Users, HeartHandshake, ShieldCheck, Award } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';

const metrics = [
  { icon: <Users className="w-8 h-8 text-teal-500" />, value: "15,000+", label: "Families Served" },
  { icon: <HeartHandshake className="w-8 h-8 text-blue-500" />, value: "1,200+", label: "Verified Caregivers" },
  { icon: <ShieldCheck className="w-8 h-8 text-rose-500" />, value: "500,000+", label: "Hours of Care" },
  { icon: <Award className="w-8 h-8 text-purple-500" />, value: "99.8%", label: "Satisfaction Rate" }
];

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Working Mother",
    description: "CareNest has been a lifesaver. The babysitter we matched with is incredibly patient and our daughter absolutely loves her. It gives me such peace of mind while I'm at work.",
    image: "https://i.ibb.co.com/0pnwxxqJ/aiony-haust-3-TLl-97-HNJo-unsplash.jpg",
    rating: 5
  },
  {
    name: "David Martinez",
    role: "Son of a Patient",
    description: "Finding reliable care for my aging father was stressful until we found this platform. His caregiver is compassionate, punctual, and highly skilled. Highly recommended!",
    image: "https://i.ibb.co.com/ymryPJX4/clay-elliot-mp-DV4xa-FP8c-unsplash.jpg",
    rating: 5
  },
  {
    name: "Emily Chen",
    role: "First-time Mom",
    description: "The background checks and verification process gave us the confidence we needed to hire a nanny. The support team is also very responsive and helpful.",
    image: "https://i.ibb.co.com/r267DxK6/christina-wocintechchat-com-SJv-Dxw0azqw-unsplash.jpg",
    rating: 5
  },
  {
    name: "Michael Wilson",
    role: "Family Member",
    description: "Exceptional service! We needed short-term post-surgery care for my mother, and the nurse provided by CareNest exceeded all our expectations.",
    image: "https://i.ibb.co.com/207gSk61/joseph-gonzalez-i-Fg-Rcq-Hznqg-unsplash.jpg",
    rating: 5
  },
  {
    name: "Amanda Patel",
    role: "Parent of Toddlers",
    description: "We use CareNest for weekend sitting and occasionally overnight. The caregivers are always professional, come with fun activities, and are fully certified.",
    image: "https://i.ibb.co.com/3PXrL9b/avatar3.jpg",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-black relative overflow-hidden" id="success-testimonials">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-100/40 dark:bg-teal-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Success Metrics Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase mb-3">Our Impact</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Trusted by Thousands</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
            {metrics.map((metric, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl shadow-teal-500/5 border border-teal-50 dark:border-gray-800 text-center transform transition duration-300 hover:-translate-y-2">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-teal-50 dark:bg-gray-800 rounded-full">
                    {metric.icon}
                  </div>
                </div>
                <h4 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">{metric.value}</h4>
                <p className="text-gray-500 dark:text-gray-400 font-medium">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="mt-16 bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl shadow-blue-500/5 border border-blue-50 dark:border-gray-800">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-3">Client Stories</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">What Families Say About Us</h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Real experiences from families who have found peace of mind and excellent care through our platform.</p>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="h-full flex flex-col p-8 rounded-2xl bg-zinc-50 dark:bg-gray-800 border border-zinc-100 dark:border-gray-700 transition hover:shadow-lg">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < item.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`} />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-8 flex-grow leading-relaxed italic">
                    "{item.description}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-teal-100 dark:border-teal-900">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{item.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;