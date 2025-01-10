import ButtonAnimated from "./animated/button-animated";
import { Button } from "./ui/button";

const Feature = () => {
  return (
    <div className="container mx-auto space-y-8 px-2 md:space-y-8">
      <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
        <div className="flex h-[300px] w-full max-w-[600px] flex-col justify-between rounded-lg bg-green-100 bg-[url('/whatsapp-bg.png')] bg-[size:100%] bg-center bg-no-repeat bg-blend-lighten transition-all duration-500 will-change-transform hover:scale-[.99] hover:bg-[size:120%] md:rounded-xl lg:h-[700px]">
          <p className="px-6 py-6">Whatsapp</p>
          <p className="text-center text-2xl lg:text-5xl">
            Stay connected with our community in real-time.
          </p>
          <div className="self-end px-4 py-4 lg:px-8 lg:py-6">
            <ButtonAnimated>Join now</ButtonAnimated>
          </div>
        </div>
        <div className="flex h-[300px] w-full max-w-[600px] flex-col justify-between rounded-lg bg-yellow-200 transition-transform duration-300 will-change-transform hover:scale-[.99] md:rounded-xl lg:h-[700px]">
          <p className="px-6 py-6">Local Chapter</p>
          <p className="text-center text-2xl lg:text-5xl">
            "some text here..."
          </p>
          <div className="self-end px-4 py-4 lg:px-8 lg:py-6">
            <ButtonAnimated>Start Now</ButtonAnimated>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
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
      </div>
    </div>
  );
};

export default Feature;
