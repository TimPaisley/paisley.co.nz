import Image from "next/image";
import me from "../public/me.jpg";
import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  upright: {
    rotate: 0,
    transition: { ease: "easeOut" },
    transformOrigin: "50% 90% 0",
  },
  hanging: {
    rotate: 180,
    transition: { type: "spring", duration: 2.5, bounce: 0.8 },
    transformOrigin: "50% 90% 0",
  },
};

const clicksToToggle = 5;

export default function ProfileImage() {
  const [clicks, setClicks] = useState<number>(0);

  const isHanging = Math.ceil((clicks + 1) / clicksToToggle) % 2 === 0;

  return (
    <div className="relative">
      <motion.div
        onClick={() => setClicks(clicks + 1)}
        className="relative mb-12 z-10 cursor-pointer"
        variants={variants}
        animate={isHanging ? "hanging" : "upright"}
      >
        <Image
          className="w-20 h-20 object-cover object-top rounded-full border-2 border-blue-500"
          src={me}
          alt="A picture of me (Tim Paisley)"
          placeholder="blur"
        />
      </motion.div>

      <div className="absolute top-0 left-0 w-20 h-20 rounded-full flex justify-center items-center">
        Boo
      </div>
    </div>
  );
}
