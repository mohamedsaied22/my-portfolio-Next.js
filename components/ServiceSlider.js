import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import {

  RxPencil2,
  RxDesktop,
  RxAccessibility,

  RxArrowTopRight,
} from "react-icons/rx";


import { FaLaptopCode } from 'react-icons/fa';
import { TbApiApp } from 'react-icons/tb';
import { TfiSupport } from 'react-icons/tfi';


//VanillaTilt
import { useEffect } from "react";
import VanillaTilt from 'vanilla-tilt';

// service data
export const serviceData = [
  {
    icon: <FaLaptopCode />,
    title: "Web development",
    description: "Building responsive, accessible, and SEO-optimized websites using HTML5, CSS3, and JavaScript, with modern frameworks like Next.js and Tailwind CSS.",
  },
  {
    icon: <RxPencil2 />,
    title: "(UI) design",
    description: "Designing attractive and functional user interfaces for web and mobile applications using CSS3 and HTML5, creating wireframes, prototypes, and mockups with tools like Figma or Adobe XD.",
  },
  {
    icon: <RxDesktop />,
    title: "Front-end optimization",
    description: "Improving website and web application performance and user experience through techniques like lazy loading, caching, and code minification, using knowledge of DOM and BOM.",
  },
  {
    icon: <TbApiApp />,
    title: "API integration",
    description: "Integrating third-party APIs into applications or creating custom APIs to improve functionality and user experience, using REST APIs, JSON, and AJAX.",
  },
  {
    icon: <RxAccessibility />,
    title: "Accessibility",
    description: "Ensuring that websites and web applications are accessible to users with disabilities, using techniques like ARIA attributes and semantic HTML.",
  },
  {
    icon: <TfiSupport />,
    title: "Technical support",
    description: "Providing technical support and troubleshooting services to diagnose and fix issues with websites and web applications, using debugging tools and problem-solving skills to resolve issues quickly and efficiently.",
  },
];

const ServiceSlider = () => {
  // initialize Vanilla Tilt.js on each slide element
  useEffect(() => {
    Array.from(document.querySelectorAll(".tilt-slide")).forEach((slide) => {
      VanillaTilt.init(slide, {
        max: 25,
        speed: 400
      });
    });
  }, []);

  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[280px] sm:h-[435px] md:h-[420px] lg:h-[360px] xl:h-[460px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div  className="h-auto sm:h-[390px] md:h-[330px] lg:h-[290px] xl:h-[360px] rounded-xl shadow-xl shadow-zinc-700 px-4 py-6 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer transition-all duration-100 relative  tilt-slide">
              {/* icons */}
              <div className="text-3xl mb-2  transition-all duration-300">{item.icon}</div>
              {/* title&describtion */}
              <div className="mb-4 font-bold">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[400px] font-sans font-semibold">{item.description}</p>
              </div>
              {/* arrow */}
              <div className="text-2xl">
                <RxArrowTopRight className="group-hover:translate-x-2 rotate-45 absolute bottom-4 left-4 group-hover:scale-[1.2] transition-all duration-300"/>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;