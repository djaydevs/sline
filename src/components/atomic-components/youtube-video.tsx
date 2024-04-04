"use client";

import { cn } from "@/lib/utils";

type YouTubeVideoProps = {
  videoId: string;
  fullVideo?: boolean;
  className?: string;
};

export const YoutubeVideo = (props: YouTubeVideoProps) => {
  const { videoId, fullVideo = false, className = "" } = props;

  return (
    <div
      className={cn(
        "aspect-w-16 aspect-h-9",
        { "w-full lg:w-screen": fullVideo },
        className
      )}>
      <iframe
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="aspect-video w-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
      />
    </div>
  );
};
