"use client";

import Image from "next/image";

import { Facebook, Globe, Instagram, Linkedin, Youtube } from "lucide-react";

import { sponsorData } from "@/config/sponsors";

import Heading from "../heading";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

const Sponsors = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-12">
      <Heading heading="Sponsors" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 gap-10 max-w-7xl mx-auto w-full">
        {sponsorData.map((sponsor, index) => (
          <CardContainer key={index} className="flex flex-1 inter-var">
            <CardBody className="hover:bg-slate-900 flex flex-col items-center relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-black/[0.1] w-full max-w-[380px] h-auto rounded-xl p-6 border  ">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  // src={sponsor.imageURL}
                  src={`https://raw.githubusercontent.com/SayanDasDev/perceptron2k25/refs/heads/development/public${sponsor.imageURL}`}
                  width={200}
                  height={200}
                  alt={sponsor.name}
                  className="h-40 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>
              <CardItem
                translateZ="100"
                className="w-full mt-4 text-center text-background text-xl font-bold"
              >
                {sponsor.title}
              </CardItem>
              <div className="grid grid-cols-3 flex-wrap gap-2 mt-10">
                {Object.entries(sponsor.links || {}).map(
                  ([social, link], index) => (
                    <CardItem
                      key={index}
                      translateZ={20}
                      as="button"
                      onClick={() => window.open(link, "_blank")}
                      className="px-4 py-2 bg-background rounded-full text-foreground/80 hover:text-foreground"
                    >
                      {social == "website" && (
                        <>
                          <span className="sr-only">Website</span>
                          <Globe size={16} />
                        </>
                      )}
                      {social == "linkedin" && (
                        <>
                          <span
                            className="sr-only
                      "
                          >
                            LinkedIn
                          </span>
                          <Linkedin size={16} />
                        </>
                      )}
                      {social == "facebook" && (
                        <>
                          <span className="sr-only">Facebook</span>
                          <Facebook size={16} />
                        </>
                      )}
                      {social == "instagram" && (
                        <>
                          <span className="sr-only">Instagram</span>
                          <Instagram size={16} />
                        </>
                      )}
                      {social == "youtube" && (
                        <>
                          <span className="sr-only">YouTube</span>
                          <Youtube size={16} />
                        </>
                      )}
                    </CardItem>
                  )
                )}
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
