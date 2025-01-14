import { StyledLogo } from "./animated/stagger-pullup";

const Footer = ({ footerRef }: { footerRef: React.Ref<HTMLDivElement> }) => {
  return (
    <div
      className="flex items-center justify-between gap-8 px-4 pb-5 pt-10 text-xs sm:text-sm md:px-8 lg:text-base xl:pt-14"
      ref={footerRef}
    >
      <StyledLogo />
      <p>© 2024 The Startup Club. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
