
//icons 
import {
  HiHome,
  HiUser,
  HiChatBubbleBottomCenterText,
}from 'react-icons/hi2'

import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {MdDesignServices} from 'react-icons/md'


export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <MdDesignServices /> },
  { name: 'Projects', path: '/work', icon: <AiOutlineFundProjectionScreen /> },
  // {
  //   name: 'testimonials',
  //   path: '/testimonials',
  //   icon: <HiChatBubbleBottomCenterText />,
  // },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiChatBubbleBottomCenterText />,
  },
];

//next link
import Link from 'next/link';
//next router
import { useRouter } from 'next/router';
const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
  <nav className='drop-shadow-2xl flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-2 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
    {/* inner */}
    <div className='flex w-[95%] xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-10 xl:px-0 h-[30px] xl:h-max py-8 backdrop-blur-sm text-3xl xl:text-xl rounded-full nav-border shadow-xl shadow-zinc-700 nav-shad bg bg-gradient-to-bl bg-transparent   '>
      {navData.map((link , index )=> {
        return <Link className={`${link.path === pathname && ' text-blue-100 shadow-md border-am border-sky-200 shadow-black p-2 border-2 rounded-full bg-gradient-to-r from-sky-800 via-sky-600 to-sky-400'} text-2xl bg  relative flex items-center group hover:scale-[1.1] transition-all duration-100`}
        href={link.path} key={index}>
          {/* tooltip */}
        <div className='transition-all duration-100 absolute pr-14 right-0 hidden xl:group-hover:flex '>
          <div className='shadow-xl shadow-black bg-gradient-to-r from-sky-900 via-sky-500 to-sky-600 relative flex items-center text-white p-[10px] rounded-[10px]'>
            <div className='text-[14px] leading-none font-semibold capitalize '>{link.name}</div>
          {/* traingle */}
          <div className='border-solid border-l-sky-600 border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div>
          </div>
        </div>


          {/* icons */}
          <div>{link.icon}</div>
          </Link>
      })}
    </div>
  </nav>
  )
};

export default Nav;