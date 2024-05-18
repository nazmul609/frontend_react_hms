import React from 'react';

function LandingPage() {
  return (
    <div className="w-full min-h-screen bg-green-50">
      
        {/*Banner Section*/}
      <section
        className="relative bg-[url(https://cdn.pixabay.com/photo/2024/05/04/12/34/hospital-8738997_960_720.png)] bg-cover bg-center bg-no-repeat"
      >
        <div
          className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
          className="relative mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold text-blue-300 sm:text-5xl">
              Innovative Solutions for

              <strong className="block font-extrabold text-white"> Better Health </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-yellow-50">
                  Schedule your appointments seamlessly with our user-friendly platform. Take control of your health today.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="/services"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Services We Offer
              </a>

              <a
                href="/about-us"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

        {/* Services Overview */}
      <section
        className="container mx-auto mt-20 px-10 py-12 bg-indigo-200" // Soft background color
        >
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow-sm text-center bg-white bg-opacity-70">
            <h3 className="text-xl font-semibold">Cardiology</h3>
            <p className="text-gray-600">Heart-related healthcare services.</p>
          </div>

          <div className="p-6 border rounded-lg shadow-sm text-center bg-white bg-opacity-70">
            <h3 className="text-xl font-semibold">Neurology</h3>
            <p className="text-gray-600">Nervous system care and treatment.</p>
          </div>

          <div className="p-6 border rounded-lg shadow-sm text-center bg-white bg-opacity-70">
            <h3 className="text-xl font-semibold">General Medicine</h3>
            <p className="text-gray-600">Comprehensive medical services.</p>
          </div>

          <div className="p-6 border rounded-lg shadow-sm text-center bg-white bg-opacity-70">
            <h3 className="text-xl font-semibold">ENT</h3>
            <p className="text-gray-600">Diagnosis and treatment of ear, nose, and throat conditions.</p>
          </div>
        </div>
      </section>

        {/* Patient Testimonials */}
      <section className="container mx-auto mt-20 px-20 py-10">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Patients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-sm text-center">
              <p className="text-gray-600 font-semibold">"Excellent care! The doctors and staff were so kind and professional."</p>
              <p className="text-sm font-semibold mt-4">- John Doe</p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm text-center">
              <p className="text-gray-600 font-semibold">"I had a great experience with the cardiology department."</p>
              <p className="text-sm font-semibold mt-4">- Jane Smith</p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm text-center">
              <p className="text-gray-600 font-semibold">"Highly recommend this clinic for all healthcare needs."</p>
              <p class="text-sm font-semibold mt-4">- Mary Johnson</p>
            </div>
          </div>
      </section>


        {/* Blog posts */}
      <section className="container mx-auto mt-20 px-20 py-10 bg-slate-200">
          <h2 className="text-4xl font-bold text-center mb-12">Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First blog post */}
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="https://cdn.pixabay.com/photo/2024/01/02/04/04/ai-generated-8482498_960_720.png"
                className="h-56 w-full object-cover"
              />

              <div className="bg-white p-4 sm:p-6">
                <time dateTime="2024-04-26" className="block text-xs text-gray-500">
                  April 26, 2024
                </time>

                <a href="https://www.health.harvard.edu/blog/how-and-why-to-fit-more-fiber-and-fermented-food-into-your-meals-202404263036" target="_blank" rel="noopener noreferrer">
                  <h3 className="mt-0.5 text-lg font-semibold text-gray-900">
                    How — and why — to fit more fiber and fermented food into your meals
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Fiber and fermented foods aid the gut microbiome, contributing to better health and mood.
                </p>
              </div>
            </article>

            {/* Second blog post */}
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="https://cdn.pixabay.com/photo/2024/04/24/08/23/ai-generated-8716971_960_720.jpg"
                className="h-56 w-full object-cover"
              />

              <div className="bg-white p-4 sm:p-6">
                <time dateTime="2024-04-26" className="block text-xs text-gray-500">
                  April 26, 2024
                </time>

                <a href="https://www.health.harvard.edu/blog/why-play-early-games-build-bonds-and-brain-202302022884" target="_blank" rel="noopener noreferrer">
                  <h3 className="mt-0.5 text-lg font-semibold text-gray-900">
                    Why play? Early games build bonds and brain
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Playing responsive games with infants and toddlers encourages healthy development.
                </p>
              </div>
            </article>
          </div>
      </section>
    </div>

  
  );
}

export default LandingPage;

 
