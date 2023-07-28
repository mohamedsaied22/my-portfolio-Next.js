//import fonts
import {Sora} from '@next/font/google'

//fonts settings
const sora = Sora ({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100','200','300','400','500','600','700','800',]
})

//componants
import Nav from '../components/Nav'
import Header from '../components/Header'
import TopLeftImg from '../components/TopLeftImg'


const Layout = ({children}) => {
  return (
    <div className={'page w-full ${sora.variable} font-sora relative'}>
    <TopLeftImg />
    <Nav />
    <Header />
    {children}
  </div>
  )
};

export default Layout;
