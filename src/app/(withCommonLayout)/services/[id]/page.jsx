import React from 'react';
import servicesData from '../../../../data/services.json';
import Booking from '@/Components/Shared/ServicesSections/Booking';



const servicesDetailsPage = async ({ params }) => {
    const { id } = await params;
    const service = servicesData.find(s => s.id === id);
    return (
        <div className='max-w-7xl mx-auto py-16 px-6 flex flex-col md:flex-row gap-10'>
            <div>
                <img src={service?.image} alt={service?.title} className='w-full h-96 object-cover rounded-lg mb-8' />
            </div>
            <div>
                <h1 className='text-3xl font-bold mb-3'>{service?.title || 'Service Not Found'}</h1>
                <p className='text-gray-600 mb-2'>{service?.tagline}</p>
                <p className='text-gray-800'>{service?.description}</p>
                <div>
                    <h2 className='text-2xl font-semibold mt-3 mb-2'>Key Features:</h2>
                    <ul className='list-disc list-inside text-gray-700'>
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