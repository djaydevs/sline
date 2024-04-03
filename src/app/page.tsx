import { cn } from "@/lib/utils";
import { Boxes } from "@/components/ui/background-boxes";

export default function MainPage() {
  return (
    <div className="h-full relative w-full overflow-hidden bg-blue-200 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-blue-500 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h1
        className={cn(
          "text-6xl text-slate-900 font-black tracking-wide relative z-20"
        )}
      >
        Introducing Sline!
      </h1>
      <p className="text-center text-[25px] mt-2 text-slate-900 relative z-20">
        Your guide to a systematic FOCUS design.
      </p>
    </div>
  );
}
