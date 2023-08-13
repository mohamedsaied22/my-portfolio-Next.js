// data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: "EgyBot",
          path: "/egybot.png",
          description: "EgyBot: Revolutionizing Digital Creativity with AI. Generate engaging conversations, stunning visuals, and captivating videos effortlessly. Unleash your creative potential and explore limitless possibilities with EgyBot.",
          link: "https://egy-bot.vercel.app/",
          sourceCode: "https://github.com/mohamedsaied22/EgyBot",
        },
        {
          title: "Chat-GPT Resume builder",
          path: "/resume-builder.png",
          description: "Our Chat-GPT Resume builder project is a cutting-edge solution built using Chat-GPT, JavaScript, HTML5, and CSS3. This innovative platform uses natural language processing to guide users through the process of creating a compelling resume,",
          note: "Note: For your safety, you may use a fake email or account to test our platform. With Chat-GPT Resume builder, create a compelling resume with ease and confidence.",
          link: "https://mohamedsaied22.github.io/Login-page/",
          sourceCode: "https://github.com/mohamedsaied22/Login-page",
        },
        {
          title: "Landing page",
          path: "/landing-page-js.png",
          description: "Our Landing page project is a user-friendly solution built using JavaScript, HTML5, and CSS3. With local storage integration, users can easily customize their interface. This sleek and modern platform provides a seamless user experience, making it easy to showcase products, services, and more.",
          link: "https://mohamedsaied22.github.io/Simple-Landing-page/",
          sourceCode: "https://github.com/mohamedsaied22/Simple-Landing-page",
        },
        {
          title: "ERP-System",
          path: "/erp.png",
          description: "Our ERP system project is a comprehensive solution built entirely with HTML and pure CSS without any frameworks. It provides a user-friendly interface for managing business processes such as cutomers, employees, services, and projects, streamlining operations and increasing efficiency.",
          link: "https://mohamedsaied22.github.io/MoHappy-ERP/",
          sourceCode: "https://github.com/mohamedsaied22/MoHappy-ERP",
        },
      ],
    },
    {
      images: [
        {
          title: "ESCAPADE ",
          path: "/escapade.png",
          description: "ESCAPADE is a dynamic and engaging web app built using React.js, ReactDOM, JavaScript / ECMA 6, and JSON. With PWA support and Aos Animation integration, users can enjoy a seamless and immersive experience. This platform also utilizes SASS/SCSS for easy styling and customizability, making it the perfect solution for exploring new destinations.",
          link: "https://www.linkedin.com/feed/update/urn:li:activity:7070769130487889920/",
          sourceCode: "https://github.com/mohamedsaied22/escapade",
        },
        {
          title: "Weather App project",
          path: "/weather-app.png",
          description: "Our Weather App project is a dynamic and responsive solution built using OpenWeatherMap API, JavaScript, HTML5, and CSS3. With real-time weather data and location-based information, users can stay up-to-date on current weather conditions. This user-friendly platform provides a seamless user experience, making it easy to plan activities and stay informed.",
          link: "https://mohamedsaied22.github.io/Weather-App/",
          sourceCode: "https://github.com/mohamedsaied22/Weather-App",
        },
        {
          title: "MoHappy landing page",
          path: "/landing-page.png",
          description: "MoHappy is an exciting web project that marks the beginning of your journey in web development. Built using HTML5 and CSS3, this project is a testament to your dedication and passion for learning. With MoHappy, you've taken the first step towards creating engaging and user-friendly web experiences that bring joy and happiness to people's lives.",
          link: "https://mohamedsaied22.github.io/MoHappy-Landing-page/",
          sourceCode: "https://github.com/mohamedsaied22/MoHappy-Landing-page",
        },
        {
          title: "BUSNIESS",
          path: "/busniess.png",
          description: "BUSNIESS is a sleek and professional web project built using HTML5 and CSS3. This platform is designed to showcase your business in the best possible light, with clean and modern design elements that emphasize your brand identity. With BUSNIESS, you can create a powerful online presence and attract new customers to your business.",
          link: "https://mohamedsaied22.github.io/business/",
          sourceCode: "https://github.com/mohamedsaied22/business",
        },
      ],
    },
  ],
};

// import Swiper components and required styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";



// import Next.js Image component
import Image from "next/image";
import { useState } from "react";

//faramr motion
import { motion } from "framer-motion";
import { fadeIn } from "/variants";

const WorkSlider = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowOverlay(true);
  };
  // initialize Vanilla Tilt.js on each slide element


  return (
    <>
      <Swiper
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="h-[280px] sm:h-[480px]"
      >
        {/* loop through each slide */}
        {workSlider.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 gap-4 cursor-pointer ">
                {/* loop through each image */}
                {slide.images.map((image, index) => {
                  return (
                    <div
                      key={index}
                      className="relative rounded-lg shadow-2xl overflow-hidden flex items-center justify-center group w-[90%] h-[90%] "
                      onClick={() => handleProjectClick(image)}
                    >
                      <div className="relative overflow-hidden flex items-center justify-center group-hover:scale-[1.1] ease-in-out transition-all duration-300 ">
                        {/* display image */}
                        <Image
                          src={image.path}
                          width={500}
                          height={300}
                          alt=""
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* overlay */}
      {showOverlay && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center w-full h-full z-50 "
          onClick={() => setShowOverlay(false)}
        >
          <motion.div
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="tilt-slide bg-white p-4 rounded-lg shadow-lg shadow-zinc-600 w-[600px] h-[400px] flex flex-col justify-between"
          >
            <div
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-800 shadow">
                {selectedProject.title}
              </h2>
              <p className=" text-black font-sans font-semibold">{selectedProject.description}</p><br />
              <p className=" text-black font-sans font-bold">{selectedProject.note}</p>
            </div>
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex justify-end items-end mt-4"
            >
              <a
                href={selectedProject.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mr-4 ui-btn"
              >
                <span>Source Code</span>
              </a>
              <motion.a
                variants={fadeIn("right", 0.5)}
                initial="hidden"
                animate="show"
                exit="hidden"
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="prj-demo"
              >
                <div class="button">
                  <div class="box">L</div>
                  <div class="box">I</div>
                  <div class="box">V</div>
                  <div class="box">E</div>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default WorkSlider;
