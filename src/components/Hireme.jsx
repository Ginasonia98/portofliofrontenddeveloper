import React from "react";

const Hireme = () => {
  return (
    <section id="hireme" className="py-10 bg-white text-gray-900 relative">
      <div className="absolute top-0 left-0 right-0 h-2 bg-gray-100"></div>
      <div className="mt-8 text-center">
        <h3 className="text-4xl font-semibold underline">
          Hire <span>Me</span>
        </h3>
        {/* Arrow-down animation */}
        <div className="mt-6 text-center">
          <div className="animate-bounce">
            <ion-icon name="arrow-down-circle-outline"></ion-icon>
          </div>
        </div>
      </div>
      <div className="bg-white text-gray-900 border border-blue-500 relative px-10 rounded-2xl py-2 lg:max-w-xl mx-auto min-h-[24rem] mt-10 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Do you want me to work in your company?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 leading-6">
            If you're in search of a dedicated and imaginative Junior Frontend
            Developer who is eager to learn and grow, I'd be thrilled to connect
            with you. Please feel free to explore my portfolio, and let's
            explore the possibilities of working together!
          </p>
          <div className="mt-5 mb-5">
            <a
              href="https://api.whatsapp.com/send/?phone=6281398498112&text&type=phone_number&app_absent=0"
              target="_blank" // Open the link in a new tab
              rel="noopener noreferrer" // Add noreferrer for security
              className="rounded-full bg-white border border-blue-500 py-2 px-4 text-blue-500 transition duration-300"
            >
              Call Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
