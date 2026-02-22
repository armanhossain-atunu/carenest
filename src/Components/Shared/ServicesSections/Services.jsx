import React from 'react';
import Link from 'next/link';
import serviceData from '../../../Data/services.json';

const Services = () => {
  const services = serviceData || [];

  if (!services.length) {
    return (
      <p className="text-center py-20 text-gray-500">
        No services available
      </p>
    );
  }

  return (
    <section className="py-5 bg-base-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-xl border shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-purple-600 text-sm mb-3">
                {service.tagline}
              </p>

              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <Link
                href={`/services/${service.id}`}
                className="group inline-flex items-center gap-1 text-purple-600 font-semibold transition hover:underline"
              >
                View Details
                <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                  →
                </span>
              </Link>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
