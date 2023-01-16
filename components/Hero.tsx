import Link from "next/link";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, helper] = useTypewriter({
    words: [
      "Hi, My Name Is Dillon Ellis",
      "Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.obilisk.co%2Fwp-content%2Fuploads%2F2018%2F11%2FDonkey-Kong-Country-2-Concept-render-SNES.jpg&f=1&nofb=1&ipt=7ef1e7bd3173e27884b8b47ca623c821a3eeebf84c0e42238cb197ac4cc27d8e&ipo=images"
        alt=""
      />
      <div className="z-20">
        <div className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          software engineer
        </div>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10 text-center">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
