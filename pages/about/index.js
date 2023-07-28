/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
//  icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaSass,
} from "react-icons/fa";
import { SiNextdotjs, SiJira } from "react-icons/si";
import { BiHappyHeartEyes, BiSupport, BiLogoTailwindCss } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsGit, BsGithub } from "react-icons/bs";

//framer-motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//counter
import CountUp from "react-countup";



// About data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",

        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <BiLogoTailwindCss />,
          <FaSass />,
          <FaWordpress />,
        ],
      },
      {
        title: "Software Development Tools",
        icons: [<BsGit />, <BsGithub />, <SiJira />],
      },
    ],
  },

  {
    title: "experience",
    info: [
      {
        title: "Web Developer, Freelancer - Upwork",
        stage: "2023 - present",
      },
      {
        title: "Software Application Support - Izam",
        stage: "2022 - 2023",
      },
      {
        title: "Intern - Alan Dick",
        stage: "June 2021 - Sep 2021",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        desc: "Web Design Deploma",
        title: "From:  NTI",
        stage: "May - June 2023 ",
      },
      {
        desc: "Bachelor of Computer Science",
        title: "From: MUST UNIVERSITY",
        stage: "2013 - 2019",
      },
    ],
  },

  {
    title: "certifications",
    info: [
      {
        title: "Web Development - NTI",
        stage: "June - 2023",
      },
      {
        title: "Web Development Challenger Nanodegree - Udacity",
        stage: "March - 2023",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // add a loading state

  useEffect(() => {
    // simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="h-full py-20 xl:py-32 text-center xl:text-left">
                  {/* background image */}
                  <div
  className={`bg-about bg-cover bg-right bg-no-repeat w-full h-full absolute left-0 top-0 opacity-[.25] z-0`}
></div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center z-10">
          <motion.h2
            className="h2 shadow"
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Welcome <span className="text-cyan-600">again!</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.8)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-4 xl:mb-12 px-2 xl:px-0 font-sans font-semibold shadow"
          >
            
            Detail-oriented and ambitious front-end web developer eager to
            leverage my Bachelor of Information Technology degree in Computer
            Science and recent experience participating in various coding
            programs towards supporting business web development needs.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 1.8)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* clents */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-center mb-2 flex items-center flex-col ">
                  <div className="text-cyan-500 text-center flex items-center flex-col shadow">
                    <BiHappyHeartEyes className="mr-1 flex-1 shadow" />
                    <CountUp start={0} end={255} duration={10} />
                  </div>
                  <div className="text-xs uppercase text-center tracking-[1px] loading-[1.4] max-w-[100px]">
                    <br />
                    Happy Clients
                  </div>
                </div>
              </div>
              {/* finish Projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-center mb-2 flex items-center flex-col ">
                  <div className="text-cyan-500 text-center flex items-center flex-col shadow">
                    <AiOutlineFundProjectionScreen className="mr-1 flex-1 shadow" />
                    <CountUp start={0} end={15} duration={10} />
                  </div>
                  <div className="text-xs uppercase  text-center tracking-[1px] loading-[1.4]  max-w-[100px]">
                    <br />
                    Finished Projects
                  </div>
                </div>
              </div>
              {/* Support*/}

              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-center mb-2 flex items-center flex-col ">
                  <div className="text-cyan-500 text-center flex items-center flex-col shadow">
                    <BiSupport className="mr-1 flex-1" />
                    <CountUp start={0} end={877} duration={10} />
                  </div>
                  <div className="text-xs uppercase  text-center tracking-[1px] loading-[1.4] max-w-[100px]">
                    <br />
                    Hours Of Support
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("down", 1.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 ">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-cyan-600 after:w-[100%] after:bg-cyan-700 after:transition-all after:duration-700 after:left-0  "
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:absolute overflow-hidden after:left-[-20px] after:bottom-0 `}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center  xl:items-start ">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex flex-1 flex-col md:flex-row max-w-max gap-x-2 items-center"
                >
                  {/* title */}
                  <div className="font-bold mb-2 md:mb-0 text-cyan-600 ">
                    {item.desc}
                  </div>
                  <div className="font-bold mb-2 md:mb-0 text-cyan-600 ">
                    {item.title}
                  </div>
                  <div className="hidden md:flex ">-</div>

                  <div>{item.stage}</div>
                  {/* icons */}
                  <div className="flex gap-x-4 ">
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div
                          key={itemIndex}
                          className="text-2xl transition-all duration-100 hover:scale-[1.5] "
                        >
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          
        </motion.div>
      </div>
      
    </div>
  );
};

export default About;
