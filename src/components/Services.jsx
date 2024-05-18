import React from 'react';
import { Link } from 'react-router-dom'; 

const services = [
  {
    id: 1,
    name: 'Cardiology',
    description: 'Our cardiology department offers a range of services for heart-related conditions.',
    img: 'https://cdn.pixabay.com/photo/2024/01/05/22/02/ai-generated-8490210_1280.jpg',
  },
  {
    id: 2,
    name: 'Neurology',
    description: 'Our neurology department specializes in disorders of the nervous system.',
    img: 'https://cdn.pixabay.com/photo/2023/12/23/11/39/brain-8465364_960_720.png', 
  },
  {
    id: 3,
    name: 'Medicine',
    description: 'Our general medicine department provides comprehensive healthcare services.',
    img: 'https://cdn.pixabay.com/photo/2021/07/27/17/42/stethoscope-6497490_1280.jpg', 
  },
  {
    id: 4,
    name: 'ENT',
    description: 'Our ENT department specializes in the diagnosis and treatment of ear, nose, and throat conditions.',
    img: 'https://cdn.pixabay.com/photo/2019/07/30/15/57/dentist-4373290_1280.jpg',
  },
  // Add more services if needed
];

function Services() {
  return (
      <div className="container mx-auto px-4 py-8 bg-green-50">
        <h1 className="text-3xl font-bold mb-10 text-center mt-10 ">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service) => (
            <div key={service.id} className="shadow-md rounded-md overflow-hidden bg-white relative">
              <img
                src={service.img}
                alt={service.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-800">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
              <Link
                to={`/service/${service.id}`}
                className="block absolute bottom-0 left-0 right-0 px-4 py-2 text-white rounded-b-md bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>

  );
}

export default Services;
