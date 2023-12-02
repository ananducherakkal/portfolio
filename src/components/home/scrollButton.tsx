import React, { useEffect, useState } from "react";
import Button from "../ui/button";
import DoubleDownIcon from "../icon/doubleDownIcon";
import { motion } from "framer-motion";

export interface IScrollButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const shakeVariants = {
  initial: { x: 0 },
  shake: {
    y: [-5, 5, -5, 5, -3, 3, -2, 2, 0],
    transition: { duration: 0.9 },
  },
};

function ScrollButton(props: IScrollButton) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setKey((prevKey) => prevKey + 1);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Button
      variant="transparent"
      className="w-fit flex items-center"
      {...props}
    >
      <div className="mr-2">Scroll down</div>
      <motion.div
        key={key}
        variants={shakeVariants}
        initial="initial"
        animate="shake"
        whileHover="shake"
      >
        <DoubleDownIcon />
      </motion.div>
    </Button>
  );
}

export default ScrollButton;
