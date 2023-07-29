// next image
import Image from "next/image";
import Typewriter from "typewriter-effect";

// componants
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import DarkModeButton from "/components/darkmode";

import StarsCanvas from "/components/StarsCanvas";

//framer  motion
import { easeInOut, motion } from "framer-motion";

//variatns
import { fadeIn } from "../variants";

// loading
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Loading from "../components/loading";

//text typing

const Home = () => {
  const [showDiv, setShowDiv] = useState(false);
  const [showBg, setShowBg] = useState(true);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
      NProgress.start();
    };
    const handleComplete = () => {
      setLoading(false);
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  const handleToggle = () => {
    setShowDiv(!showDiv);
    setShowBg(!showBg);
  };
  return (
    <div className=" h-full">
      {/* text */}
      <StarsCanvas />
      <div className="w-full h-full " key="home-page">
        <div className="flex text-center flex-col justify-center pt-0 xl:pt-20 xl:text-left h-full container mx-auto  ">
          {/* title */}
          <motion.p
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-lg lg:text-3xl z-20 font-bold text-shad-sm "
          >
            Hello, I am
          </motion.p>
          <motion.h2
            className="h2 z-20 text-sky-600 font-signture text-shad-sm  "
            variants={fadeIn("right", 1)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Mohamed Saied,
          </motion.h2>
          <motion.div
            variants={fadeIn("right", 1.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <h3 className="text-xl lg:text-3xl font-bold mb-4 z-30 ">
              I am a
              <motion.div
                variants={fadeIn("right", 2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="text-sky-600 font-texttyping "
              >
                <Typewriter
                  options={{
                    strings: [
                      "",
                      "",
                      "Web Developer",
                      "Software Implementor",
                      "Freelancer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </motion.div>
            </h3>
          </motion.div>
          {/* links */}
          <motion.a
            variants={fadeIn("right", 2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            href="/about"
          >
            <button className="learn-more z-30 mb-4 ">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text text-shad-sm">Read More</span>
            </button>
          </motion.a>
          <div className="flex xl:justify-start justify-end xl:flex-row gap-y-6 ">
          <motion.a
  href="https://drive.google.com/file/d/1fu3R3uUjtBIDOHBlayvH07L4RyeSV0VC/view?usp=sharing"
  download="your-cv-name.pdf"
  className="z-20 pl-10 md:pl-0"
  target="_blank"
  variants={fadeIn("right", 2.5)}
  initial="hidden"
  animate="show"
  exit="hidden"
>
  <button className="personal-btn h-[35px] w-[120px] lg:h[45px] lg:w-[130px]">
    My CV
  </button>
</motion.a>
            <motion.a
              href="/contact"
              className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-4 xl:mb-10 z-20 "
              variants={fadeIn("right", 3)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <button className="personal-btn h-[35px] w-[120px] lg:h[45px] lg:w-[130px] ">
                Hire me
              </button>
            </motion.a>
          </div>
          {/*projects btns */}
          <motion.div
            className="flex justify-center xl:hidden relative z-20"
            variants={fadeIn("right", 3.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <ProjectsBtn />
          </motion.div>
          <motion.div
            variants={fadeIn("right", 3.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex z-20"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* image */}
      <div className="w-full h-full absolute right-0 bottom-0 ">
        {/* background image */}
        <div
          className={`bg-about opacity-[.15] xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-[133%] h-full absolute translate-z-0 xl:opacity-30`}
        ></div>
        {/* avatar */}
        <motion.div
          className=" max-w-[900px] max-h-[700px] absolute -bottom-32 lg:bottom-[100px] lg:right-[0px] drop-shadow-2xl "
          variants={fadeIn("down", 4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1 }}
        >
          <Avatar />
        </motion.div>
      </div>
      <DarkModeButton />
      {loading && <Loading />}
    </div>
  );
};

export default Home;
