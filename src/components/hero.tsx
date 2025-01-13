import { ArrowRight } from "lucide-react";
import ButtonAnimated from "./animated/button-animated";

const Hero = () => {
  return (
    <div className="container mx-auto mt-20 space-y-6 px-4 md:mt-24 md:space-y-10">
      <div
        style={{
          fontSize: "clamp(3.75rem, 16.964vw + 0.357rem, 15.625rem)",
        }}
        className="flex flex-col leading-none"
      >
        <div className="flex">
          <h1
            className="relative"
            style={{
              transform:
                "perspective(2000px) translate3d(0px, 0px, 0px) rotateX(80deg) skew(-14deg, 0deg)",
              opacity: 0,
            }}
          >
            RE
            <div className="absolute -left-8 top-12 -rotate-[30deg] rounded-sm bg-yellow-400 px-2 py-1 font-Rubik text-xs font-semibold uppercase md:px-4 md:py-2 md:text-sm">
              <span>Innovation</span>
            </div>
          </h1>
          <h1
            className="relative"
            style={{
              transform:
                "perspective(2000px) translate3d(0px, 0px, 0px) rotateX(80deg) skew(-14deg, 0deg)",
              opacity: 0,
            }}
          >
            THINK
            <div className="absolute -right-8 bottom-4 -rotate-12 rounded-sm bg-rose-400 px-2 py-1 font-Rubik text-xs font-semibold uppercase md:px-4 md:py-2 md:text-sm">
              <span>Funding</span>
            </div>
          </h1>
        </div>
        <h1
          className="relative self-end"
          style={{
            transform:
              "perspective(2000px) translate3d(0px, 0px, 0px) rotateX(80deg) skew(-14deg, 0deg)",
            opacity: 0,
          }}
        >
          STARTUPS
          <div className="absolute bottom-4 right-0 rotate-6 rounded-sm bg-green-400 px-2 py-1 font-Rubik text-xs font-semibold uppercase md:px-4 md:py-2 md:text-sm">
            <span>Community</span>
          </div>
        </h1>
      </div>
      <div className="flex flex-col items-center justify-between gap-4 font-Rubik text-muted-foreground md:flex-row">
        <div>
          <p className="max-w-prose px-4 text-xs md:px-0 md:text-start md:text-sm lg:text-base">
            Where innovation meets{" "}
            <span className="group relative rounded-md bg-zinc-300 px-1 text-black">
              <video
                src="/community.mp4"
                className="group pointer-events-none absolute -top-2 left-1/2 z-50 hidden aspect-video -translate-x-1/2 -translate-y-full overflow-hidden rounded-md object-cover object-bottom group-hover:block"
                autoPlay
                loop
                muted
                controls={false}
              />
              community
            </span>
            . From connecting ambitious founders to offering resources,
            mentorship, and funding opportunities, The Startup Club will be your
            partner in building a thriving future.
          </p>
        </div>
        <div className="overflow-y-clip">
          <ButtonAnimated
            containerClass="btn mb-2 group px-4 py-6 text-xs sm:py-6 sm:text-sm lg:px-8 lg:py-8 lg:text-xl"
            asChild
          >
            <a href="https://t.me/+2p31iaNtAxsyN2E1" target="_blank">
              Join The Movement
              <ArrowRight className="scale-105 transition-transform group-hover:-rotate-[25deg] md:scale-125" />
            </a>
          </ButtonAnimated>
        </div>
      </div>
    </div>
  );
};

export default Hero;
