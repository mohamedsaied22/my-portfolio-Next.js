//next image
import Image from "next/image";

//next link
import Link from "next/link";
// icons
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href={"/work"}
        className="relative w-[150px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group "
      >
        <Image
          src={"/rounded-text.png"}
          width={141}
          height={148}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
        />
        <HiArrowRight className="absolute text-2xl group-hover:translate-x-[10px] group-hover:text-4xl transition-all duration-100 " />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
