//componants
// import Circles from "/components/Circles";

//icons
import { BsArrowRight } from "react-icons/bs";

//framer
import { motion } from "framer-motion";

//varaitns
import { fadeIn } from "../../variants";

import ParticlesContainer from "/components/ParticlesContainer";
// import MyScene from '/components/MyScene';

import StarsCanvas from "/components/StarsCanvas";

//3d
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

// import { styles } from "../styles";
// import EarthCanvas from "../../components/EarthCanvas";
// import { SectionWrapper } from "../hoc";

//message pop
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { BsFacebook, BsLinkedin, BsWhatsapp, BsGithub } from "react-icons/bs";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r1vdo4s",
        "template_1i6wu1p",
        form.current,
        "Z4aBCM13L0jr9p2kd"
      )
      .then(
        (result) => {
          console.log(result); // Check the result object in the console
          toast.success("Your message has been sent!", {
            position: toast.POSITION.BOTTOM_LEFT,
          });
        },
        (error) => {
          console.log(error); // Check the error object in the console
          toast.error("An error occurred. Please try again later.", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
      );
  };

  return (
    <div className="h-full">
      {/* particles */}
      <div>
        <ParticlesContainer />
      </div>
          {/* background image */}
          <div
  className={`bg-about bg-cover bg-right bg-no-repeat w-full h-full absolute left-0 top-0 opacity-[.15] z-0`}
  ></div>
      <div className="container mx-auto  text-center xl:text-left flex flex-wrap items-center justify-center h-full ">
        {/* contact info */}
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="contact-info flex flex-col text-center xl:text-left w-full xl:w-1/3 mb-0 z-20 text-shad-sm"
        >
          <h3 className=" hidden lg:block xl:text-2xl xl:mb-4 text-sky-600 text-shad">
            GET IN TOUCH
          </h3>
          <p className="xl:mb-2 text-sm xl:text-md mt-4">
            <FaEnvelope className=" inline-block mr-2" />
            Email:&nbsp;&nbsp; mohamedsaid2994@gmail.com
          </p>
          <p className="xl:mb-2 text-sm xl:text-md">
            <FaMapMarkerAlt className="inline-block mr-2" />
            Location: &nbsp;&nbsp;Cairo, EGYPT
          </p>
          <p className="xl:mb-2 text-sm xl:text-md">
            <FaPhone className="inline-block mr-2" />
            Phone: &nbsp;&nbsp;+2
            &nbsp;&nbsp;111&nbsp;&nbsp;39&nbsp;&nbsp;599&nbsp;&nbsp;79
          </p>

          <ul className="flex gap-x-4 text-md xl:text-2xl relative mt-4 mb-8 justify-center xl:justify-start">
            <li>
              <a href="https://github.com/mohamedsaied22" target="_blank">
                <BsGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mohamed-saied-507b29216/"
                target="_blank"
              >
                <BsLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/mohamed.l.karar/"
                target="_blank"
              >
                <BsFacebook />
              </a>
            </li>
            <li>
              <a href="https://wa.me/201113959979" target="_blank">
                <BsWhatsapp />
              </a>
            </li>
          </ul>
        </motion.div>
        {/* text form */}
        <div className="container flex flex-col w-full xl:w-2/3 max-w-[700px] z-20">
          {/* text */}
          <motion.h2
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-2xl xl:text-[36px] mt-[-200px] lg:mt-0 mb-4 xl:mb-12 text-center text-shad-sm"
          >
          Lets<span className="text-cyan-600 text-shad-sm pt-4">Connect.</span> 
          </motion.h2>
          {/* form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            action=""
            className="flex flex-1 flex-col w-full gap-6 mx-auto"
          >
            {/* inputs group */}
            <div className="flex w-full gap-x-6 ">
              <div className="container-input flex w-full gap-x-6">
                <input
                  type="text"
                  className="input h-[30px] xl:h-[45px]"
                  name="user_name"
                  required
                />
                <label class="label">Name</label>
              </div>

              <div className="container-input flex w-full gap-x-6">
                <input
                  type="text"
                  className="input h-[30px] xl:h-[45px]"
                  name="user_email"
                  required
                />
                <label class="label">Email</label>
              </div>
            </div>

            <div className="container-input flex w-full gap-x-6">
              <input
                type="text"
                className="input h-[30px] xl:h-[45px]"
                name="subject"
                required
              />
              <label class="label">Subject</label>
            </div>

            <div className="container-input">
              <textarea
                className="textarea h-[80px] xl:h-[200px] "
                name="message"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button type="submit" class="send-btn z-40 w-[100px] h-[40px]">
              <div class="svg-wrapper-1">
                <div class="svg-wrapper">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>Send</span>
            </button>
          </motion.form>
        </div>
      </div>
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default Contact;
