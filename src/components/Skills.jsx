import React from "react";

const Skills = () => {
  const skills = [
    {
      logo: "logo-html5",
      level: "Advance",
      count: 100,
    },
    {
      logo: "logo-css3",
      level: "Expect",
      count: 100,
    },
    {
      logo: "logo-javascript",
      level: "Intermediate",
      count: 85,
    },
    {
      logo: "logo-react",
      level: "Intermediate",
      count: 85,
    },
  ];
  return (
    <section id="skills" className="py-10 bg-white text-gray-900 relative">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gray-100"></div>
      <div className="mt-8 text-center">
        <h3 className="text-4xl font-semibold underline">
          My <span >Skills</span>
        </h3>
        <div className="mt-6 text-center">
          <div className="animate-bounce">
            <ion-icon name="arrow-down-circle-outline"></ion-icon>
          </div>
        </div>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-blue-200 relative min-w-[10rem] max-w-[16rem] bg-white p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-white rounded-full flex items-center justify-center ">
                  <ion-icon name={skill.logo}></ion-icon>
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

