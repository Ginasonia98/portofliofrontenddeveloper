import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.png";
import project6 from "../assets/images/project-6.png";
import project7 from "../assets/images/project-7.png";
import project_person from "../assets/images/project_person1.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Bunny Film",
      github_link: "https://github.com/Ginasonia98/ginasoniatobing.github.io",
      live_link:
        "https://ginasonia98.github.io/ginasoniatobing.github.io/index.html",
    },
    {
      img: project2,
      name: "TravellinWeb",
      github_link: "https://github.com/Ginasonia98/Travellinweb.github.io",
      live_link: "https://ginasonia98.github.io/Travellinweb.github.io/",
    },
    {
      img: project3,
      name: "Chiko Movie Streaming Web",
      github_link: "https://github.com/Ginasonia98/Miniprojectchikomovie",
      live_link: "https://chikomoviestreaming.netlify.app/",
    },
    {
      img: project4,
      name: "Psalm TV",
      github_link: "https://github.com/Ginasonia98/Psalm-Tv-web-streaming",
      live_link: "https://psalm-tv-web-streaming.vercel.app/",
    },
    {
      img: project5,
      name: "Rainbow Food Journal",
      github_link: "https://github.com/Ginasonia98/RainbowfoodjournalbyGina",
      live_link: "https://rainbowfoodjournal.netlify.app/",
    },
    {
      img: project6,
      name: "Proverbs Market",
      github_link: "https://github.com/Ginasonia98/Restaurant-App",
      live_link: "https://blessingmarketapp.vercel.app/",
    },
    {
      img: project7,
      name: "DashboardSales",
      github_link: "https://github.com/Ginasonia98/pintar-ventura-dashboard",
      live_link: "https://pintar-ventura-dashboard.vercel.app/",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-white mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="cursor-pointer"
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="w-full h-fit p-4 bg-rose-700 rounded-xl">
                  <img
                    src={project_info.img}
                    alt=""
                    className="w-full h-full object-fit object-cover rounded-lg aspect-w-1 aspect-h-1"
                  />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-white bg-cyan-600 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-white bg-cyan-600 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} alt="" className="rounded-md w-49 h-49" />
        </div>
      </div>
    </section>
  );
};

export default Project;
