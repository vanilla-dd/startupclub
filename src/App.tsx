import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import Preloader from "./components/preloader";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import AboutUs from "./components/about-us";
import Feature from "./components/feature";
import Event from "./components/event";
import Chapter from "./components/chapter";
import Footer from "./components/footer";
import Clikkin from "./components/clikkin";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(preloaderRef.current, {
      scale: 100,
      xPercent: -110,
      delay: 1.15,
      duration: 1,
      ease: "power1",
      onComplete: () => {
        preloaderRef.current?.remove();
      },
    })
      .fromTo(mainRef.current, { opacity: 0 }, { opacity: 1 })
      .to("h1.relative", {
        opacity: 1,
        rotateX: 0,
        skewX: 0,
        perspective: "3.26625e+19px",
        duration: 1,
        stagger: 0.125,
      })
      .fromTo(".btn", { opacity: 0, y: 100 }, { opacity: 1, y: 0 }, "-=.25");
  });

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-[9999] bg-black text-background will-change-transform"
        ref={preloaderRef}
      >
        <Preloader />
      </div>
      <main ref={mainRef} className="h-full min-h-dvh w-full font-ChangaOne">
        <Navbar />
        <Hero />
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28"></div>
        <AboutUs />
        <div className="mt-16 md:mt-20 lg:mt-24 xl:mt-28"></div>
        <Feature />
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28"></div>
        <Event />
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28"></div>
        <Chapter />
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28"></div>
        <Clikkin />
        <div className="sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28"></div>
        <Footer footerRef={footerRef} />
      </main>
    </>
  );
}

export default App;
