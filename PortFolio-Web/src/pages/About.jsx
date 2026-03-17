import React from "react";
import AboutBoy from "../assets/aboutBoy.png";

const About = ({ DarkMode }) => {
  return (
    <section
      id="about"
      className={`min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6  `}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center ">
        <figure
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-wrap justify-center gap-4 relative order-2 lg:order-1 "
        >
          <div className=" md:mt-55 relative w-95 h-95 lg:w-96 lg:h-96 ">
            <div
              className="star absolute rotate-12 -inset-4 lg:-inset-20 bg-linear-to-l from-[#f97316] via-[#fb923c] to-[#f59e0b] z-0 w-195 "
              data-aos="zoom-in"
              data-aos-delay="600"
            ></div>
            <img
              src={AboutBoy}
              alt={"boy"}
              className=" absolute top-0 md:-top-25 md:-left-15  left-5 w-3/4 h-3/4 object-cover z-10 transition-all duration-300 "
              data-aos="zoom-in"
              data-aos-delay="400"
            />
          </div>
        </figure>
        <article
          data-aos="fade-left"
          data-aos-delay="300"
          className="text-center lg:text-left relative order-1 lg:order-2 "
        >
          <header>
            <h1
              className=" text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:m-6 text-transparent bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text "
              data-aos="fade-up"
              data-aos-delay="400"
            >
              about me
            </h1>
          </header>
          <p
            className={` text-lg sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 leading-relaxed bg-linear-to-r from-orange-900/10 to-orange-900/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop:blur-sm ${DarkMode ? "text-gray-300" : "text-gray-700"} `}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam nisi
            in esse ab accusamus animi aperiam natus voluptas quas incidunt,
            sapiente maxime sunt, sint unde iusto aliquam accusantium repellat
            itaque!
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 ">
            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div
                className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400 `}
              >
                03+
              </div>
              <div
                className={` text-xl sm:text-sm capitalize lg:text-base ${DarkMode ? "text-gray-300" : "text-gray-600"} `}
              >
                Education
              </div>
            </div>

            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div
                className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400 `}
              >
                01+
              </div>
              <div
                className={` text-xl sm:text-sm capitalize lg:text-base ${DarkMode ? "text-gray-300" : "text-gray-600"} `}
              >
                years experience
              </div>
            </div>

            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div
                className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400 `}
              >
                25+
              </div>
              <div
                className={` text-xl sm:text-sm capitalize lg:text-base ${DarkMode ? "text-gray-300" : "text-gray-600"} `}
              >
                projects
              </div>
            </div>
          </div>

          <button
            className={`w-full sm:w-auto inline-flex border-2 items-center ${DarkMode ? "text-gray-50 bg-orange-500/10 " : "text-gray-700 bg-white/90"} justify-center border-orange-500 py-4 px-4 sm:px-6 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-xl font-semibold transition-all cursor-pointer duration-300 transform capitalize `}
            data-aos="fade-up"
            data-aos-delay="800"
          >
            learn more
          </button>
        </article>
      </div>
    </section>
  );
};

export default About;
