import React from "react";

const About = () => {
  return (
    <section id="about" className="py-10 bg-white text-black relative">
      {/* Add a black border at the top */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gray-100"></div>
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold underline">
          About <span>Me</span>
        </h3>
        {/* Arrow-down animation */}
        <div className="mt-6 text-center">
          <div className="animate-bounce">
            <ion-icon name="arrow-down-circle-outline"></ion-icon>
          </div>
        </div>
        <div className="flex md:flex-row flex-col-reverse items-center px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-900 my-3">
              <p className="text-center">
                Hello! I'm Gina Sonia Br Tobing, a graduate in English
                Literature turned Frontend Developer. My journey into the world
                of web development began with a passion for learning and a
                commitment to taking on new challenges. I specialize in web
                development technologies and tools, including HTML5, CSS,
                Bootstrap, TailwindCSS, ReactJs, Javascript, and GitHub.
                Additionally, I'm well-versed in more advanced technologies such
                as Redux Saga, Firebase, Elektron, Recharts, EmailJs, React
                Context, ReactQuery, and Figma. What truly excites me about web
                development is the opportunity to craft meaningful and impactful
                digital experiences. I thrive on collaborating with teams to
                transform ideas into captivating and dynamic web applications.
              </p>
              <br />
              <br />
              <a
                href="https://drive.google.com/file/d/1ytuG23vigRA1NQBtlG5f553kZSAKm17Y/view"
                target="_blank" // Open the link in a new tab
                rel="noopener noreferrer" // Add noreferrer for security
                className="rounded-full bg-white border border-blue-500 py-2 px-4 text-blue-500 transition duration-300"
              >
                Look My CV
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center"></div>
        </div>
      </div>
    </section>
  );
};

export default About;

