"use client";
import React, { useRef } from "react";
import BackgroundPattern from "./backgroundPattern";
import Logo from "./logo";
import ScrollButton from "./scrollButton";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

interface IProfileSection {
  onScroll: () => any;
}

function ProfileSection(props: IProfileSection) {
  const { onScroll } = props;

  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["center start", "center center"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [`0%`, `100%`]);

  return (
    <div
      className="w-full h-screen flex flex-col px-24 py-4 relative overflow-hidden"
      ref={targetRef}
    >
      <div className="w-4/5 flex flex-col my-auto relative py-10">
        <motion.div
          initial={{ scaleX: "0%" }}
          style={{ transformOrigin: "0 0" }}
          animate={{ scaleX: "100%" }}
          transition={{ duration: 1.5 }}
          className="h-2 w-48 bg-primary"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col"
        >
          <div className="text-5xl text-text-60 font-medium mt-10">
            Hello! My name is
          </div>
          <div className="text-7xl text-text font-medium">
            <motion.span
              initial={{ color: "#f2f2f2" }}
              animate={{ color: "#e0b700" }}
              transition={{ duration: 0.5, delay: 2 }}
            >
              Anandu
            </motion.span>{" "}
            Cherakkal
          </div>
          <div className="text-lg text-text-70 font-medium mt-3">
            I am a Full-Stack developer with 4+ years of experience with a
            passion for everything in front-end. To know more about me scroll
            down.
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "-100%", y: "-40%" }}
          style={{ transformOrigin: "0 0" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.5 }}
          className="text-gray-40/5 w-2/5 -z-10 absolute top-1/2 -left-28"
        >
          <BackgroundPattern className="w-full" />
        </motion.div>
      </div>
      <ScrollButton onClick={onScroll} />
      <Logo className="text-gray-60 w-1/2 -z-10 absolute top-2/3 right-0 transform -translate-y-1/2 translate-x-1/4" />
    </div>
  );
}

export default ProfileSection;
