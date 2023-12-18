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
      className="w-full h-screen flex flex-col p-14 md:p-24 md:pb-12 relative overflow-hidden"
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
          <div className="text-2xl md:text-4xl lg:text-5xl text-gray-40 dark:text-gray-30 font-medium mt-10">
            Hello! My name is
          </div>
          <div className="text-5xl md:text-7xl font-medium text-text">
            <motion.span
              initial={{ color: "#2B2B2B" }}
              animate={{ color: "#FFD232" }}
              transition={{ duration: 0.5, delay: 1 }}
              className="inline dark:hidden"
            >
              Anandu
            </motion.span>
            <motion.span
              initial={{ color: "#F2F2F2" }}
              animate={{ color: "#FFD232" }}
              transition={{ duration: 0.5, delay: 1 }}
              className="hidden dark:inline"
            >
              Anandu
            </motion.span>{" "}
            Cherakkal
          </div>
          <div className="text-lg text-gray-60 dark:text-gray-40 font-medium mt-3 max-w-3xl">
            I am a Full-Stack developer with 4+ years of experience with a
            passion for everything in front-end. To know more about me scroll
            down.
          </div>
        </motion.div>
        <div className="text-gray-50/5 w-2/5 -z-10 absolute top-1/2 -left-28 transform -translate-y-1/4">
          <BackgroundPattern className="w-full" />
        </div>
      </div>
      <ScrollButton onClick={onScroll} />
      <Logo className="text-gray-30 dark:text-gray-80 h-1/2 w-auto max-w-full -z-10 absolute top-auto bottom-0 left-auto right-0 transform -translate-y-1/4 translate-x-1/4" />
    </div>
  );
}

export default ProfileSection;
