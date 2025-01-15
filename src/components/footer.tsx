import ButtonAnimated from "./animated/button-animated";
import { StyledLogo } from "./animated/stagger-pullup";
import { Button } from "./ui/button";

const Footer = ({ footerRef }: { footerRef: React.Ref<HTMLDivElement> }) => {
  return (
    <div className="relative space-y-10 overflow-clip px-2 pb-6 pt-10 sm:space-y-14 md:space-y-20 md:px-8 md:pb-6 lg:pb-8">
      <div className="text-center">
        <p className="text-3xl sm:text-6xl md:text-8xl lg:text-9xl">
          dummy@gmail.com
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10">
        <p className="text-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
          Stay Connected
          <br />
          Build Together
        </p>
        <ButtonAnimated
          containerClass="mb-2 group px-4 py-6 text-xs sm:py-6 sm:text-sm lg:px-8 lg:py-8 lg:text-xl"
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
        <div className="-mt-72 w-full">
          <img src="/svg/footer_rocket.svg" alt="rocket" />
        </div>
      </div>
      <div
        className="flex flex-col justify-center gap-2 px-2 text-xs sm:flex-row sm:items-center sm:justify-between sm:text-sm lg:text-base"
        ref={footerRef}
      >
        <div className="flex flex-col items-center justify-center gap-2 text-center sm:items-start md:flex-row md:items-baseline md:gap-4">
          <StyledLogo className="sm:text-2xl" />
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
      <div className="pointer-events-auto absolute -bottom-8 block h-16 w-full scale-x-105 bg-[url('/svg/footer_ppl.svg')] bg-contain bg-repeat-x md:-bottom-6"></div>
    </div>
  );
};

export default Footer;
