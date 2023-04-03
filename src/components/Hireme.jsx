import React from "react";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-white mt-3 text-lg">
          if You Are Interested Please Choose Me
        </p>
      </div>
      <div className="bg-rose-700 relative px-10 rounded-2xl py-2 lg:max-w-xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Do you want me to work in our company?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            I am a junior frontend developer who has quite a lot of experience
            in developing responsive applications where most of that experience
            I got while attending bootcamp. I have learned many things related
            to frontend developers even though I don't have professional
            experience.
          </p>
          <button className="btn-primary mt-10">Say Hello</button>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
