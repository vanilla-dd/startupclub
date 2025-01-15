const QRCode = () => {
  return (
    <div className="scale-75 rounded-3xl bg-black/5 p-8 sm:p-16 lg:scale-100 lg:p-0">
      <img
        src="/svg/qr_code.svg"
        alt="qrcode"
        loading="lazy"
        className="md:scale-75"
      />
    </div>
  );
};
export default QRCode;
