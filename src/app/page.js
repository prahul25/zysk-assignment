import Blog from "@/components/Blog";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Socialprof from "@/components/Socialprof";
import Testimonials from "@/components/Testimonials";
import Trial from "@/components/Trial";
import Utility from "@/components/Utility";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Socialprof/>
      <Features/>
      <Testimonials/>
      <Utility/>
      <Faq/>
      <Blog/>
      <Trial/>
      <Footer/>
    </div>
  );
}
