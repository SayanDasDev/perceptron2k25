"use client";

import { Card, Carousel } from "@/components/ui/apple-cards-carousel";

import { galleryData } from "@/config/gallery";

import Heading from "../heading";

export function Gallery() {
  const cards = galleryData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
<<<<<<< HEAD
    <div className="w-full flex flex-col items-center justify-center space-y-12">
      <div className="w-screen">
        <Heading heading="Gallery" />
        <Carousel items={cards} />
      </div>
=======
    <div className="w-screen flex flex-col items-center justify-center space-y-12">
      <Heading heading="Gallery" />
      <Carousel items={cards} />
>>>>>>> development
    </div>
  );
}
