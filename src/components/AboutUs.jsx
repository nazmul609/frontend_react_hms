import React from 'react'
import { Link } from 'react-router-dom';



const Body = () => {
    return (
        <div className="clinic-about-us mx-auto">

          <section className="bg-indigo-100">
            <div className="mx-auto  px-4 py-4 lg:flex lg:h-screen lg:items-center">
              <div className="mx-auto max-w-xl text-center">
                <h1 className="text-3xl font-extrabold sm:text-5xl">
                  
                  <strong className="font-extrabold text-red-700 sm:block">Welcome to Our Clinic</strong>
                </h1>

                <p className="mt-4 sm:text-xl/relaxed">
                We are a modern clinic dedicated to providing top-notch healthcare services.
                 Our team of experienced medical professionals is committed to delivering high-quality care in a compassionate and friendly environment.
                </p>

              </div>
            </div>
          </section>

          

          {/* Our Mission */}
          <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                <div className="relative z-10 lg:py-16">
                  <div className="relative h-64 sm:h-80 lg:h-full">
                    <img
                      alt=""
                      src="https://cdn.pixabay.com/photo/2024/03/02/06/58/ai-generated-8607702_960_720.jpg"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="relative flex items-center bg-indigo-200">
                  <span
                    className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-indigo-100"
                  ></span>

                  <div className="p-8 sm:p-16 lg:p-24">
                    <h2 className="text-2xl font-bold sm:text-3xl">
                      Our Mission
                    </h2>

                    <p className="mt-4 text-gray-600 font-semibold">
                    Our mission is to improve the health and well-being of our patients by 
                    providing comprehensive medical services. We strive to maintain the 
                    highest standards of patient care and promote a culture of trust, 
                    respect, and integrity.
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </section>


            
            {/*Meet the team */}
            <section
            className="container mx-auto mt-20 px-10 py-12 bg-indigo-200"
            >
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border rounded-lg shadow-sm text-center bg-white bg-opacity-70">
                <h3 className="text-xl font-semibold">Dr. Alice Smith - Chief Medical Officer</h3>
                <p className="text-gray-600 mt-4">Dr. Smith has over 15 years of experience in family medicine. She leads our team with a focus on patient-centered care.</p>
              </div>

              <div className="p-6 border rounded-lg shadow-sm text-center bg-white bg-opacity-70">
                <h3 className="text-xl font-semibold">Dr. Robert Johnson - Pediatrician</h3>
                <p className="text-gray-600 mt-4">Dr. Johnson specializes in pediatric care and is known for his gentle approach with children.</p>
              </div>

              <div className="p-6 border rounded-lg shadow-sm text-center bg-white bg-opacity-70">
                <h3 className="text-xl font-semibold">Dr. Mary Brown - Cardiologist</h3>
                <p className="text-gray-600 mt-4">Dr. Brown has over 8 years of experience in cardiology. She leads our team with a focus on patient-centered care.</p>
              </div>

            </div>
          </section>
          

          {/* Contact Section */}
          <section className="border-t py-10 bg-gray-200 mt-10">
            <div className="container mx-auto flex justify-between items-center px-20">
              <p className="text-lg text-gray-800">Have Questions? Contact us for more information.</p>
              <Link to="/contact-us" className="px-6 py-3 border-2 border-blue-500 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white">Contact Us</Link>
            </div>
          </section>

        </div>

    );
  };

const AboutUs = () => {
  return (
    <div className="about-us bg-green-50">
      <Body/>
    </div>
  );
};

export default AboutUs;