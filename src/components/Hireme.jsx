import React from "react";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-white mt-3 text-lg">
          if You Are Interested Please Contact Me
        </p>
      </div>
      <div className="bg-rose-700 relative px-10 rounded-2xl py-2 lg:max-w-xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Do you want me to work in your company?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            As a Frontend Developer, I offer a compelling set of skills and
            qualities that make me a valuable asset to any team:I possess a
            strong command of HTML, CSS, and JavaScript, along with expertise in
            frontend frameworks like ReactJS and Next.js. This allows me to
            create visually appealing and interactive user interfaces.I have a
            keen eye for detail, ensuring that every element on the page is
            visually appealing and well-aligned. I strive for pixel-perfect
            designs and write clean and organized code. I understand the
            importance of responsive web design and create websites and
            applications that are mobile-friendly and adapt seamlessly across
            devices and screen sizes. I have a knack for problem-solving and
            enjoy finding innovative solutions to complex challenges. I am adept
            at troubleshooting issues, debugging code, and implementing
            effective solutions. I excel in collaborative environments,
            effectively communicating and collaborating with designers, backend
            developers, and stakeholders. I actively contribute to discussions
            and adapt to changes to deliver high-quality frontend solutions.I
            have a growth mindset and a passion for learning. I stay updated
            with the latest trends and technologies in frontend development,
            constantly expanding my skill set and adapting to emerging
            technologies.
          </p>
          <button className="btn-primary mt-10">Say Hello</button>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
