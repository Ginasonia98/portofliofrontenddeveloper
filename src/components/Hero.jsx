import React from "react";
import hero from "../assets/images/hero.png";

const Hero = () => {
  const social_media = ["logo-instagram", "logo-linkedin", "logo-github"];

  const handleSocialMediaClick = (icon) => {
    if (icon === "logo-instagram") {
      window.open(
        "https://instagram.com/chikogina_?igshid=YmMyMTA2M2Y=",
        "_blank"
      );
    } else if (icon === "logo-linkedin") {
      window.open("https://www.linkedin.com/in/ginatobing/", "_blank");
    } else if (icon === "logo-github") {
      window.open("https://github.com/Ginasonia98?tab=repositories", "_blank");
    }
  };

  return (
    <section
      id="home"
      className="flex py-10 md:flex-row flex-col items-center bg-white text-black"
    >
      <div className="flex-1 flex items-center justify-center mt-16">
        {/* Adjust image dimensions and apply a larger border-radius */}
        <img
          src={hero}
          alt=""
          className="md:w-1/2 h-12 w-12 md:h-auto object-cover rounded-full"
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-xl textlg md:leading-normal font-bold">
            <span className="text-black md:text-4xl text-2xl ">
              {/* Add margin-top for xs and sm screens */}
              <div className="mt-3 sm:mt-1 xs:mt-1">Hello!</div>
              <br />
            </span>
            <div className="mt-1 sm:mt-1 xs:mt-1">
              I'm Gina Sonia Br Tobing
            </div>
          </h1>
          <h4 className="md:text-xl text-lg md:leading-normal leading-5 mt-3 sm:mt-1 xs:mt-1 font-bold">
            {/* Adjust margin-top for xs and sm screens */}
            Frontend Developer Entry Level
          </h4>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                role="button"
                tabIndex="0"
                onClick={() => handleSocialMediaClick(icon)}
                onKeyPress={(e) =>
                  e.key === "Enter" && handleSocialMediaClick(icon)
                }
                className="text-black hover:text-black cursor-pointer"
              >
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;





