import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import ScrollToTop from "@/components/ScrollToTop";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Video from "@/components/Video";

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Hero/>
      <ScrollToTop/>
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      {/* <Testimonials /> */}
      <Team />
      {/* <Pricing /> */}
      <Blog />
      <Contact />
    </>
  );
}
