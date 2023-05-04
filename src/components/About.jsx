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
              <p className="text-justify leading-7 ">
                I graduated from English literature but I chose a career as a
                Frontend Engineer. This happened because of my attitude which is
                always willing to learn new things. I am able to collaborate in
                a team. I have collaborated to create related designs of
                educational applications using figma, I have also solved several
                algorithm cases at a fundamental stage. After deciding to join
                the Frontend Engineering Bootcamp, I have created "TravelWeb"
                using HTML, CSS, Bootstrap 5,and JavaScript. I've also made
                "Chiko Movie Streaming Web" using ReactJs,Boostrap 5, dan
                JavaScript. I've also made "Rainbow Food Journal Web" using
                ReactJs. I've also made "Proverbs Market using ReactJs,
                ReactRedux,Tailwind CSS, and Firebase. I've also made "Dashbord
                Sales" using ReactJs,Redux, Tailwind css and Graphics. I have
                completed the Front End Developer Bootcamp organized by
                Dibimbing.id.
              </p>
              <br />
              <br />
              <a href="https://drive.google.com/file/d/1iYcqgtxMtb7OEPjHZmfyMfDJwPaTmq9w/view?usp=sharing">
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
