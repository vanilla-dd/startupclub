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
      className="container mx-auto flex flex-col items-center justify-center space-y-14 bg-[url(/stars_arrows_mobile.svg)] bg-contain bg-center bg-no-repeat px-2 pt-14 sm:bg-[url(/stars_arrows.svg)] md:bg-cover"
    >
      <p className="text-center font-ChangaOne text-5xl font-medium text-black">
        Together, we{" "}
        <span className="text-transparent underline decoration-dashed underline-offset-4 [-webkit-text-stroke-color:black] [-webkit-text-stroke-width:1px]">
          succeed
        </span>
      </p>
      <p className="">
        We are a collective of visionaries, strategists, and creators,
        transforming bold ideas into impactful realities. Our mission is to
        provide startups with the resources, community, and expertise they need
        to thrive.
      </p>
      <img src="/power_of_friendship.svg" alt="" />
    </div>
  );
};

export default AboutUs;
