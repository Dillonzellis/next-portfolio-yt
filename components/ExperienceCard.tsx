import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article>
      <motion.img
        initial={{
          y: 100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="https://pictures.alignable.com/eyJidWNrZXQiOiJhbGlnbmFibGV3ZWItcHJvZHVjdGlvbiIsImtleSI6ImJ1c2luZXNzZXMvbG9nb3Mvc3F1YXJlLzIzNzg2MzIvMTUxNjkxMjQ4NV9ibG9iIiwiZWRpdHMiOnt9fQ=="
        alt=""
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />

      <div className="px-0 md:px-10">
        <h3 className="text-4xl font-light">Web Developer</h3>
        <p className="font-bold text-2xl mt-1">RLM</p>
        <div className="flex space-x-2 my-2">
          {/* { Tech Used } */}
          {/* { Tech Used } */}
          {/* { Tech Used } */}
          {/* { Tech Used } */}
        </div>
        <p>Started Work... Ended...</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}
