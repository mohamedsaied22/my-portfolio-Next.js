// next image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="drop-shadow-2xl hidden xl:flex xl:max-w-none transition-all duration-1000">
      <Image src={'/ava.png'} width={1200} height={678} alt="home image"
      className="translate-z-0 h-full w-full"/>

    </div>
  )
};

export default Avatar;
