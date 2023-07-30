//next link
import Link from "next/link";

import { BsFacebook, BsLinkedin, BsWhatsapp, BsGithub } from "react-icons/bs";
import { TiSocialSkype } from "react-icons/ti";

//darkmode
import DarkModeButton from "./darkmode";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-2 text-md sm:text-xl relative ">
      {/* <Link href={'https://github.com/mohamedsaied22'} target="_blank" className=" hover:text-[#6e5494]  hover:scale-[1.2] group transition-all duration-200">
      <BsGithub />
    </Link>
    <Link href={'linkedin.com/in/mohamed-saied-507b29216'} target="_blank" className=" hover:text-[#56687a] hover:scale-[1.2] group transition-all duration-200">
      <BsLinkedin />
    </Link>
    <Link href={''} className=" hover:text-[#1877f2] hover:scale-[1.2] transition-all duration-200">
      <BsFacebook />
    </Link>
    <Link href={'https://web.whatsapp.com/'} target="_blank" className=" hover:text-[#25d366] hover:scale-[1.2] transition-all duration-200">
      <BsWhatsapp />
    </Link> */}

      <button class="btn-cssbuttons">
    
        <span>
          <TiSocialSkype />
        </span>
        <ul>
          <li>
            <a href="https://github.com/mohamedsaied22" target="_blank">
              <BsGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mohamed-saied-507b29216/" target="_blank">
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/mohamed.l.karar/" target="_blank">
            <BsFacebook />
            </a>
          </li>
          <li>
            <a href="https://wa.me/201113959979" target="_blank">
            <BsWhatsapp />
            </a>
          </li>
        </ul>
      </button>
      <div className=" relative left-[0px] dark-btn">
        <DarkModeButton />

        </div>
    </div>
  );
};

export default Socials;
