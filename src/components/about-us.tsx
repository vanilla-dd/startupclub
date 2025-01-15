import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      id="about"
      className="container mx-auto -mt-14 flex flex-col items-center justify-center space-y-4 bg-[url(/svg/stars_arrows_mobile.svg)] bg-contain bg-center bg-no-repeat px-2 pt-14 text-black sm:space-y-8 sm:bg-[url(/svg/stars_arrows.svg)] md:space-y-10 md:bg-cover lg:space-y-14"
    >
      <p className="text-center font-ChangaOne text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl">
        Together, we{" "}
        <span className="text-transparent underline decoration-dashed underline-offset-4 [-webkit-text-stroke-color:black] [-webkit-text-stroke-width:1px]">
          succeed
        </span>
      </p>
      <p className="text-balance text-center text-base sm:text-xl md:text-2xl lg:text-3xl">
        We are a collective of visionaries, strategists, and creators,
        transforming bold ideas into impactful realities. Our mission is to
        provide startups with the resources, community, and expertise they need
        to thrive.
      </p>
      <img src="/svg/power_of_friendship.svg" alt="" loading="lazy" />
    </div>
  );
};

export default AboutUs;
