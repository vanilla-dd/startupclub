import ButtonAnimated from "./animated/button-animated";
import Gravity, { MatterBody } from "./animated/gravity";
import Telegram from "./logos/telegram";
import { Button } from "./ui/button";

const Feature = () => {
  return (
    <div className="container mx-auto space-y-6 px-2 sm:space-y-8 md:space-y-12 lg:space-y-16">
      <p className="text-center font-ChangaOne text-3xl font-medium text-black sm:text-4xl md:text-5xl lg:text-6xl">
        From{" "}
        <span className="px-px text-transparent underline decoration-dashed underline-offset-4 [-webkit-text-stroke-color:black] [-webkit-text-stroke-width:1px]">
          Networking
        </span>{" "}
        to{" "}
        <span className="px-px text-transparent underline decoration-dashed underline-offset-4 [-webkit-text-stroke-color:black] [-webkit-text-stroke-width:1px]">
          Action
        </span>{" "}
        , We've Got You Covered
      </p>
      <div className="flex flex-wrap items-stretch justify-center gap-8 lg:gap-16">
        <div className="flex h-[300px] w-full max-w-[600px] flex-col justify-between rounded-lg bg-sky-200 bg-[url('/image/telegram_bg.png')] bg-[size:100%] bg-center bg-no-repeat bg-blend-lighten transition-all duration-500 will-change-transform hover:scale-[.99] hover:bg-[size:120%] md:rounded-xl lg:h-[500px]">
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
        <div className="flex h-[300px] w-full max-w-[600px] flex-col justify-between rounded-lg bg-gray-200 bg-[url('/image/startup_bg.png')] bg-[size:100%] bg-center bg-no-repeat bg-blend-lighten transition-all duration-500 will-change-transform hover:scale-[.99] hover:bg-[size:120%] md:rounded-xl lg:h-[500px]">
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
        {/* <div className="flex w-full max-w-[600px] flex-col justify-between rounded-lg bg-yellow-200 transition-transform duration-300 will-change-transform hover:scale-[.99] md:rounded-xl">
          <p className="px-6 py-6">Local Chapter</p>
          <p className="text-center text-2xl lg:text-5xl">
            "some text here..."
          </p>
          <div className="self-end px-4 py-4 lg:px-8 lg:py-6">
            <ButtonAnimated>Start Now</ButtonAnimated>
          </div>
        </div> */}
        <div className="flex h-[300px] w-full max-w-[600px] flex-col rounded-xl bg-rose-100 md:rounded-xl lg:h-[500px] lg:rounded-3xl">
          <p className="px-6 py-6">Digital Footprint</p>
          <div className="relative flex h-full w-full flex-col">
            <Gravity gravity={{ x: 0, y: 1 }} className="h-full w-full">
              <MatterBody
                matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                x="10%"
                y="33%"
              >
                <div className="rounded-full bg-gray-200 px-8 py-6 text-2xl hover:cursor-pointer sm:text-3xl">
                  Meetup
                </div>
              </MatterBody>
              <MatterBody
                matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                x="20%"
                y="10%"
              >
                <div className="rounded-full bg-[#0077b5] px-10 py-8 text-3xl text-white hover:cursor-pointer sm:text-4xl">
                  Linkedin
                </div>
              </MatterBody>
              <MatterBody
                matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                x="70%"
                y="40%"
              >
                <div className="rounded-full bg-gray-200 px-6 py-6 text-2xl hover:cursor-pointer sm:text-3xl">
                  Youtube
                </div>
              </MatterBody>
              <MatterBody
                matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                x="60%"
                y="50%"
              >
                <div className="rounded-full bg-gray-200 px-12 py-10 text-4xl hover:cursor-pointer sm:text-5xl">
                  Discord
                </div>
              </MatterBody>
              <MatterBody
                matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                x="30%"
                y="70%"
              >
                <div className="rounded-full bg-gray-200 px-6 py-6 text-2xl hover:cursor-pointer sm:text-3xl">
                  Telegram
                </div>
              </MatterBody>
              <MatterBody
                matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                x="80%"
                y="90%"
              >
                <div className="rounded-full bg-gray-200 px-6 py-6 text-2xl hover:cursor-pointer sm:text-3xl">
                  Instagram
                </div>
              </MatterBody>
            </Gravity>
          </div>
        </div>

        <div className="flex h-[300px] w-full max-w-[600px] flex-col justify-between rounded-lg bg-gray-200 transition-transform duration-300 will-change-transform hover:scale-[.99] md:rounded-xl lg:h-[500px]">
          <p className="px-6 py-6">Take the Lead</p>
          <div className="relative flex flex-1 flex-col items-center justify-center gap-4">
            <Button className="px-10 py-8 text-2xl">Request mentorship</Button>
            <Button className="px-10 py-8 text-2xl">
              Startup Pitch Workshop
            </Button>
            <Button className="px-10 py-8 text-2xl">Give Interviewed</Button>
            <Button className="px-10 py-8 text-2xl">Talent Registry</Button>
            <Button className="px-10 py-8 text-2xl">Volenteer</Button>
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
    </div>
  );
};

export default Feature;
