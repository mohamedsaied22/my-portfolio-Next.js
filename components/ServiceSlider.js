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
import {
  SiOracle,
} from "react-icons/si";
import {
  AiFillDatabase,
} from "react-icons/ai";

import {
  HiOutlineDocumentReport,
} from "react-icons/hi";
import {
  MdOutlineSchool,
} from "react-icons/md";


import { FaLaptopCode , FaJava} from 'react-icons/fa';
import { TbApiApp } from 'react-icons/tb';
import { TfiSupport } from 'react-icons/tfi';


//VanillaTilt
import { useEffect } from "react";
import VanillaTilt from 'vanilla-tilt';

// service data
export const serviceData = [
  {
    icon: <FaLaptopCode />,
    title: "Oracle Fusion Applications Development",
    description: "Developing and customizing Oracle Fusion applications using OTBI, BIP Publisher, and other Oracle tools to meet specific business needs.",
  },
  {
    icon: <SiOracle />,
    title: "ERP Customization",
    description: "Customizing Oracle ERP modules to enhance functionality, improve efficiency, and align with business processes.",
  },
  {
    icon: <AiFillDatabase />,
    title: "Advanced PL/SQL and Database Optimization",
    description: "Writing complex PL/SQL scripts and optimizing database performance to ensure fast and reliable data processing.",
  },
  {
    icon: <TbApiApp />,
    title: "Oracle Integration Cloud (OIC)",
    description: "Integrating Oracle ERP with other systems using Oracle Integration Cloud (OIC) to streamline business processes and data flow.",
  },
  {
    icon: <HiOutlineDocumentReport />,
    title: "Custom Report Development",
    description: "Creating customized reports using OTBI and BIP Publisher to provide actionable insights and support decision-making.",
  },
  {
    icon: <TfiSupport />,
    title: "Technical Support and Troubleshooting",
    description:"Providing technical support and troubleshooting for Oracle applications, diagnosing and resolving issues efficiently using advanced problem-solving skills.",
  },
  {
    icon: <MdOutlineSchool />,
    title: "Technical Trainer",
    description: "Training and mentoring the functional team in Oracle technical skills, including Oracle SQL, OTBI and BIP Publisher.",
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
      className="h-[280px] sm:h-[390px] md:h-[340px] lg:h-[315px] xl:h-[460px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div  className="h-auto sm:h-[370px] md:h-[310px] lg:h-[270px] xl:h-[360px] rounded-xl shadow-xl shadow-zinc-800 px-4 py-6 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer transition-all duration-100 relative  tilt-slide">
            {/* icons */}
              <div className="text-3xl mb-2 transition-all duration-300">{item.icon}</div>
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