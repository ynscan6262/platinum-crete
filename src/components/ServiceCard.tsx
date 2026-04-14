"use client";

import { motion, type Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  showButton?: boolean;
  onQuoteClick?: () => void;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  showButton = false,
  onQuoteClick,
}: ServiceCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      className="group bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#E87722] p-8 transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4"
    >
      <div className="w-12 h-12 flex items-center justify-center text-[#E87722]">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <h3 className="text-white font-montserrat font-bold text-lg">{title}</h3>
      <p className="text-[#A8A9AD] font-inter text-sm leading-relaxed flex-1">{description}</p>
      {showButton && (
        <a
          href="/contact"
          onClick={onQuoteClick}
          className="mt-2 inline-block border border-[#E87722] text-[#E87722] hover:bg-[#E87722] hover:text-white font-montserrat font-bold text-sm px-5 py-2.5 transition-all duration-300 text-center"
        >
          Request a Quote
        </a>
      )}
    </motion.div>
  );
}
