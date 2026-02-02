import { Baby, HeartPulse, Users } from 'lucide-react';
import Link from 'next/link';

const Services = () => {
  const services = [
    {
      title: 'Baby Care',
      desc: 'Safe, loving, and attentive care for infants and children in a secure home environment.',
      icon: <Baby size={40} className="text-purple-600" />,
    },
    {
      title: 'Elderly Care',
      desc: 'Compassionate support for seniors including daily assistance, companionship, and mobility care.',
      icon: <Users size={40} className="text-purple-600" />,
    },
    {
      title: 'Sick People Care',
      desc: 'Professional care for patients recovering from illness with medical support and personal assistance.',
      icon: <HeartPulse size={40} className="text-purple-600" />,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.desc}
              </p>
              <Link   href={`/service/${service.id}`} className="btn btn-primary mt-4">View Details</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
