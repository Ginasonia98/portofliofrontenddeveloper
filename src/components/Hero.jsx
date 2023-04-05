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
  /**
   *Fungsi dari kode tersebut adalah membuat sebuah fungsi bernama handleSocialMediaClick yang akan dijalankan ketika user melakukan klik pada icon media sosial pada halaman web. Ketika user melakukan klik pada icon media sosial, maka akan membuka jendela baru pada tab browser yang menampilkan halaman profil media sosial  
   * */ 

  return (
    <section id="home" className="flex py-10 md:flex-row flex-col items-center">
      <div className="flex-1 flex items-center justify-center min-h-screen">
        <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Gina Sonia</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-white">
            Junior Frontend Developer
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
                className="text-white hover:text-white cursor-pointer "
              >
                <ion-icon name={icon}></ion-icon>
              </div>
              /**
               *Kode tersebut membuat tiga ikon sosial media (Instagram, LinkedIn, dan GitHub) dan menambahkan properti seperti kunci "key" untuk memastikan React dapat membedakan satu elemen dari yang lain, properti "role" dan "tabIndex" untuk menjadikannya dapat diakses menggunakan keyboard, dan event listener "onClick" dan "onKeyPress" yang akan memicu fungsi "handleSocialMediaClick" ketika tombol ikon sosial media diklik atau ditekan pada keyboard. Fungsi "handleSocialMediaClick" akan membuka tautan URL sosial media yang sesuai dengan ikon yang diklik menggunakan method "window.open".
               */
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
