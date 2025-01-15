import ButtonAnimated from "./animated/button-animated";
import { StyledLogo } from "./animated/stagger-pullup";
import { Button } from "./ui/button";

const Footer = ({ footerRef }: { footerRef: React.Ref<HTMLDivElement> }) => {
  return (
    <div className="relative space-y-10 overflow-clip px-2 pb-6 pt-10 sm:space-y-14 md:space-y-20 md:px-8 md:pb-10 lg:pb-12">
      <div className="grid place-items-center text-center transition-transform hover:translate-y-1 hover:scale-[0.99] hover:opacity-95">
        <a
          href="https://qfreeaccountssjc1.az1.qualtrics.com/jfe/form/SV_elzZq31Wkns4UvA"
          target="_blank"
          className="text-shadow-large relative inline-flex flex-wrap items-center justify-center text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:pb-40"
        >
          <p>
            Help us tailor the
            <img
              src="/svg/heart.svg"
              alt="heart"
              loading="lazy"
              className="absolute -top-6 right-full w-10 translate-x-1/2 -rotate-45 sm:w-14 md:w-20"
            />
          </p>{" "}
          <p className="px-2 sm:px-4">community</p>
        </a>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 bg-background bg-[url('/image/footer_bg.png')] bg-cover bg-center py-20 bg-blend-color-burn sm:gap-8 sm:py-36 md:gap-12 md:py-52 xl:py-72">
        <p className="text-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
          <span className="px-2 text-transparent underline decoration-dashed underline-offset-8 [-webkit-text-stroke-color:black] [-webkit-text-stroke-width:2px]">
            Stay
          </span>{" "}
          Connected
          <br />
          Build{" "}
          <span className="px-2 text-transparent underline decoration-dashed underline-offset-8 [-webkit-text-stroke-color:black] [-webkit-text-stroke-width:2px]">
            Together
          </span>
        </p>
        <ButtonAnimated
          containerClass="group px-4 py-6 text-xs sm:py-6 sm:text-sm lg:px-8 lg:py-8 lg:text-xl"
          asChild
        >
          <a
            href="https://t.me/+2p31iaNtAxsyN2E1"
            target="_blank"
            className="tracking-wider [word-spacing:2px]"
          >
            Join Us It's Free
          </a>
        </ButtonAnimated>
      </div>
      <div
        className="flex flex-col justify-center gap-2 px-2 text-xs sm:flex-row sm:items-center sm:justify-between sm:text-sm lg:text-base"
        ref={footerRef}
      >
        <div className="flex flex-col items-center justify-center gap-2 text-center sm:items-start md:flex-row md:items-baseline md:gap-4">
          <StyledLogo className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" />
          <p>© 2024 The Startup Club. All Rights Reserved.</p>
        </div>
        <div>
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="link"
              className="px-0 transition-opacity hover:opacity-65"
              asChild
            >
              <a href="#about">About Us</a>
            </Button>
            <hr className="h-6 w-px bg-yellow-300" />
            <Button
              variant="link"
              className="px-0 transition-opacity hover:opacity-65"
              asChild
            >
              <a href="#chapter">Chapters</a>
            </Button>
            <hr className="h-6 w-px bg-yellow-300" />
            <Button
              variant="link"
              className="px-0 transition-opacity hover:opacity-65"
              asChild
            >
              <a href="#event">Events</a>
            </Button>
            {/* <hr className="h-6 w-px bg-yellow-300" />
            <Button variant="link" className="px-0 hover:opacity-65 transition-opacity" asChild>
              <a href="/term">Term</a>
            </Button>
            <hr className="h-6 w-px bg-yellow-300" />
            <Button variant="link" className="px-0" asChild>
              <a href="/privacy">Privacy</a>
            </Button> */}
          </div>
        </div>
      </div>
      <div className="pointer-events-auto absolute -bottom-8 block h-16 w-full scale-x-105 bg-[url('/svg/footer_ppl.svg')] bg-contain bg-repeat-x md:-bottom-5"></div>
    </div>
  );
};

export default Footer;
