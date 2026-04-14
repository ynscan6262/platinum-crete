"use client";

import { motion, type Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  location: string;
  stars: number;
  text: string;
}

export default function ReviewCard({ name, location, stars, text }: ReviewCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      className="bg-[#1A1A1A] border border-[#2A2A2A] p-8 flex flex-col gap-4"
    >
      <div className="flex gap-1">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} size={18} fill="#E87722" stroke="#E87722" />
        ))}
      </div>
      <p className="text-white font-inter text-sm italic leading-relaxed flex-1">&ldquo;{text}&rdquo;</p>
      <div>
        <p className="text-[#E87722] font-montserrat font-bold text-sm">{name}</p>
        <p className="text-[#A8A9AD] font-inter text-xs mt-0.5">{location}</p>
      </div>
    </motion.div>
  );
}
