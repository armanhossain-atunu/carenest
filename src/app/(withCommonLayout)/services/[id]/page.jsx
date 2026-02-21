import React from 'react';
import servicesData from '../../../../data/services.json';
import Booking from '@/Components/Shared/ServicesSections/Booking';
import Image from 'next/image';




const servicesDetailsPage = async ({ params }) => {
    const { id } = await params;
    const service = servicesData.find(s => s.id === id);
    return (
        <div className='max-w-7xl mx-auto py-16 px-6 flex  flex-col md:flex-row gap-10'>
            <div className="md:w-1/2">
                {/* <Image width={500} height={500} src={service.image} alt={service.title}></Image> */}
                {/* <img src={service.image} alt={service.title} className='w-full h-96 ' /> */}
                
        <Image
          src={service.image}
          alt={service.title}
          width={800}
          height={500}
          priority
          className="w-full h-96 object-cover rounded-lg"
        />

            </div>
            <div className='md:w-1/2'>

                <h1 className='text-3xl font-bold mb-3'>{service?.title || 'Service Not Found'}</h1>
                <p className='text-base-600 mb-2'>{service?.tagline}</p>
                <p className='text-base-800'>{service?.description}</p>
                <div>
                    <h2 className='text-2xl font-semibold mt-3 mb-2'>Key Features:</h2>
                    <ul className='list-disc list-inside text-base-700'>
                        {service?.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                    <p className='text-lg font-semibold mt-2'>Pricing: {service?.pricing}</p>
                </div>
                <Booking></Booking>
            </div>
        </div>
    );
};

export default servicesDetailsPage;