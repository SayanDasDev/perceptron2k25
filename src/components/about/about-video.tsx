import { HeroVideoDialog } from "../ui/hero-video-dialog";

export function AboutVideo() {
  return (
    <div className="relative w-full lg:w-1/2 mx-auto mt-4 mb-8">
      <HeroVideoDialog
        className="block"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/AQ0y952kZyA?si=IjfPc3v05bwdTkN"
        thumbnailSrc="/home/debanjan/perceptron/perceptron2k25/build/images/youtube-thumbnail.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
