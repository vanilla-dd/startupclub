import QRCode from "./logos/qr-code";

const Clikkin = () => {
  return (
    <div className="flex items-center justify-around bg-[url('/blob_bg.svg')] bg-contain bg-right bg-no-repeat pb-20">
      <p className="text-center font-SugarPeachy text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
        DOWNLOAD
        <br />
        Our
        <br />
        App
      </p>
      <QRCode />
    </div>
  );
};

export default Clikkin;
