//componants
import WorkSlider from "../../components/WorkSlider";

//faramr motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Projects = () => {
  return (
    <div className="h-full flex items-center py-36">
      {/* <Circles /> */}
      {/* background image */}
      <div
        className={`bg-project bg-cover bg-right bg-no-repeat w-full h-full absolute left-0 top-0 opacity-20 z-0`}
      ></div>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="flex text-center xl:w-[30vw] flex-col lg:text-left mb-2 xl:mb-0">
            <motion.h2
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8 md:mt-10 sm:mt-8 shadow"
            >
              My Projects<span className="text-cyan-700 shadow">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 shadow"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              dolorum necessitatibus placeat sequi cumque,
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("up", 1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[62%]"
          >
            {/* slider */}
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      {/* <Bulb /> */}
    </div>
  );
};

export default Projects;
