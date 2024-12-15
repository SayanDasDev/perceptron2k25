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
        url="https://videos.pexels.com/video-files/5091624/5091624-hd_1920_1080_24fps.mp4"
        playing
        muted
        width="100vw"
        height="100vh"
      />
    </div>
  );
}

export default BgVideo;
