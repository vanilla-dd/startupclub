import QRCode from "./logos/qr-code";

const Clikkin = () => {
  return (
    <div
      className="flex flex-wrap items-center justify-around bg-[url('/svg/blob_bg.svg')] bg-contain bg-center bg-no-repeat"
      id="download"
    >
      <div className="-mb-4 flex flex-row flex-wrap items-center justify-center gap-x-4 text-center font-SugarPeachy text-5xl sm:text-6xl md:-mt-0 md:flex-col md:text-7xl lg:text-8xl xl:text-9xl">
        <p className="relative">
          DOWNLOAD
          <img
            src="/svg/v_sign.svg"
            alt="v sign"
            className="absolute bottom-full right-full w-10 md:w-16 lg:w-20"
            loading="lazy"
          />
        </p>
        <p>Our App</p>
      </div>
      <QRCode />
    </div>
  );
};

export default Clikkin;
