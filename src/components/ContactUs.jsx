import React from 'react'


const Content = () => {
    return (
      <div className="text-center px-8 py-12">
        <h2 className="text-3xl font-semibold text-gray-800">Contact us</h2>


        <section className="bg-green-50">
          <div className="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8">
          {/*<h2 className="text-4xl font-bold text-center mb-12">Get in touch</h2>*/}
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
              <div className="lg:col-span-2 lg:py-12 px-4 py-5">
              <h2 className="text-4xl font-semibold text-center mb-12">Have any query?</h2>
                <p className="max-w-xl text-lg font-semibold">
                  If you have any query or suggestions, plaese feel free to contact us.
                </p>

                <div className="mt-8">
                  <a href="#" className="text-2xl font-bold text-pink-600"> +1 234 567 89 </a>

                  <address className="mt-2 not-italic">123 Tech Street, Ontario, Canada</address>
                </div>
              </div>

              <div className="rounded-lg bg-white-300 p-8 shadow-lg lg:col-span-3 lg:p-12 bg-blue-300">
                <h2 className="text-4xl font-bold text-center mb-12">Get in touch</h2>
                <form action="#" className="space-y-4">
                  <div>
                    <label className="sr-only" htmlFor="name">Name</label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Name"
                      type="text"
                      id="name"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="sr-only" htmlFor="email">Email</label>
                      <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Email address"
                        type="email"
                        id="email"
                      />
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="phone">Phone</label>
                      <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Phone Number"
                        type="tel"
                        id="phone"
                      />
                    </div>
                  </div>


                  <div>
                    <label className="sr-only" htmlFor="message">Message</label>

                    <textarea
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Message"
                      rows="8"
                      id="message"
                    ></textarea>
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                    >
                      Send Enquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>



    </div>
    );
  };

  


const ContactUs = () => {
    return(
        <div className="bg-green-50 min-h-screen">
        <Content/>
        </div>
    )

};

export default ContactUs;
