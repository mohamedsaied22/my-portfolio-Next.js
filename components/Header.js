// next image
import Image from "next/image";

//next link 
import Link from "next/link";

//components
import Socials from '../components/Socials'


const Header = () => {
  return (
  <header className="absolute w-full z-30 flex items-center px-0 xl:px-0 xl:h-[90px]">
    
    <div className="container mx-auto">
      <div className="flex flex-row flex-wrap justify-between items-center gap-y-6 py-4 relative text-center  ">
        {/* logo */}
        
        <Link href={'/'}>
        <Image 
        src={'/logo.svg'}
        width={160}
        height={48}
        alt=""
        priority={true}
        className=" lg:w-[220px] logo p-[10px] "
        />
        </Link>
        {/* socual */}
        <Socials />
      </div>
    </div>
  </header>
  );
};

export default Header;
