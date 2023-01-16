import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.2,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h2 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h2>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Ff6%2F2a%2Fea%2Ff62aea127567058424ad343b9304e2a8.jpg&f=1&nofb=1&ipt=4ef829a58fb4a16cf06919610f8026913a486d7b23175b3379f2a818b66cd7e4&ipo=images"
        className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-94 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <div className="text-4xl font font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          background
        </div>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          nostrum accusamus illo perspiciatis neque, repellat dolore perferendis
          inventore repudiandae eaque! Et accusantium recusandae mollitia
          pariatur nisi, aut libero excepturi. Molestiae. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Error nostrum accusamus illo
          perspiciatis neque, repellat dolore perferendis inventore repudiandae
          eaque! Et accusantium recusandae mollitia pariatur nisi, aut libero
          excepturi. Molestiae.
        </p>
      </div>
    </motion.div>
  );
}
