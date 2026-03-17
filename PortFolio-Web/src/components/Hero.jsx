import InstagramPic from "../assets/instagram.jpg";
import YoutubePic from "../assets/youtube.png";
import WhatsappPic from "../assets/whatsapp.png";
import GmailPic from "../assets/gmail.png";
import "aos/dist/aos.css";
import { Download, Mail } from "lucide-react";
import CV from "../assets/My Resume.pdf";
import hero from "../assets/socailMediaBoy.png";
import HI from "../assets/HI.png";

const Hero = ({ DarkMode }) => {
  const socailIcons = [
    { icon: InstagramPic, alt: "instragram" },
    { icon: YoutubePic, alt: "youtube" },
    { icon: WhatsappPic, alt: "whatsapp" },
    { icon: GmailPic, alt: "gmail" },
  ];

  const darkTheme = {
    textPrimary: "text-white",
    textSecondry: "text-gray-300",
    buttonSecondry: "text-white border-2 border-orange-500 hover:bg-orange-600",
    decoravtiveCircle: "bg-orange-500 opacity-10",
  };

  const lightTheme = {
    textPrimary: "text-gray-900",
    textSecondry: "text-gray-700",
    buttonSecondry:
      "text-gray-800 border-2 border-orange-500 hover:bg-orange-500 hover:text-white",
    decoravtiveCircle: "bg-orange-400 opacity-20",
  };

  const theme = DarkMode ? darkTheme : lightTheme;

  return (
    <div className=" relative overflow-hidden min-h-screen flex flex-col ">
      <section
        id="home"
        data-aos="fade-up"
        data-aos-delay="250"
        className="body-font z-10"
      >
        <div className="container mx-auto w-fit flex px-4 sm:px-8 lg:px-14 py-12 lg:py-32 flex-col lg:flex-row items-center justify-between lg:mt-0 mt-14  ">
          <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center  lg:text-left mb-12 lg:mb-0 ">
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full ">
              {socailIcons.map((socail, idx) => (
                <a
                  href={`#`}
                  key={idx}
                  target="_blank"
                  data-aos-delay={`${400 + idx * 100}`}
                  className="transform  hover:scale-110 transition-transform duration-300 "
                >
                  <img
                    src={socail.icon}
                    alt={socail.alt}
                    className={`w-18 h-18 sm:w-20 sm:h-25 object-contain ${DarkMode ? "" : "filter brightness-95 "} `}
                  />
                </a>
              ))}
            </div>
            <h1
              className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${theme.textPrimary} `}
              data-aos="fade-up"
              data-aos-delay="800"
            >
              HI,I'm Rais
            </h1>
            <p
              className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg text-xl
                  ${theme.textSecondry} `}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
              praesentium exercitationem voluptate cupiditate. Cumque quia ea
              mollitia quisquam, hic cupiditate atque ipsa molestias minus amet
              id, a voluptas delectus maiores.
            </p>
            <div className="w-full pt-4 sm:pt-6 ">
              <div
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 "
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <a href={CV} download className="w-full sm:w-auto ">
                  <button className="w-full sm:w-atuo inline-flex items-center justify-center text-white bg-linear-to-r from-orange-500 to-amber-500 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform cursor-pointer ">
                    <Download className="w-6 h-6 sm:h-5 sm:w-5 mr- " />
                    <h1 className="ml-4 text-xl capitalize">download</h1>
                  </button>
                </a>
                <a href="#contact" className="w-full sm:w-auto  ">
                  <button
                    className={`w-full sm:w-auto inline-flex items-center ${theme.buttonSecondry} justify-center  border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all cursor-pointer duration-300 transform `}
                  >
                    <Mail className="w-6 h-6 sm:w-7 sm:h-7 mr-2" />
                    <h1 className="ml-4 text-xl capitalize ">contact me</h1>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            className="lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 lg:mt-0 flex justify-center "
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="relative w-4/5 sm:w-3/4 lg:w-full  ">
              <div className="relative overflow-hidden ">
                <img
                  src={hero}
                  alt="hero image"
                  className="w-full h-auto object-cover "
                />
              </div>
              <img
                src={HI}
                alt="hi"
                className={`absolute  
                top-2 sm:top-4 right-0 sm:left-20 w-24 sm:w-20 animate-bounce opacity-90 z-10
                ${DarkMode ? "bg-gray-200" : "bg-black"} rounded-full
                `}
              />
            </div>
          </div>
          <div
            className={`absolute top-20 md:top-0 left-0 w-40 h-40 sm:w-40 ${theme.decoravtiveCircle} rounded-full  filter blur-3xl opacity-10 animate-pulse delay-1000 hidden sm:block `}
          ></div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
