import '../styles/globals.css';

//componants
import Layout from '../components/Layout';
import Transition from '../components/Transition'

//router
import { useRouter } from 'next/router';
// framer motion
import { AnimatePresence, motion } from 'framer-motion';

import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'>
          <Transition />
          <Component {...pageProps} />;
        </motion.div>
      </AnimatePresence>
    </Layout>
    </ThemeProvider>
  )

}

export default MyApp;
