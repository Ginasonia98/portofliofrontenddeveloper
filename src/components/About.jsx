import React from "react";
const About = () => {
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-white my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3 ">
              <p className="text-center ">
                I graduated from English literature but I chose a career as a
                Frontend Engineer. This happened because of my attitude which is
                always willing to learn new things. I am able to collaborate in
                a team. I have collaborated to create related designs of
                educational applications using figma, I have also solved several
                algorithm cases at a fundamental stage.My skill : HTML5, CSS,
                Bootstrap,TailwindCSS,Github,Redux Saga,Firebase,Elektron,
                Recharts,EmailJs,NextJs,ReactQuery,Figma,and RestApi.
              </p>
              <br />
              <br />
              <a href="https://drive.google.com/file/d/1J57EjUNkq9IeksSv8TORePkarTVPBM0Y/view">
                <button className="btn-primary">See My Curriculum Vitae</button>
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
