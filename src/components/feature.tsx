import ButtonAnimated from "./animated/button-animated";
import Telegram from "./logos/telegram";

const Feature = () => {
  return (
    <div className="container mx-auto space-y-6 px-2 sm:space-y-8 md:space-y-12 lg:space-y-16 xl:space-y-20">
      <p className="text-center font-ChangaOne text-3xl font-medium text-black sm:text-4xl md:text-5xl lg:text-6xl">
        From{" "}
        <span className="text-transparent underline decoration-dashed underline-offset-4 [-webkit-text-stroke-color:black] [-webkit-text-stroke-width:1px]">
          Networking
        </span>{" "}
        to{" "}
        <span className="text-transparent underline decoration-dashed underline-offset-4 [-webkit-text-stroke-color:black] [-webkit-text-stroke-width:1px]">
          Action
        </span>{" "}
        , We've Got You Covered
      </p>
      <div className="flex flex-wrap items-stretch justify-center gap-8 lg:gap-16">
        <div className="flex h-[300px] w-full max-w-[600px] flex-col justify-between rounded-lg bg-sky-200 bg-[url('/png/telegram_bg.png')] bg-[size:100%] bg-center bg-no-repeat bg-blend-lighten transition-all duration-500 will-change-transform hover:scale-[.99] hover:bg-[size:120%] md:rounded-xl lg:h-[500px]">
          <p className="px-6 py-6">Telegram</p>
          <p className="px-3 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Stay connected with our community in real-time.
          </p>
          <div className="self-end px-2 py-2 lg:px-6 lg:py-4">
            <ButtonAnimated asChild containerClass="">
              <a
                href="https://t.me/+2p31iaNtAxsyN2E1"
                target="_blank"
                className="flex items-center justify-center gap-1.5 !px-3 md:gap-3 md:!px-5 md:py-6 lg:text-xl"
              >
                <Telegram className="md:scale-150" /> Connect With Us
              </a>
            </ButtonAnimated>
          </div>
        </div>
        <div className="flex h-[300px] w-full max-w-[600px] flex-col justify-between rounded-lg bg-gray-200 bg-[url('/png/startup_bg.png')] bg-[size:100%] bg-center bg-no-repeat bg-blend-lighten transition-all duration-500 will-change-transform hover:scale-[.99] hover:bg-[size:120%] md:rounded-xl lg:h-[500px]">
          <p className="px-6 py-6">Startup Registry</p>
          <p className="px-3 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Get Your Startup registered.
          </p>
          <div className="self-end px-2 py-2 lg:px-6 lg:py-4">
            <ButtonAnimated asChild containerClass="">
              <a
                href="https://t.me/+2p31iaNtAxsyN2E1"
                target="_blank"
                className="flex items-center justify-center gap-1.5 !px-3 md:gap-3 md:!px-5 md:py-6 lg:text-xl"
              >
                Register Now
              </a>
            </ButtonAnimated>
          </div>
        </div>
        <div className="flex w-full max-w-[600px] flex-col justify-between rounded-lg bg-yellow-200 transition-transform duration-300 will-change-transform hover:scale-[.99] md:rounded-xl">
          <p className="px-6 py-6">Local Chapter</p>
          <p className="text-center text-2xl lg:text-5xl">
            "some text here..."
          </p>
          <div className="self-end px-4 py-4 lg:px-8 lg:py-6">
            <ButtonAnimated>Start Now</ButtonAnimated>
          </div>
        </div>
      </div>
      {/* <div className="flex h-[300px] w-full max-w-[600px] flex-col justify-between rounded-lg bg-green-100 bg-[url('/whatsapp-bg.png')] bg-[size:100%] bg-center bg-no-repeat bg-blend-lighten transition-all duration-500 will-change-transform hover:scale-[.99] hover:bg-[size:120%] md:rounded-xl lg:h-[500px]">
          <p className="px-6 py-6">Whatsapp</p>
          <p className="text-center text-2xl lg:text-5xl">
            Stay connected with our community in real-time.
          </p>
          <div className="self-end px-4 py-4 lg:px-8 lg:py-6">
            <ButtonAnimated>Join now</ButtonAnimated>
          </div>
        </div> */}
      {/* <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
        <div className="w flex h-[500px] w-full max-w-[600px] flex-col justify-between rounded-xl bg-rose-100 transition-transform duration-300 will-change-transform hover:scale-[.99] md:rounded-xl lg:h-[700px] lg:rounded-3xl">
          <p className="px-6 py-6">Digital Footprint</p>
          <div className="relative flex-1">
            <Button className="absolute left-4 top-1/3 px-8 py-6 text-2xl">
              Meetup
            </Button>
            <Button className="absolute left-20 top-10 bg-[#0077b5] px-10 py-8 text-3xl">
              Linkedin
            </Button>
            <Button className="absolute right-16 top-40 px-6 py-6 text-2xl">
              Youtube
            </Button>
            <Button className="absolute right-20 top-1/2 px-12 py-10 text-4xl">
              Discord
            </Button>
            <Button className="absolute bottom-32 left-20 px-6 py-6 text-2xl">
              Telegram
            </Button>
            <Button className="absolute bottom-8 right-24 px-6 py-6 text-2xl">
              Instagram
            </Button>
          </div>
        </div>
        <div className="flex h-[500px] w-full max-w-[600px] flex-col justify-between rounded-lg bg-gray-200 transition-transform duration-300 will-change-transform hover:scale-[.99] md:rounded-xl lg:h-[700px]">
          <p className="px-6 py-6">Take the Lead</p>
          <div className="relative flex flex-1 flex-col items-center justify-center gap-8">
            <Button className="px-10 py-8 text-2xl">Volenteer</Button>
            <Button className="px-10 py-8 text-2xl">Talent Registry</Button>
            <Button className="px-10 py-8 text-2xl">Give Interviewed</Button>
            <Button className="px-10 py-8 text-2xl">Request mentorship</Button>
            <Button className="px-10 py-8 text-2xl">
              Startup Pitch Workshop
            </Button>
            <Button className="px-10 py-8 text-2xl">
              Suggest Brainstroming Topic
            </Button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Feature;
