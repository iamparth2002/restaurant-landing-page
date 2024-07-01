import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Order from '@/components/Order';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className='flex flex-col '>
      <div className="max-w-[1170px] mx-auto">
        <Header />
        <Hero />
        <About />
        <Order />
      </div>
      <Cta className="pt-10"/>
      <Footer/>
    </main>
  );
}
