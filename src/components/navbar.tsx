import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ButtonAnimated from "./animated/button-animated";
import { StyledLogo } from "./animated/stagger-pullup";

const Navbar = () => {
  const { y: currentScrollY } = useWindowScroll();
  const navContainerRef = useRef<HTMLDivElement>(null);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    if (!navContainerRef.current) return;
    if (currentScrollY === 0) {
      setIsNavVisible(true);
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useGSAP(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-1 top-0 z-[9999] h-14 rounded-md bg-background transition-all duration-500 sm:inset-x-6 md:top-2 md:h-16 lg:h-20"
    >
      <div className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex items-center justify-between px-2 py-2 md:px-6 md:py-6">
          <StyledLogo />
          <div className="hidden items-center justify-center gap-4 md:flex">
            <Button variant="link" className="px-0" asChild>
              <a href="#about">About Us</a>
            </Button>
            <hr className="h-6 w-px bg-yellow-300" />
            <Button variant="link" className="px-0" asChild>
              <a href="#chapter">Chapters</a>
            </Button>
            <hr className="h-6 w-px bg-yellow-300" />
            <Button variant="link" className="px-0" asChild>
              <a href="#event">Events</a>
            </Button>
            <hr className="h-6 w-px bg-yellow-300" />
            <ButtonAnimated asChild>
              <a href="#download">Download</a>
            </ButtonAnimated>
          </div>
          <div className="md:hidden">
            <MobileNav />
          </div>
        </nav>
      </div>
    </div>
  );
};

const MobileNav = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
        <circle cx="5" cy="12" r="1" />
      </svg>
    </>
  );
};

export default Navbar;
