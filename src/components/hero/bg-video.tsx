"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

function BgVideo() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return;

  return (
    <div className="absolute bg-video inset-0 ">
      <ReactPlayer
        controls={false}
        autoPlay={true}
        loop={true}
        url="/hero-video.mp4"
        playing
        muted
        width="100vw"
        height="100vh"
      />
    </div>
  );
}

export default BgVideo;
