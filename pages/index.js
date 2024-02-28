import Head from 'next/head';
import Script from 'next/script'
import styles from '../styles/Home.module.css';
import Header from './components/Header'
import Intro from './components/Intro'
import Education from './components/Education'
import Services from './components/Services'
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Script src="/script.js"/>
      <Head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Responsive Portfolio Website</title> 
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
      </Head>

      <Header />
      <Intro />
      <Education />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
