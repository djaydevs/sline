import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function MainPage() {
  return (
    <div className="h-full relative w-full overflow-hidden">
      <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl left-1/2 -translate-x-1/2">
        <h1 className="bg-clip-text text-transparent drop-shadow-2xl text-6xl font-black bg-gradient-to-b from-white/80 to-white/20">
        Welcome to Sline!
        </h1>
        <p className="text-center text-[25px] mt-2 text-neutral-200 relative z-20">
        Your guide to a systematic FOCUS design.
      </p>
      </div>
    </BackgroundGradientAnimation>
    </div>
  );
}
